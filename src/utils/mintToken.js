const MyWeb3 = require("web3")
const fs = require("fs")
const path = require("path")
const chalk = require("chalk")
const { uploadFile } = require("./S3")

global.artifacts = artifacts
global.web3 = web3

const { Contracts, SimpleProject, ZWeb3 } = require("@openzeppelin/upgrades")
const configPath = "../../../../Desktop/uploadTest1/"
const config = require("../../../../Desktop/uploadTest1/treeData.json")
const token = {
    name: "TestToken",
    symbol: "TT",
}

async function main() {
    ZWeb3.initialize(web3.currentProvider)

    const MerkleMintCore = Contracts.getFromLocal("MerkleMintCore")
    const MerkleMintController = Contracts.getFromLocal("MerkleMintController")

    //console.log("Artifact data", MerkleMintCore.schema.abi)

    const [creatorAddress, initializerAddress, additionalMinter] = await ZWeb3.accounts()

    const MerkleMint = new SimpleProject("MerkleMint", null, { from: creatorAddress })

    const MMCoreInstance = await MerkleMint.createProxy(MerkleMintCore, {
        initArgs: [token.name, token.symbol, [initializerAddress], [initializerAddress]],
    })
    const MMControllerInstance = await MerkleMint.createProxy(MerkleMintController)

    console.log(`The address of MMCore: ${chalk.red(MMCoreInstance.address)}`)
    console.log(`The address of MMController: ${chalk.red(MMControllerInstance.address)}`)

    //Add MMController as Minter
    await MMCoreInstance.methods
        .addMinter(MMControllerInstance.address)
        .send({ from: initializerAddress, gas: 1500000, gasPrice: "3000000" })

    //Add Token address to MMController
    await MMControllerInstance.methods
        .initializeController(MMCoreInstance.address)
        .send({ from: initializerAddress, gas: 1500000, gasPrice: "3000000" })

    const { assets } = config
    const { tokenId, tokenURI, hashOfURI, root, leaf, proof } = assets[0]
    const serieName = "Series 1"
    const serieNumber = 0

    //profile gas cost
    let balanceBefore = await web3.eth.getBalance(initializerAddress)

    let gas = await MMControllerInstance.methods
        .addSerie(serieNumber, root, serieName, hashOfURI)
        .estimateGas({ from: initializerAddress })

    let lastBlock = await web3.eth.getBlock("latest")
    let limit = lastBlock.gasLimit
    gas = Math.min(limit - 1, Math.ceil(gas * 1.2))

    let gasPrice = await web3.eth.getGasPrice()

    await MMControllerInstance.methods
        .addSerie(serieNumber, root, serieName, hashOfURI)
        .send({ from: initializerAddress, gas, gasPrice })

    let balanceAfter = await web3.eth.getBalance(initializerAddress)

    gas = await MMControllerInstance.methods
        .mintAsset(tokenURI, leaf, proof, tokenId, serieNumber)
        .estimateGas({ from: initializerAddress })

    gas = Math.min(limit - 1, Math.ceil(gas * 1.2))
    gasPrice = await web3.eth.getGasPrice()

    let promiseArray = []
    for (item of assets) {
        const { tokenId, tokenURI, hashOfURI, root, leaf, proof } = item
        console.log(JSON.stringify(item,null,4))
        //This is just to mint only even tokens, to give an example of what tokens aren't minted.
        if (tokenId % 2 == 0) {
            promiseArray.push(
                await MMControllerInstance.methods
                    .mintAsset(tokenURI, leaf, proof, tokenId, serieNumber)
                    .send({ from: initializerAddress, gas, gasPrice }),
            )
        }
    }

    const networkId = await web3.eth.net.getId()
    fs.writeFileSync(
        path.join(configPath, `Project-${networkId}.json`),
        JSON.stringify(MerkleMint, null, 4),
    )

    let transactionArray = []
    Promise.all(promiseArray).then(x => transactionArray.push(x))

    ///Check if all the tokens were minted:
    let assetMintedArray = []
    for (item of assets) {
        item.minted = false
        try {
            let uri = await MMCoreInstance.methods
                .tokenURI(item.tokenId)
                .call({ from: initializerAddress })

            if (uri === item.tokenURI) {
                console.log(`Token ${item.tokenId} has been successfully minted`)
                item.minted = true
            }
        } catch (error) {
            console.log(`Token ${item.tokenId} has not been minted`)
        }
        assetMintedArray.push(item)
    }

    const projectJson = {
        network: networkId,
        contracts: {
            MMController: {
                address: MMControllerInstance.address,
                abi: MerkleMintController.schema.abi,
            },
            MMCore: {
                address: MMCoreInstance.address,
                abi: MerkleMintCore.schema.abi,
            },
        },
        merkletree: config,
    }

    const result = await saveProjectJson(projectJson, networkId)
    console.log(result)
}

const saveProjectJson = async (obj, networkId) => {
    const filePath = path.join(configPath, `contracts.json`)

    fs.writeFileSync(filePath, JSON.stringify(obj, null, 4))

    const s3Obj = await uploadFile(filePath, `contracts.json`)
    return s3Obj
}

// For truffle exec
module.exports = function(callback) {
    main()
        .then(() => callback())
        .catch(err => callback(err))
}

const Web3 = require("web3")
const web3 = new Web3("ws://127.0.0.1:8545")

const tokenArtifact = "/Users/dennison/Documents/MerkleMint/build/contracts/MerkleMintCore.json"
const controllerArtifact =
    "/Users/dennison/Documents/MerkleMint/build/contracts/MerkleMintController.json"

const tokenAddress = "0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B"
const controllerAddress = "0xC89Ce4735882C9F0f0FE26686c53074E09B0D550"

const loadContract = async (contractPath, address) => {
    let contract
    try {
        contract = require(contractPath)
        contract = new web3.eth.Contract(contract.abi)
    } catch (error) {
        throw new Error("Problem loading Contract: ", error)
    }

    return contract
}

const setContractAddress = async (contractObj, address) => {
    contractObj.options.address = address

    return contractObj
}

const callTokenName = async instance => {
    let name = await instance.methods.symbol().call()
    console.log(name)
}

const createSerie = async instance => {

  let accounts = await web3.eth.getAccounts();

  let root = "0x8db8a3dd20425d764b7a6741e9c514486f4130c5821eada49868040a7dfd7174"
  let serieName = "First Series"
  let serieNumber = 0
  let ipfsHash = "0x23f7ccaf4b729962d9f37258163e3cae45dd80226f9aa6969c1f0568d6008c09"


  let tx = await instance.methods.addSerie(serieNumber, root, serieName, ipfsHash).send({from: accounts[0]});

  
  return tx;
}

// loadContract("/Users/dennison/Documents/MerkleMint/build/contracts/MerkleMintCore.json")
//     .then(x => {
//         return setContractAddress(x, tokenAddress)
//     })
//     .then(x => callTokenName(x))

loadContract(controllerArtifact).then(contract => {
    return setContractAddress(contract, controllerAddress)
}).then(instance => {
  return createSerie(instance)
}).then(x => console.log(x))

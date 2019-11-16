require("dotenv").config()

const fs = require("fs")
const path = require("path")
const {config} = require("./config")
const {MerkleTree} = require("./utils/merkleTree")
const {keccak256, bufferToHex} = require("ethereumjs-util")
const {sendMetaDataToIPFS, sendFilesToIPFS} = require("./utils/ipfsUpload")
const {prepareFiles} = require("./utils/prepareFiles")
const {uploadMultipleFiles} = require("./utils/S3")
const {sendToWebFlow} = require("./utils/webFlow")

const start = async () => {
    //Get Directory Contents
    const sourceFiles = fs
        .readdirSync(config.path)
        .filter(file => fs.statSync(path.join(config.path, file)).isFile())
        .map(file => {
            return {fileName: file, filePath: path.join(config.path, file)}
        })

    const preparedFiles = prepareFiles(sourceFiles, config)

    const filesWithHash = await sendFilesToIPFS(preparedFiles)

    const filesUploadedToS3 = await uploadMultipleFiles(filesWithHash)

    const fileMetaDataWithIPFSHash = await sendMetaDataToIPFS(filesUploadedToS3)

    const leavesForTree = fileMetaDataWithIPFSHash.map(fileObj => fileObj.id.tokenURI)

    const merkleTree = new MerkleTree(leavesForTree)

    const root = merkleTree.getHexRoot()

    const filesWithProofs = fileMetaDataWithIPFSHash.map(fileObj => {
        return {
            ...fileObj,
            merkleProof: {
                root: root,
                proof: merkleTree.getHexProof(fileObj.id.tokenURI),
                leaf: bufferToHex(keccak256(fileObj.id.tokenURI)),
            },
        }
    })

    const webflow = await sendToWebFlow(filesWithProofs, "Merklemints")

    const justTheMerkleTree = filesWithProofs.map(obj => {
        return {
            tokenId: obj.tokenId,
            tokenURI: obj.id.tokenURI,
            hashOfURI: obj.id.hashURI,
            ...obj.merkleProof,
        }
    })

    const bundle = {serie: config.serieNumber, assets: [...filesWithProofs]}

    fs.writeFileSync(path.join(config.path, "output.json"), JSON.stringify(bundle, null, 4))
    fs.writeFileSync(
        path.join(config.path, "treeData.json"),
        JSON.stringify({serie: config.serieNumber, assets: [...justTheMerkleTree]}, null, 4),
    )

    process.exit(0)
}

start()

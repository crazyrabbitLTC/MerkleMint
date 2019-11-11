require("dotenv").config()
const {getFileType} = require("./utils/getFileType")
const {extractEXIF} = require("./utils/extractEXIF")
const fs = require("fs")
const path = require("path")
const {config} = require("./config")
const {MerkleTree} = require("./utils/merkleTree")
const {keccak256, bufferToHex} = require("ethereumjs-util")
const {openSea} = require("./exampleMetaData")
const {sendMetaDataToIPFS, sendFilesToIPFS} = require("./utils/ipfsUpload")

const start = async () => {
    //Get Directory Contents
    const files = fs
        .readdirSync(config.path)
        .filter(file => fs.statSync(path.join(config.path, file)).isFile())
        .map(file => {
            return {fileName: file, filePath: path.join(config.path, file)}
        })

    const validFiles = files.filter(file => {
        return config.imageTypes.includes(getFileType(file.filePath).ext)
    })

    const filesWithMetaData = validFiles.map(fileObj => {
        return {
            ...fileObj,
            ...openSea,
            data: {
                exif: extractEXIF(fileObj),
                cmoa: [],
                imageInfo: [],
                artist: [],
                chainData: [],
                dao: [],
            },
        }
    })

    const filesWithHash = await sendFilesToIPFS(filesWithMetaData)

    const fileMetaDataWithIPFSHash = await sendMetaDataToIPFS(filesWithHash)

    const merkleTree = new MerkleTree(fileMetaDataWithIPFSHash.map(fileObj => fileObj.id.tokenURI))

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

    console.log(JSON.stringify(filesWithProofs, null, 4))
    fs.writeFileSync(path.join(config.path, "output.json"), JSON.stringify(filesWithProofs))

    process.exit(0)
}

start()

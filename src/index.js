const { getFileType } = require("./utils/getFileType")

const { extractEXIF } = require("./utils/extractEXIF")

const fs = require("fs")
const path = require("path")
const uuidv4 = require("uuid/v4")
const {config} = require("./config")
const web3 = require("web3")
const {MerkleTree} = require("./utils/merkleTree")
const { keccak256, bufferToHex } = require('ethereumjs-util');
const { openSea, cmoa, exif, imageInfo, artist, chainData, dao } = require('./exampleMetaData');


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
                dao: []
            },
        }
    })

    const filesWithHash = filesWithMetaData.map(fileObj => {
        const id = uuidv4()
        return {
            ...fileObj,
            id: {
                tokenURI: id,
                hashURI: web3.utils.soliditySha3(id),
            },
        }
    })

    const merkleTree = new MerkleTree(filesWithHash.map(fileObj => fileObj.id.tokenURI))

    const root = merkleTree.getHexRoot();

    const filesWithProofs = filesWithHash.map(fileObj => {
      return {
        ...fileObj,
        merkleProof: {
          root: root,
          proof: merkleTree.getHexProof(fileObj.id.tokenURI),
          leaf: bufferToHex(keccak256(fileObj.id.tokenURI))
        }
      }
    })

    console.log(JSON.stringify(filesWithProofs, null, 4))

}

start()

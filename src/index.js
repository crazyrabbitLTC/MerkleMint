
const fs = require("fs")
const path = require("path")
const fileType = require("file-type")
const readChunk = require("read-chunk")
const Parser = require("exif-parser")
const uuidv4 = require("uuid/v4")
const {config} = require("./config")
const web3 = require("web3")
const {MerkleTree} = require("./utils/merkleTree")
const { keccak256, bufferToHex } = require('ethereumjs-util');

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

    const filesWithExif = validFiles.map(fileObj => {
        return {
            ...fileObj,
            data: {
                exif: extractEXIF(fileObj),
            },
        }
    })

    const filesWithHash = filesWithExif.map(fileObj => {
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

    const proofs = filesWithHash.map(fileObj => {
      return {
        ...fileObj,
        merkleProof: {
          root: root,
          proof: merkleTree.getHexProof(fileObj.id.tokenURI),
          leaf: bufferToHex(keccak256(fileObj.id.tokenURI))
        }
      }
    })

    console.log(proofs)

}

function getFileType(file) {
    let example = {ext: null, mime: null}
    return fileType(readChunk.sync(file, 0, fileType.minimumBytes)) || example
}

function extractEXIF(imageFile, exifData = {}) {
    const parser = Parser.create(fs.readFileSync(imageFile.filePath))

    try {
        exifData = {...imageFile, exif: {...parser.parse()}}
    } catch (err) {
        // got invalid data, handle error
        console.log(err)
        return exifData
    }

    return exifData
}

start()

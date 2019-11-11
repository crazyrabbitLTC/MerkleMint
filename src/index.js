require('dotenv').config()
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
const ipfsClient = require('ipfs-http-client');

const ipfs = ipfsClient(process.env.INFURA_IPFS, {protocol: 'https'});


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

    const asyncForEach = async (array, callback) => {
      for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
      }
    }

    const sendFilesToIPFS = async (filesWithMetaData)=>{
      let newArray = [];

      try {
        await asyncForEach(filesWithMetaData, async (fileObj) => {
          let id
           try {
            id = await ipfs.addFromFs(fileObj.filePath);
          } catch (error) {
            console.log(error)
          }
          
          newArray.push({
            ...fileObj,
            id: {
              tokenURI: id[0].hash,
              ipfs: id,
              hashURI: web3.utils.soliditySha3(id[0].hash)
            }
          })
        })
      } catch (error) {
        console.log(error)
      }
       
      return newArray;
    }
    
    const filesWithHash = await sendFilesToIPFS(filesWithMetaData);

    console.log(filesWithHash);
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

    //console.log(JSON.stringify(filesWithProofs, null, 4))

}

start()

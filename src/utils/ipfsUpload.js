const ipfsClient = require("ipfs-http-client")
const ipfs = ipfsClient(process.env.INFURA_IPFS, {protocol: "https"})
const {asyncForEach} = require("./asyncForEach")
const web3 = require("web3")

const sendFilesToIPFS = async filesWithMetaData => {
    let newArray = []

    try {
        await asyncForEach(filesWithMetaData, async fileObj => {
            let id
            try {
                id = await ipfs.addFromFs(fileObj.filePath)
            } catch (error) {
                console.log(error)
            }

            newArray.push({
                ...fileObj,
                image: `/ipfs/${id[0].hash}`,
            })
        })
    } catch (error) {
        console.log(error)
    }

    return newArray
}

const sendMetaDataToIPFS = async filesWithHash => {
    let newArray = []

    try {
        await asyncForEach(filesWithHash, async fileObj => {
            let id

            try {
                id = await ipfs.add(Buffer.from(JSON.stringify(fileObj)))

                newArray.push({
                    ...fileObj,
                    id: {
                        tokenURI: id[0].hash,
                        ipfs: id[0],
                        hashURI: web3.utils.soliditySha3(id[0].hash),
                    },
                })
            } catch (error) {
                throw new Error(error)
            }
        })
    } catch (error) {
        throw new Error(error)
    }
    return newArray
}

// const sendObjToIPFS = async (objArray) => {
//   const buffArray = objArray.map(obj => {

//   })
// }

module.exports = {
    sendFilesToIPFS,
    sendMetaDataToIPFS,
}

const {copyFromExif} = require("./copyFromExif")
const {openSea} = require("../exampleMetaData")
const {getFileType} = require("./getFileType")
const {extractEXIF} = require("./extractEXIF")

function prepareFiles(sourceFiles, config) {
    return sourceFiles
        .filter(file => {
            return config.imageTypes.includes(getFileType(file.filePath).ext)
        })
        .map((fileObj, index)=> {
            return {
              tokenId: index,
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
        .map(fileObj => {
            return {
                ...fileObj,
                ...copyFromExif(fileObj, config),
            }
        })
}

module.exports = {prepareFiles}

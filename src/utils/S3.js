require("dotenv").config()
const AWS = require("aws-sdk")
const fs = require("fs")
const {asyncForEach} = require("./asyncForEach")
const accessKeyId = process.env.AWS_S3_ID
const secretAccessKey = process.env.AWS_S3_Secret

const BUCKET_NAME = "test-mint"
const s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey,
})

const uploadMultipleFiles = async items => {
    let newArray = []
    for (const item of items) {
        const fileContent = fs.readFileSync(item.filePath)

        const params = {Bucket: BUCKET_NAME, Key: item.fileName, Body: fileContent}
        try {
            console.log("Starting upload")
            const s3Obj = await s3.upload(params).promise()
            console.log("finish upload")
            newArray.push({
                ...item,
                s3_URL: s3Obj.Location,
                s3_key: s3Obj.key,
                s3_bucket: s3Obj.Bucket,
            })
            console.log("Success uploading data")
        } catch (err) {
            console.log("Error uploading data. ", err)
        }
    }
    return newArray
}

// const uploadMultipleFiles = async obj => {
//     let newArray = []
//     console.log("Length of Items to handle: ", obj.length)
//     let count = 1
//     try {
//         await asyncForEach(obj, async fileObj => {
//             let s3Obj
//             console.log("Run: ", count)
//             count++
//             console.log("What is the file path? ", fileObj.filePath)
//             try {
//                 s3Obj = await uploadFile(fileObj.filePath, fileObj.fileName)
//             } catch (error) {
//                 console.log("Error in puloadFile ", error)
//                 throw new Error("Error in UploadMultipleFiles: ", error)
//             }
//             console.log("Did we get past UploadFile?")
//             newArray.push({
//                 ...fileObj,
//                 s3_URL: s3Obj.Location,
//                 s3_key: s3Obj.key,
//                 s3_bucket: s3Obj.Bucket,
//             })
//         })
//     } catch (error) {
//         throw new Error("Error Thrown: ", error)
//     }
//     return newArray
// }

const uploadFile = async (filePath, fileName) => {
    // Read content from the file
    console.log("Read File")

    const fileContent = fs.readFileSync(filePath)

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName,
        Body: fileContent,
    }
    console.log("Upload Object: ", fileName)
    // console.log(`Upload Params: ${params.Bucket} ${params.Key} params.Body: ${typeof params.Body}`)

    const returnObject = await s3.upload(params).promise()

    console.log("Finish Upload")
    // console.log("Returned Object: ", returnObject)
    return returnObject
}

//uploadFile("/Users/dennison/Documents/MerkleMint/sampleImages/IMG_3015-copy.jpg", "HoteTake.jpg");
// uploadFile("/Users/dennison/Documents/MerkleMint/sampleImages/IMG_3015-copy.jpg", "HoteTake.jpg");
// uploadFile("/Users/dennison/Documents/MerkleMint/sampleImages/IMG_3015-copy.jpg", "HoteTake.jpg");

module.exports = {
    uploadFile,
    uploadMultipleFiles,
}

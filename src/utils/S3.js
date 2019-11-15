require("dotenv").config()
const AWS = require("aws-sdk")
const fs = require("fs")
const { asyncForEach } = require("./asyncForEach")
const accessKeyId = process.env.AWS_S3_ID
const secretAccessKey = process.env.AWS_S3_Secret

const BUCKET_NAME = "test-mint"

const s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey,
})

//For creating a bucket
// const params = {
//     Bucket: BUCKET_NAME,
//     CreateBucketConfiguration: {
//         // Set your region here
//         LocationConstraint: "eu-west-1",
//     },
// }
// s3.createBucket(params, function(err, data) {
//   if (err) console.log(err, err.stack);
//   else console.log('Bucket Created Successfully', data.Location);
// });

// async const uploadToS3 = (items) => {
//   let newArray = [];

//   for (const item of array) {
//     const params = { Key: item.id, Body: item.body };
//     try {
//       const data = await s3bucket.upload(params).promise();
//       console.log("Success uploading data");
//     } catch (err) {
//       console.log("Error uploading data. ", err);
//     }
//   }
// }


const uploadMultipleFiles = async obj => {
    let newArray = []
    console.log("Length of Items to handle: ", obj.length)
    let count = 1
    try {
        await asyncForEach(obj, async fileObj => {
            let s3Obj
            console.log("Run: ", count)
            count++
            console.log("What is the file path? ", fileObj.filePath)
            try {
                s3Obj = await uploadFile(fileObj.filePath, fileObj.fileName)
            } catch (error) {
              console.log("Error in puloadFile ", error)
                throw new Error("Error in UploadMultipleFiles: ", error)
            }
            console.log("Did we get past UploadFile?")
            newArray.push({
                ...fileObj,
                s3_URL: s3Obj.Location,
                s3_key: s3Obj.key,
                s3_bucket: s3Obj.Bucket,
            })
        })
    } catch (error) {
        throw new Error("Error Thrown: ", error)
    }
    return newArray
}

const uploadFile = async (filePath, fileName ) => {
    // Read content from the file
    console.log("Read File")
    // const fileContent = await new Promise((resolve, reject) => {
    //     fs.readFile(filePath, (err, data) => (err == null ? resolve(data) : reject(err)))
    // })

    const fileContent = fs.readFileSync(filePath);

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName,
        Body: fileContent,
    }
    console.log("Upload Object: ", fileName)
    console.log(`Upload Params: ${params.Bucket} ${params.Key} params.Body: ${typeof(params.Body)}`)

    // const returnObject = await new Promise((resolve, reject) => {
    //     s3.upload(
    //         params,
    //         (err, data) => (err == null ? resolve(data) : reject(err)),
    //     )
    // })

    const returnObject = await s3.upload(params).promise()

    console.log("Finish Upload")
    console.log("Returned Object: ", returnObject)
    return returnObject
}


//uploadFile("/Users/dennison/Documents/MerkleMint/sampleImages/IMG_3015-copy.jpg", "HoteTake.jpg");

module.exports = {
    uploadFile,
    uploadMultipleFiles,
}

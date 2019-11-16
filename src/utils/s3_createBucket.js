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

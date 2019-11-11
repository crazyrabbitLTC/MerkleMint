const config = {
    path: "../sampleImages",
    imageTypes: ["jpg", "tiff"],
    exifCopy: [{from: "ImageDescription", to: "description"}],
}

module.exports = {
    config,
}

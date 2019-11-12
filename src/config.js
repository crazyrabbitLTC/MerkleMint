const config = {
    path: "../sampleImages",
    imageTypes: ["jpg", "tiff"],
    exifCopy: [{from: "ImageDescription", to: "description"}],
    serieNumber: 0
}

module.exports = {
    config,
}

const fs = require("fs")
const Parser = require("exif-parser")
function extractEXIF(imageFile, exifData = {}) {
  const parser = Parser.create(fs.readFileSync(imageFile.filePath));
  try {
    exifData = { ...imageFile, exif: { ...parser.parse() } };
  }
  catch (err) {
    // got invalid data, handle error
    console.log(err);
    return exifData;
  }
  return exifData;
}
exports.extractEXIF = extractEXIF

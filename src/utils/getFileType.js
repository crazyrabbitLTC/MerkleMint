const fileType = require("file-type")
const readChunk = require("read-chunk")
function getFileType(file) {
  let example = { ext: null, mime: null };
  return fileType(readChunk.sync(file, 0, fileType.minimumBytes)) || example;
}
exports.getFileType = getFileType

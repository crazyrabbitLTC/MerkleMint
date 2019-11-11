const copyFromExif = (obj, config) => {
      console.log("CONFIG: ", obj);

  config.exifCopy.map((el) => {
    if(typeof(obj.data.exif.exif.tags[el.from]) && obj.data.exif.exif.tags[el.from]){
      obj[el.to] = obj.data.exif.exif.tags[el.from];
    }
  })

  return obj;
}


module.exports = {copyFromExif}
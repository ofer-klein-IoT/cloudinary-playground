const { cloudinary } = require('./config');

exports.obtainImage = async (publicId, width, height, crop) => {
  try {
    const url = cloudinary.url(publicId, {
      width,
      height,
      crop,
    });
    return url;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const { cloudinary } = require('./config');

exports.uploadAnImage = async (imageUrl, publicId) => {
  try {
    const cloudinaryResponse = await cloudinary.uploader.upload(imageUrl, { public_id: publicId });
    return cloudinaryResponse;
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.uploadImageWithWatermark = async (imageUrl, watermarkPublicId) => {
  try {
    const result = await cloudinary.uploader.upload(imageUrl, {
      resource_type: 'image',
      transformation: [
        {
          overlay: watermarkPublicId,
          width: 200,
          gravity: 'south_east',
          opacity: 50,
          effect: 'brightness:30',
        },
        { quality: 'auto' },
        { fetch_format: 'auto' },
      ],
    });

    console.log('Upload successful:', result.url);
    return result.url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

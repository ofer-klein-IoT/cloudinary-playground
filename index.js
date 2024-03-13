// const { uploadAnImage, uploadImageWithWatermark } = require('./upload');
// const { obtainImage } = require('./obtainImage');
// const { cloudinary } = require('./config');

// const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyElYnHk9KtKx62UZf12lpjoMyiq21vpYUDg&usqp=CAU';
// const HeavyImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Pizigani_1367_Chart_10MB.jpg';
// const watermarkUrl = 'https://play-lh.googleusercontent.com/f1T2pa602nGXy1nEbuElQFoJc27IRikqTsvToW1ejjPIjgb2217EQeVdHt-aYE9wt5k';

// const publicId = 'ofer-test-flag';
// const heavyImagePublicId = '10-mb-image';

// const waterMarkedPublicId = 'nutritt_logo_1';

// const width = 100;
// const height = 150;

// uploadAnImage(HeavyImageUrl, heavyImagePublicId).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// uploadImageWithWatermark(imageUrl, waterMarkId).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// obtainImage(publicId, 600, 900, 'fit').then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// cloudinary.image('ofer-test-flag', {
//   transformation: [
//     { overlay: 'cloudinary_icon_white' },
//     { flags: ['layer_apply', 'tiled'] },
//   ],
// });

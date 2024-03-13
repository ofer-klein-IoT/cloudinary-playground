const { cloudinary } = require('./config');

cloudinary.image('ofer-test-flag', {
  transformation: [
    { overlay: 'cloudinary_icon_white' },
    { flags: ['layer_apply', 'tiled'] },
  ],
});

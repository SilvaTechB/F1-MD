
const fs = require('fs');
const { Sticker, StickerTypes } = require('wa-sticker-formatter');

async function writeExifImg(buffer, options) {
  const sticker = new Sticker(buffer, {
    pack: options.packname,
    author: options.author,
    type: StickerTypes.FULL,
    quality: 70
  });
  return await sticker.toBuffer();
}

module.exports = { writeExifImg };

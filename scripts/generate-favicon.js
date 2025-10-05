const sharp = require('sharp');
const path = require('path');

sharp(path.join(__dirname, '../public/images/logo.jpeg'))
  .resize(24, 24) // Make the logo slightly smaller
  .extend({
    top: 4,
    bottom: 4,
    left: 6,
    right: 4,
    background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent padding
  })
  .toFile(path.join(__dirname, '../public/favicon.ico'))
  .then(info => { console.log('Favicon generated successfully:', info); })
  .catch(err => { console.error('Error generating favicon:', err); });
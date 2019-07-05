const path = require('path');
const fs = require('fs');

module.exports = function write (pages, outputDir, keys = Object.keys(pages), accumulator = {}) {
  let key = keys.shift();
  let value = pages[key];

  if (accumulator[key] != value) {
    let dest = path.join(outputDir, key);
    let dir = path.dirname(dest);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
  
    fs.writeFile(dest, value, err => {
      if (err) {
        console.log(err)
      }
    });
  }

  return keys.length ? write(pages, outputDir, keys) : 'success';
}
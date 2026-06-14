const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\SMRUTI\\.gemini\\antigravity\\brain\\70070518-85b0-4db4-8c94-ad4ecfd977a4';
const destDir = path.join(__dirname, 'public', 'assets', 'img');

const files = [
  { src: 'center_farm_bg_1781355755191.png', dest: 'center_farm.png' }
];

files.forEach(f => {
  const srcPath = path.join(srcDir, f.src);
  const destPath = path.join(destDir, f.dest);
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${f.src} to ${f.dest}`);
    } else {
      console.log(`Source file does not exist: ${srcPath}`);
    }
  } catch (err) {
    console.error(`Error copying ${f.src}:`, err);
  }
});

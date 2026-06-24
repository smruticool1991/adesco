const fs = require('fs')
const path = require('path')

const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif', '.bmp']
const galleryDir = path.join(__dirname, '..', 'public', 'assets', 'img', 'gallery')
const outputFile = path.join(__dirname, '..', 'public', 'gallery-manifest.json')

function prettify(filename) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

const files = fs.readdirSync(galleryDir).filter(f =>
  IMAGE_EXTS.some(ext => f.toLowerCase().endsWith(ext))
)

const images = files.map(f => ({
  src: `/assets/img/gallery/${f}`,
  title: prettify(f),
}))

fs.writeFileSync(outputFile, JSON.stringify({ images }, null, 2))
console.log(`Gallery manifest: ${images.length} image(s) written to public/gallery-manifest.json`)

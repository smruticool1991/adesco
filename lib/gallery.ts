import { readdirSync, writeFileSync } from 'fs'
import { join } from 'path'

const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif', '.bmp']

function prettify(filename: string) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

export function listGalleryFiles(): string[] {
  const dir = join(process.cwd(), 'public', 'assets', 'img', 'gallery')
  return readdirSync(dir).filter(f =>
    IMAGE_EXTS.some(ext => f.toLowerCase().endsWith(ext))
  )
}

export function regenerateManifest() {
  const dir = join(process.cwd(), 'public', 'assets', 'img', 'gallery')
  const out = join(process.cwd(), 'public', 'gallery-manifest.json')
  const files = listGalleryFiles()
  const images = files.map(f => ({ src: `/assets/img/gallery/${f}`, title: prettify(f) }))
  writeFileSync(out, JSON.stringify({ images }, null, 2))
  return images
}

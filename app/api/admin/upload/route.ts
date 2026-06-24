import { writeFile } from 'fs/promises'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'
import { regenerateManifest } from '@/lib/gallery'

const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif', 'image/bmp']

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const files = formData.getAll('files') as File[]

  if (!files.length) {
    return NextResponse.json({ error: 'No files provided' }, { status: 400 })
  }

  const galleryDir = join(process.cwd(), 'public', 'assets', 'img', 'gallery')
  const uploaded: string[] = []

  for (const file of files) {
    if (!ALLOWED.includes(file.type)) continue
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').toLowerCase()
    await writeFile(join(galleryDir, safeName), Buffer.from(await file.arrayBuffer()))
    uploaded.push(safeName)
  }

  regenerateManifest()
  return NextResponse.json({ uploaded })
}

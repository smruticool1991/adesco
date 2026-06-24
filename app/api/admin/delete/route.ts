import { unlink } from 'fs/promises'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'
import { regenerateManifest } from '@/lib/gallery'

export async function POST(req: NextRequest) {
  const { filename } = await req.json()
  if (!filename || filename.includes('/') || filename.includes('..')) {
    return NextResponse.json({ error: 'Invalid filename' }, { status: 400 })
  }
  await unlink(join(process.cwd(), 'public', 'assets', 'img', 'gallery', filename))
  regenerateManifest()
  return NextResponse.json({ ok: true })
}

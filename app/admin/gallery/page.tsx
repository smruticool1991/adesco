'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const UPLOAD_SECRET = 'adesco-ranch-upload-2024'
const IS_DEV = process.env.NODE_ENV === 'development'
const UPLOAD_URL = IS_DEV ? '/api/admin/upload' : '/admin-upload.php'
const DELETE_URL = IS_DEV ? '/api/admin/delete' : '/admin-delete.php'

interface GalleryImage { src: string; title: string }

export default function AdminGallery() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [images, setImages] = useState<GalleryImage[]>([])
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)

  const notify = (msg: string, ok = true) => {
    setToast({ msg, ok })
    setTimeout(() => setToast(null), 3500)
  }

  const loadImages = useCallback(() => {
    fetch('/gallery-manifest.json?t=' + Date.now())
      .then(r => r.json())
      .then(d => setImages(d.images ?? []))
      .catch(() => setImages([]))
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('adesco_admin') !== '1') {
      window.location.href = '/admin'
      return
    }
    loadImages()
  }, [loadImages])

  async function uploadFiles(fileList: FileList | File[]) {
    const files = Array.from(fileList).filter(f => f.type.startsWith('image/'))
    if (!files.length) { notify('Only image files are allowed.', false); return }

    setUploading(true)
    const fd = new FormData()
    files.forEach(f => fd.append('files', f))
    if (!IS_DEV) fd.append('secret', UPLOAD_SECRET)

    try {
      const res = await fetch(UPLOAD_URL, { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Upload failed')
      notify(`${data.uploaded.length} image(s) uploaded!`)
      loadImages()
    } catch (err: unknown) {
      notify(err instanceof Error ? err.message : 'Upload failed', false)
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  async function deleteImage(filename: string) {
    setDeleting(filename)
    try {
      const res = await fetch(DELETE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, secret: UPLOAD_SECRET }),
      })
      if (!res.ok) throw new Error('Delete failed')
      notify('Image deleted.')
      loadImages()
    } catch {
      notify('Failed to delete image.', false)
    } finally {
      setDeleting(null)
      setConfirmDelete(null)
    }
  }

  function logout() {
    sessionStorage.removeItem('adesco_admin')
    window.location.href = '/admin'
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f0', fontFamily: "'Poppins', sans-serif" }}>

      {/* Top bar */}
      <div style={{
        background: '#1a3a22', color: '#fff', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px', boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <img src="/assets/img/logo-light2.png" alt="Adesco" style={{ height: '34px', objectFit: 'contain' }}
            onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
          <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px' }}>/ Gallery Management</span>
        </div>
        <button onClick={logout} style={{
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff', padding: '8px 18px', borderRadius: '6px',
          fontSize: '13px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '7px',
        }}>
          <i className="fas fa-sign-out-alt" /> Logout
        </button>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px' }}>

        {/* Upload zone */}
        <div style={{ background: '#fff', borderRadius: '14px', padding: '32px', marginBottom: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
          <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#1a3a22', margin: '0 0 22px' }}>
            <i className="fas fa-cloud-upload-alt" style={{ marginRight: '9px', color: '#347604' }} />
            Upload Images
          </h2>

          <div
            onDragOver={e => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={e => { e.preventDefault(); setDragOver(false); uploadFiles(e.dataTransfer.files) }}
            onClick={() => !uploading && fileInputRef.current?.click()}
            style={{
              border: `2px dashed ${dragOver ? '#347604' : '#c8dcc0'}`,
              borderRadius: '12px', padding: '48px 24px', textAlign: 'center',
              cursor: uploading ? 'default' : 'pointer',
              background: dragOver ? '#f0f7eb' : '#fafcf8',
              transition: 'all 0.2s',
            }}
          >
            {uploading ? (
              <>
                <span style={{
                  width: '40px', height: '40px', margin: '0 auto 16px',
                  border: '3px solid #c8dcc0', borderTopColor: '#347604',
                  borderRadius: '50%', animation: 'spin 0.7s linear infinite', display: 'block',
                }} />
                <p style={{ color: '#347604', fontWeight: 600, fontSize: '15px', margin: 0 }}>Uploading…</p>
              </>
            ) : (
              <>
                <i className="fas fa-images" style={{ fontSize: '44px', color: dragOver ? '#347604' : '#b0ccb0', display: 'block', marginBottom: '14px' }} />
                <p style={{ fontSize: '15px', fontWeight: 600, color: '#555', margin: '0 0 6px' }}>Drag & drop images here</p>
                <p style={{ fontSize: '13px', color: '#aaa', margin: '0 0 20px' }}>JPG, PNG, WEBP, GIF, AVIF supported</p>
                <span style={{
                  display: 'inline-block', background: '#347604', color: '#fff',
                  padding: '10px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 600,
                }}>Browse Files</span>
              </>
            )}
          </div>

          <input
            ref={fileInputRef} type="file" multiple accept="image/*"
            style={{ display: 'none' }}
            onChange={e => e.target.files && uploadFiles(e.target.files)}
          />
        </div>

        {/* Gallery grid */}
        <div style={{ background: '#fff', borderRadius: '14px', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
          <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#1a3a22', margin: '0 0 22px' }}>
            <i className="fas fa-th" style={{ marginRight: '9px', color: '#347604' }} />
            Gallery Images
            <span style={{
              marginLeft: '10px', background: '#eaf4e0', color: '#347604',
              fontSize: '12px', fontWeight: 700, padding: '2px 10px', borderRadius: '20px',
            }}>{images.length}</span>
          </h2>

          {images.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '56px 0', color: '#bbb' }}>
              <i className="fas fa-images" style={{ fontSize: '36px', display: 'block', marginBottom: '10px' }} />
              <p style={{ margin: 0, fontSize: '14px' }}>No images yet. Upload some above.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '14px' }}>
              {images.map(img => {
                const filename = img.src.split('/').pop()!
                const isDeleting = deleting === filename
                return (
                  <div key={img.src} style={{ borderRadius: '10px', overflow: 'hidden', background: '#f5f5f5', boxShadow: '0 2px 8px rgba(0,0,0,0.09)' }}>
                    <img src={img.src} alt={img.title} style={{ width: '100%', height: '150px', objectFit: 'cover', display: 'block' }} />
                    <div style={{ padding: '10px 10px 12px' }}>
                      <p style={{ fontSize: '12px', fontWeight: 600, color: '#333', margin: '0 0 4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {img.title}
                      </p>
                      <p style={{ fontSize: '10px', color: '#bbb', margin: '0 0 10px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {filename}
                      </p>
                      <button
                        onClick={() => setConfirmDelete(filename)}
                        disabled={isDeleting}
                        style={{
                          width: '100%', padding: '7px',
                          background: '#fff5f5', border: '1px solid #fcc',
                          borderRadius: '6px', color: '#c0392b',
                          fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                        }}
                      >
                        {isDeleting
                          ? <span style={{ width: '12px', height: '12px', border: '2px solid #fcc', borderTopColor: '#c0392b', borderRadius: '50%', animation: 'spin 0.7s linear infinite', display: 'inline-block' }} />
                          : <i className="fas fa-trash-alt" />}
                        Delete
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Confirm delete modal */}
      {confirmDelete && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: '20px',
        }}>
          <div style={{
            background: '#fff', borderRadius: '14px', padding: '36px',
            maxWidth: '360px', width: '100%', textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
          }}>
            <i className="fas fa-trash-alt" style={{ fontSize: '32px', color: '#e74c3c', marginBottom: '14px', display: 'block' }} />
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 8px' }}>Delete Image?</h3>
            <p style={{ fontSize: '13px', color: '#888', margin: '0 0 26px' }}>
              <strong style={{ color: '#444' }}>{confirmDelete}</strong> will be permanently removed.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => setConfirmDelete(null)} style={{
                flex: 1, padding: '11px', background: '#f5f5f5', border: '1px solid #ddd',
                borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', color: '#555',
              }}>Cancel</button>
              <button onClick={() => deleteImage(confirmDelete)} style={{
                flex: 1, padding: '11px', background: '#e74c3c', border: 'none',
                borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', color: '#fff',
              }}>Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: '28px', right: '28px', zIndex: 99999,
          background: toast.ok ? '#1a3a22' : '#c0392b',
          color: '#fff', padding: '13px 20px', borderRadius: '10px',
          fontSize: '14px', fontWeight: 600,
          boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
          display: 'flex', alignItems: 'center', gap: '9px',
          animation: 'fadeUp 0.3s ease',
        }}>
          <i className={`fas fa-${toast.ok ? 'check-circle' : 'exclamation-circle'}`} />
          {toast.msg}
        </div>
      )}

      <style>{`
        @keyframes spin   { to { transform: rotate(360deg); } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  )
}

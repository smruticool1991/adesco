"use client"

import React, { useState, useEffect } from 'react'

interface GalleryImage {
  src: string
  title: string
}

const stats = [
  { val: "6",    label: "Years Documented" },
  { val: "5",    label: "Program Areas" },
  { val: "150+", label: "Community Members Featured" },
]

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    fetch('/gallery-manifest.json')
      .then(r => r.json())
      .then(data => setImages(data.images ?? []))
      .catch(() => setImages([]))
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape')     setLightboxIndex(null)
      if (e.key === 'ArrowLeft')  setLightboxIndex(i => i !== null ? (i - 1 + images.length) % images.length : null)
      if (e.key === 'ArrowRight') setLightboxIndex(i => i !== null ? (i + 1) % images.length : null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [images.length, lightboxIndex])

  return (
    <div>
      {/* ── Breadcrumb ── */}
      <div
        className="breadcrumb-area text-center shadow dark bg-fixed text-light"
        style={{ backgroundImage: 'url(/assets/img/banner/banner14.webp)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>Gallery</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li><a href="/"><i className="fas fa-home"></i> Home</a></li>
                  <li className="active">Gallery</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* ── Intro ── */}
      <div className="default-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="site-heading">
                <h5 className="sub-title">Our Visual Story</h5>
                <h2 className="title">Life at Adesco Western Ranch</h2>
                <div className="devider"></div>
                <p>
                  From free-range flocks and regenerative fields to community workshops and harvest
                  celebrations — these images document six years of building a sustainable,
                  equitable agricultural future in Tomahawk, Alberta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div style={{ background: '#1a3a22', padding: '50px 0' }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6">
              <div style={{ padding: '16px 0' }}>
                <div style={{ color: '#82c45a', fontSize: '44px', fontWeight: 800, lineHeight: 1.1 }}>
                  {images.length || '—'}
                </div>
                <span style={{ color: 'rgba(255,255,255,0.70)', fontSize: '14px', display: 'block', marginTop: '6px' }}>
                  Photos in Collection
                </span>
              </div>
            </div>
            {stats.map(s => (
              <div className="col-lg-3 col-md-6" key={s.label}>
                <div style={{ padding: '16px 0' }}>
                  <div style={{ color: '#82c45a', fontSize: '44px', fontWeight: 800, lineHeight: 1.1 }}>{s.val}</div>
                  <span style={{ color: 'rgba(255,255,255,0.70)', fontSize: '14px', display: 'block', marginTop: '6px' }}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <div style={{ background: '#f4f7f4', padding: '56px 0 72px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
          {images.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#888' }}>
              <i className="fas fa-images" style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }}></i>
              <p>No photos yet. Upload images to <code>public/assets/img/gallery/</code> and they will appear here automatically.</p>
            </div>
          ) : (
            <div style={{ columns: '4 260px', columnGap: '14px' }}>
              {images.map((item, index) => (
                <div
                  key={item.src}
                  onClick={() => setLightboxIndex(index)}
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    marginBottom: '14px',
                    breakInside: 'avoid',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.12)',
                    display: 'block',
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{ width: '100%', display: 'block', transition: 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                  />
                  <div className="gallery-overlay" style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(15,40,15,0.88) 0%, rgba(15,40,15,0.18) 55%, transparent 100%)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                    padding: '18px 20px', opacity: 0, transition: 'opacity 0.3s',
                  }}>
                    <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 700, margin: 0 }}>{item.title}</h4>
                  </div>
                  <div className="gallery-expand" style={{
                    position: 'absolute', top: '12px', right: '12px',
                    width: '34px', height: '34px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.90)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    opacity: 0, transition: 'opacity 0.3s, transform 0.3s', transform: 'scale(0.7)',
                  }}>
                    <i className="fas fa-expand-alt" style={{ color: '#1a3a22', fontSize: '13px' }}></i>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Hover CSS ── */}
      <style>{`
        div:has(> .gallery-overlay):hover .gallery-overlay { opacity: 1 !important; }
        div:has(> .gallery-overlay):hover img { transform: scale(1.07); }
        div:has(> .gallery-expand):hover .gallery-expand { opacity: 1 !important; transform: scale(1) !important; }
      `}</style>

      {/* ── Lightbox CSS ── */}
      <style>{`
        @keyframes lbFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lbImgIn  { from { opacity: 0; transform: scale(0.93) } to { opacity: 1; transform: scale(1) } }
        .lb-img { animation: lbImgIn 0.3s ease; }
        .lb-backdrop {
          position: fixed; inset: 0; z-index: 99999;
          background: rgba(0,0,0,0.94);
          display: flex; align-items: center; justify-content: center;
          animation: lbFadeIn 0.22s ease;
        }
        .lb-nav-btn {
          position: fixed; top: 50%; transform: translateY(-50%);
          background: rgba(255,255,255,0.10); border: 2px solid rgba(255,255,255,0.22);
          border-radius: 50%; width: 52px; height: 52px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s, transform 0.2s;
          color: #fff; font-size: 28px; line-height: 1; z-index: 100000;
        }
        .lb-nav-btn:hover { background: rgba(74,124,89,0.70); transform: translateY(-50%) scale(1.1); }
        .lb-close-btn {
          position: fixed; top: 20px; right: 24px;
          background: rgba(255,255,255,0.10); border: 2px solid rgba(255,255,255,0.22);
          border-radius: 50%; width: 48px; height: 48px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #fff; font-size: 20px;
          transition: background 0.2s; z-index: 100000;
        }
        .lb-close-btn:hover { background: rgba(220,50,50,0.70); }
        .lb-counter {
          position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
          color: rgba(255,255,255,0.70); font-size: 13px; font-weight: 600; letter-spacing: 2px;
          background: rgba(0,0,0,0.40); padding: 5px 16px; border-radius: 20px;
          z-index: 100000; white-space: nowrap;
        }
        .lb-caption {
          position: fixed; bottom: 60px; left: 50%; transform: translateX(-50%);
          text-align: center; z-index: 100000; white-space: nowrap; max-width: 90vw;
        }
        .lb-caption h4 { color: #fff; font-size: 18px; font-weight: 700; margin: 0; }
      `}</style>

      {/* ── Lightbox ── */}
      {mounted && lightboxIndex !== null && (
        <div className="lb-backdrop" onClick={() => setLightboxIndex(null)}>
          <button className="lb-close-btn" onClick={e => { e.stopPropagation(); setLightboxIndex(null) }} aria-label="Close">✕</button>

          <button className="lb-nav-btn" style={{ left: '20px' }}
            onClick={e => { e.stopPropagation(); setLightboxIndex(i => i !== null ? (i - 1 + images.length) % images.length : null) }}
            aria-label="Previous">‹</button>

          <img
            key={lightboxIndex}
            className="lb-img"
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].title}
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', borderRadius: '10px', boxShadow: '0 20px 80px rgba(0,0,0,0.6)' }}
          />

          <button className="lb-nav-btn" style={{ right: '20px' }}
            onClick={e => { e.stopPropagation(); setLightboxIndex(i => i !== null ? (i + 1) % images.length : null) }}
            aria-label="Next">›</button>

          <div className="lb-caption" onClick={e => e.stopPropagation()}>
            <h4>{images[lightboxIndex].title}</h4>
          </div>

          <div className="lb-counter">{lightboxIndex + 1} / {images.length}</div>
        </div>
      )}
    </div>
  )
}

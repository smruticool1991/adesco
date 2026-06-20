"use client"

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const categories = ["All", "Livestock", "Agriculture", "Community", "Harvest", "Training"] as const
type Category = typeof categories[number]

interface GalleryItem {
  src: string
  thumb: string
  title: string
  category: Category
  desc: string
}

const items: GalleryItem[] = [
  // Livestock
  { src: "/assets/img/product/product1.webp",      thumb: "/assets/img/product/product1.webp",      title: "Free-Range Chickens",       category: "Livestock",    desc: "Our antibiotic-free chicken flock raised on open pasture at Adesco Western Ranch." },
  { src: "/assets/img/product/product2.webp",      thumb: "/assets/img/product/product2.webp",      title: "Jersey Cow Herd",           category: "Livestock",    desc: "Grass-fed dairy cattle from the Adesco Cattle Banking program." },
  { src: "/assets/img/gallery/farm.webp",          thumb: "/assets/img/gallery/farm.webp",          title: "Farm Life",                 category: "Livestock",    desc: "A glimpse into daily life at Adesco Western Ranch in Tomahawk, Alberta." },
  // Agriculture
  { src: "/assets/img/product/product3.webp",      thumb: "/assets/img/product/product3.webp",      title: "Field Cultivation",         category: "Agriculture",  desc: "Regenerative field cultivation using cover cropping and minimal tillage practices." },
  { src: "/assets/img/gallery/regenerative.webp",  thumb: "/assets/img/gallery/regenerative.webp",  title: "Regenerative Land",         category: "Agriculture",  desc: "Adesco's regenerative land stewardship restoring soil biodiversity across Alberta." },
  { src: "/assets/img/gallery/crops.webp",         thumb: "/assets/img/gallery/crops.webp",         title: "Seasonal Crops",            category: "Agriculture",  desc: "Seasonal vegetable crops harvested at peak ripeness from our pesticide-free fields." },
  { src: "/assets/img/about2.webp",                thumb: "/assets/img/about2.webp",                title: "Ranch Overview",            category: "Agriculture",  desc: "An overview of the Adesco Western Ranch property in Tomahawk, Parkland County." },
  // Community
  { src: "/assets/img/testimonial/1.jpeg",         thumb: "/assets/img/testimonial/1.jpeg",         title: "Community Gathering",       category: "Community",    desc: "Community members gathering at Adesco for a workshop and farm tour." },
  { src: "/assets/img/about.webp",                 thumb: "/assets/img/about.webp",                 title: "Our Story",                 category: "Community",    desc: "Established in 2018, Adesco Western Ranch was founded by a young African Canadian farmer." },
  { src: "/assets/img/journey.webp",               thumb: "/assets/img/journey.webp",               title: "Our Journey",               category: "Community",    desc: "Six years of building sustainable futures and challenging barriers in Canadian agriculture." },
  { src: "/assets/img/blog/blog01.webp",           thumb: "/assets/img/blog/blog01.webp",           title: "Community Outreach",        category: "Community",    desc: "Adesco's community engagement programs building stronger food networks across Alberta." },
  // Harvest
  { src: "/assets/img/product/product4.webp",      thumb: "/assets/img/product/product4.webp",      title: "Fresh Produce",             category: "Harvest",      desc: "Freshly harvested produce packed and ready for community distribution." },
  { src: "/assets/img/blog/blog02.webp",           thumb: "/assets/img/blog/blog02.webp",           title: "Harvest Season",            category: "Harvest",      desc: "The abundance of fall harvest at Adesco Western Ranch — root vegetables and squash." },
  { src: "/assets/img/blog/blog03.webp",           thumb: "/assets/img/blog/blog03.webp",           title: "Market Preparation",        category: "Harvest",      desc: "Produce sorted, graded, and prepared for weekly veggie box subscriptions and markets." },
  // Training
  { src: "/assets/img/gallery/youth.webp",         thumb: "/assets/img/gallery/youth.webp",         title: "Youth Farm Programs",       category: "Training",     desc: "Young participants in Adesco's hands-on agricultural training and leadership programs." },
  { src: "/assets/img/farmer.webp",                thumb: "/assets/img/farmer.webp",                title: "Farmer in the Field",       category: "Training",     desc: "Participants gain practical livestock and crop management skills through Adesco programs." },
]

const stats = [
  { val: "100+", label: "Photos in Collection" },
  { val: "6",    label: "Years Documented" },
  { val: "5",    label: "Program Areas" },
  { val: "150+", label: "Community Members Featured" },
]

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "Escape")     closeLightbox()
      if (e.key === "ArrowLeft")  prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  })

  const filtered = active === "All" ? items : items.filter(i => i.category === active)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null)
  const next = () => setLightboxIndex(i => i !== null ? (i + 1) % filtered.length : null)

  const categoryColors: Record<Category, { bg: string; text: string }> = {
    All:         { bg: "#1a3a22", text: "#fff" },
    Livestock:   { bg: "#1b5e20", text: "#fff" },
    Agriculture: { bg: "#e65100", text: "#fff" },
    Community:   { bg: "#1565c0", text: "#fff" },
    Harvest:     { bg: "#c62828", text: "#fff" },
    Training:    { bg: "#6a1b9a", text: "#fff" },
  }

  return (
    <div>
      {/* ── Breadcrumb ── */}
      <div
        className="breadcrumb-area text-center shadow dark bg-fixed text-light"
        style={{ backgroundImage: "url(/assets/img/banner/banner1.webp)" }}
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
      <div style={{ background: "#1a3a22", padding: "50px 0" }}>
        <div className="container">
          <div className="row text-center">
            {stats.map((s) => (
              <div className="col-lg-3 col-md-6" key={s.label}>
                <div style={{ padding: "16px 0" }}>
                  <div style={{ color: "#82c45a", fontSize: "44px", fontWeight: 800, lineHeight: 1.1 }}>
                    {s.val}
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.70)", fontSize: "14px", display: "block", marginTop: "6px" }}>
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Filter Tabs ── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #eee", padding: "24px 0", position: "sticky", top: 0, zIndex: 50 }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {categories.map((cat) => {
              const isActive = active === cat
              const col = categoryColors[cat]
              return (
                <button
                  key={cat}
                  onClick={() => { setActive(cat); setLightboxIndex(null) }}
                  style={{
                    padding: "9px 22px",
                    borderRadius: "30px",
                    border: `2px solid ${col.bg}`,
                    background: isActive ? col.bg : "transparent",
                    color: isActive ? col.text : col.bg,
                    fontWeight: 700,
                    fontSize: "13px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    letterSpacing: "0.3px",
                  }}
                >
                  {cat}
                  <span
                    style={{
                      marginLeft: "7px",
                      background: isActive ? "rgba(255,255,255,0.25)" : col.bg,
                      color: isActive ? "#fff" : "#fff",
                      fontSize: "11px",
                      fontWeight: 800,
                      padding: "1px 7px",
                      borderRadius: "10px",
                    }}
                  >
                    {cat === "All" ? items.length : items.filter(i => i.category === cat).length}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <div style={{ background: "#f4f7f4", padding: "56px 0 72px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#888" }}>
              <i className="fas fa-images" style={{ fontSize: "48px", marginBottom: "16px", display: "block" }}></i>
              <p>No photos in this category yet.</p>
            </div>
          ) : (
            <div
              style={{
                columns: "4 280px",
                columnGap: "14px",
              }}
            >
              {filtered.map((item, index) => (
                <div
                  key={`${item.src}-${index}`}
                  onClick={() => openLightbox(index)}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "12px",
                    cursor: "pointer",
                    marginBottom: "14px",
                    breakInside: "avoid",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
                    display: "block",
                  }}
                >
                  <img
                    src={item.thumb}
                    alt={item.title}
                    style={{
                      width: "100%",
                      display: "block",
                      transition: "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)",
                    }}
                  />
                  {/* Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(15,40,15,0.88) 0%, rgba(15,40,15,0.18) 55%, transparent 100%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "18px 20px",
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                    className="gallery-overlay"
                  >
                    <span
                      style={{
                        display: "inline-block",
                        background: categoryColors[item.category].bg,
                        color: "#fff",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        padding: "3px 10px",
                        borderRadius: "20px",
                        marginBottom: "7px",
                        width: "fit-content",
                      }}
                    >
                      {item.category}
                    </span>
                    <h4 style={{ color: "#fff", fontSize: "15px", fontWeight: 700, margin: 0 }}>{item.title}</h4>
                  </div>
                  {/* Expand icon */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.90)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s, transform 0.3s",
                      transform: "scale(0.7)",
                    }}
                    className="gallery-expand"
                  >
                    <i className="fas fa-expand-alt" style={{ color: "#1a3a22", fontSize: "13px" }}></i>
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
        .lb-caption .lb-cat {
          display: inline-block; color: #fff; font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 3px 12px; border-radius: 20px; margin-bottom: 5px;
        }
        .lb-caption h4 { color: #fff; font-size: 18px; font-weight: 700; margin: 0 0 4px; }
        .lb-caption p  { color: rgba(255,255,255,0.65); font-size: 13px; margin: 0; }
      `}</style>

      {/* ── Lightbox Portal ── */}
      {mounted && lightboxIndex !== null && ReactDOM.createPortal(
        <div className="lb-backdrop" onClick={closeLightbox}>
          <button className="lb-close-btn" onClick={e => { e.stopPropagation(); closeLightbox() }} aria-label="Close">✕</button>

          <button className="lb-nav-btn" style={{ left: "20px" }} onClick={e => { e.stopPropagation(); prev() }} aria-label="Previous">‹</button>

          <img
            key={lightboxIndex}
            className="lb-img"
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].title}
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: "90vw", maxHeight: "80vh",
              objectFit: "contain", borderRadius: "10px",
              boxShadow: "0 20px 80px rgba(0,0,0,0.6)",
            }}
          />

          <button className="lb-nav-btn" style={{ right: "20px" }} onClick={e => { e.stopPropagation(); next() }} aria-label="Next">›</button>

          <div className="lb-caption" onClick={e => e.stopPropagation()}>
            <div className="lb-cat" style={{ background: categoryColors[filtered[lightboxIndex].category].bg }}>
              {filtered[lightboxIndex].category}
            </div>
            <h4>{filtered[lightboxIndex].title}</h4>
            <p>{filtered[lightboxIndex].desc}</p>
          </div>

          <div className="lb-counter">{lightboxIndex + 1} / {filtered.length}</div>
        </div>,
        document.body
      )}
    </div>
  )
}

import React from 'react'

const brands = [
  {
    slug: "dairy",
    name: "Adesco Dairy",
    tag: "Cattle",
    tagline: "Farm-Fresh Milk & Dairy Products",
    description:
      "Raised with care on open pastures, our cattle produce rich, nutritious milk used for a range of wholesome dairy products. Every bottle reflects our commitment to humane animal husbandry and sustainable land management.",
    icon: "/assets/img/healthy/cow.png",
    href: "/cattle-banking",
    color: "#e8f5e9",
    accent: "#2e7d32",
    features: ["Grass-fed cattle", "Hormone-free milk", "Ethical husbandry"],
  },
  {
    slug: "poultry",
    name: "Adesco Poultry",
    tag: "Chicken",
    tagline: "Free-Range Chicken & Eggs",
    description:
      "Our free-range chickens roam open fields and are raised without antibiotics. From heritage breeds to fresh eggs, Adesco Poultry brings clean, traceable protein to your table straight from the ranch.",
    icon: "/assets/img/healthy/hen.png",
    href: "/chicken-banking",
    color: "#fff8e1",
    accent: "#f9a825",
    features: ["Antibiotic-free", "Free-range raised", "Heritage breeds"],
  },
  {
    slug: "livestock",
    name: "Adesco Livestock",
    tag: "Goats",
    tagline: "Quality Goat Farming & Products",
    description:
      "Part of our Goat Banking initiative, our goat herd supports community members through shared livestock ownership. Adesco Livestock produces high-quality goat meat and milk while empowering local families.",
    icon: "/assets/img/healthy/goat.png",
    href: "/goat-banking",
    color: "#fce4ec",
    accent: "#c62828",
    features: ["Community-owned model", "Pasture-raised goats", "Goat milk & meat"],
  },
  {
    slug: "seeds",
    name: "Adesco Cultural Seeds",
    tag: "Seeds",
    tagline: "Preserving Heritage Seed Varieties",
    description:
      "Our Cultural Seeds program safeguards African and Black diaspora heirloom seed varieties — ingredients that carry history, identity, and nutrition. We grow, save, and share these seeds to support food sovereignty.",
    icon: "/assets/img/healthy/veg1.png",
    href: "/cultural-seeds",
    color: "#e8f5e9",
    accent: "#388e3c",
    features: ["Heirloom varieties", "Seed-saving program", "Cultural heritage"],
  },
  {
    slug: "vegetables",
    name: "Adesco Greens",
    tag: "Vegetables",
    tagline: "Seasonal Organic Vegetables",
    description:
      "Grown using regenerative methods on our Alberta land, our seasonal vegetables are picked at peak ripeness. From root vegetables to leafy greens, Adesco Greens delivers freshness with a smaller environmental footprint.",
    icon: "/assets/img/focus/potato.png",
    href: "/seasonal-vegetables",
    color: "#f3e5f5",
    accent: "#6a1b9a",
    features: ["Pesticide-free", "Seasonal harvests", "Regenerative farming"],
  },
  {
    slug: "rice",
    name: "Adesco Grains",
    tag: "Grains",
    tagline: "Wholesome Grains & Staple Crops",
    description:
      "Adesco Grains focuses on staple crops that form the backbone of community nutrition. Grown with minimal inputs and harvested with care, our grain products connect communities to the land and its abundance.",
    icon: "/assets/img/focus/rice.png",
    href: "#",
    color: "#fff3e0",
    accent: "#e65100",
    features: ["Minimally processed", "Locally grown", "Community staples"],
  },
]

export default function BrandsPage() {
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
              <h1>Brands &amp; Products</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li><a href="/"><i className="fas fa-home"></i> Home</a></li>
                  <li className="active">Brands &amp; Products</li>
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
                <h5 className="sub-title">Our Offerings</h5>
                <h2 className="title">Products Rooted in Purpose</h2>
                <div className="devider"></div>
                <p>
                  Every brand under the Adesco Western Ranch umbrella reflects our core values —
                  equity, sustainability, and community resilience. From free-range poultry to
                  heirloom seeds, our products are grown, raised, and harvested with respect for the
                  land and the people it feeds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Brand Cards ── */}
      <div className="default-padding">
        <div className="container">
          <div className="row">
            {brands.map((brand) => (
              <div className="col-lg-4 col-md-6 mb-30" key={brand.slug}>
                <div
                  className="brand-card"
                  style={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.09)",
                    background: "#fff",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                >
                  {/* Card header */}
                  <div
                    style={{
                      background: brand.color,
                      padding: "36px 32px 24px",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "12px",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={brand.icon}
                        alt={brand.name}
                        style={{ width: "48px", height: "48px", objectFit: "contain" }}
                      />
                    </div>
                    <div>
                      <span
                        style={{
                          display: "inline-block",
                          background: brand.accent,
                          color: "#fff",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          padding: "3px 10px",
                          borderRadius: "20px",
                          marginBottom: "6px",
                        }}
                      >
                        {brand.tag}
                      </span>
                      <h4 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#1a2e1a" }}>
                        {brand.name}
                      </h4>
                    </div>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: "24px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <p style={{ fontSize: "13px", fontWeight: 700, color: brand.accent, marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      {brand.tagline}
                    </p>
                    <p style={{ color: "#555", lineHeight: 1.75, marginBottom: "20px", flex: 1 }}>
                      {brand.description}
                    </p>

                    {/* Feature tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                      {brand.features.map((f) => (
                        <span
                          key={f}
                          style={{
                            background: brand.color,
                            color: brand.accent,
                            fontSize: "12px",
                            fontWeight: 600,
                            padding: "4px 12px",
                            borderRadius: "20px",
                            border: `1px solid ${brand.accent}30`,
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={brand.href}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: brand.accent,
                        color: "#fff",
                        padding: "11px 22px",
                        borderRadius: "6px",
                        fontWeight: 700,
                        fontSize: "14px",
                        textDecoration: "none",
                        alignSelf: "flex-start",
                      }}
                    >
                      Learn More <i className="fas fa-arrow-right" style={{ fontSize: "12px" }}></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why Our Products ── */}
      <div className="default-padding bg-dark text-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h5 className="sub-title">Why Choose Adesco</h5>
              <h2 className="title mb-30">Every Product Tells a Story</h2>
              <p style={{ fontSize: "17px", lineHeight: 1.8, color: "rgba(255,255,255,0.82)", marginBottom: "40px" }}>
                Our brands are more than products — they are acts of resistance, community building,
                and environmental stewardship. When you choose Adesco, you support a Black-led farm
                that challenges systemic barriers and proves that sustainable agriculture can be a
                vehicle for social justice.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                <a className="btn btn-theme secondary btn-md radius animation" href="/about-us">
                  Our Story
                </a>
                <a
                  className="btn btn-md radius"
                  href="/contact-us"
                  style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "12px 30px", borderRadius: "6px", fontWeight: 700 }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Supported By ── */}
      <div className="default-padding bg-gray text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h5 className="sub-title">Supported By</h5>
              <h2 className="title mb-40">Our Funding Partners</h2>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "32px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.canada.ca"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "16px 28px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              }}
            >
              <img
                src="/assets/img/canada-wordmark-white-footer2.png"
                alt="Government of Canada"
                style={{ height: "44px", objectFit: "contain", filter: "invert(1) brightness(0)" }}
              />
            </a>
            <a
              href="https://agriculture.canada.ca"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "16px 28px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              }}
            >
              <img
                src="/assets/img/agrifood-canada-footer.png"
                alt="Agriculture and Agri-Food Canada"
                style={{ height: "44px", objectFit: "contain" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

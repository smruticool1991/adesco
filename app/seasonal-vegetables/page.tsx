import React from 'react'

const seasons = [
  {
    name: "Spring",
    months: "May – June",
    icon: "fas fa-cloud-sun",
    color: "#e8f5e9",
    accent: "#2e7d32",
    crops: ["Spinach", "Kale", "Radishes", "Green Onions", "Peas", "Lettuce Mix"],
  },
  {
    name: "Summer",
    months: "July – August",
    icon: "fas fa-sun",
    color: "#fff8e1",
    accent: "#f57f17",
    crops: ["Tomatoes", "Zucchini", "Cucumbers", "Peppers", "Beans", "Beets"],
  },
  {
    name: "Fall",
    months: "September – October",
    icon: "fas fa-leaf",
    color: "#fce4ec",
    accent: "#c62828",
    crops: ["Squash", "Pumpkins", "Carrots", "Potatoes", "Cabbage", "Turnips"],
  },
  {
    name: "Extended Season",
    months: "Greenhouse Year-Round",
    icon: "fas fa-warehouse",
    color: "#e3f2fd",
    accent: "#1565c0",
    crops: ["Microgreens", "Herbs", "Cherry Tomatoes", "Lettuce", "Chard", "Sprouts"],
  },
]

const vegetables = [
  {
    name: "Heirloom Tomatoes",
    season: "Summer",
    desc: "Vine-ripened heirloom varieties in a spectrum of colours — rich in lycopene, intensely flavourful, and grown without synthetic pesticides on open Alberta fields.",
    icon: "fas fa-apple-alt",
    color: "#fce4ec",
    accent: "#c62828",
    badge: "Best Seller",
  },
  {
    name: "Organic Kale",
    season: "Spring & Fall",
    desc: "Cold-hardy, nutrient-dense kale harvested from frost-kissed fields. Our kale is sweeter after the first frost — a hallmark of naturally grown, unhurried produce.",
    icon: "fas fa-leaf",
    color: "#e8f5e9",
    accent: "#2e7d32",
    badge: "Superfood",
  },
  {
    name: "Root Vegetables",
    season: "Fall",
    desc: "Carrots, beets, turnips, and parsnips grown deep in Alberta's fertile soil. Earthy, sweet, and mineral-rich — ideal for roasting, soups, and winter storage.",
    icon: "fas fa-carrot",
    color: "#fff3e0",
    accent: "#e65100",
    badge: "Fall Harvest",
  },
  {
    name: "Summer Squash",
    season: "Summer",
    desc: "Zucchini, pattypan, and yellow squash from our open-pollinated seed stock. Harvested young and tender for maximum flavour, or allowed to mature for winter storage.",
    icon: "fas fa-seedling",
    color: "#f9fbe7",
    accent: "#558b2f",
    badge: "Prolific Grower",
  },
  {
    name: "Heritage Potatoes",
    season: "Fall",
    desc: "Fingerling, purple, and Yukon Gold heritage potatoes raised without synthetic inputs. Grown from seed potatoes selected for flavour, yield, and soil compatibility.",
    icon: "fas fa-circle",
    color: "#e8eaf6",
    accent: "#283593",
    badge: "Staple Crop",
  },
  {
    name: "Fresh Herbs",
    season: "Year-Round",
    desc: "Basil, cilantro, thyme, rosemary, and African herbs grown in our greenhouse and outdoor beds. Harvested to order and available as cut bunches or live plants.",
    icon: "fas fa-spa",
    color: "#e0f2f1",
    accent: "#00695c",
    badge: "Year-Round",
  },
]

const practices = [
  {
    icon: "fas fa-recycle",
    title: "Composting & Soil Health",
    desc: "All plant waste is composted back into the soil. We regularly test soil health and amend with organic matter to build long-term fertility without synthetic fertilisers.",
  },
  {
    icon: "fas fa-tint",
    title: "Water Conservation",
    desc: "Drip irrigation and rainwater collection reduce water use by up to 60% compared to conventional overhead irrigation, preserving Alberta's freshwater resources.",
  },
  {
    icon: "fas fa-bug",
    title: "Integrated Pest Management",
    desc: "We use companion planting, beneficial insects, and physical barriers to manage pests naturally — no synthetic pesticides, ever.",
  },
  {
    icon: "fas fa-seedling",
    title: "Cover Cropping",
    desc: "Off-season fields are planted with nitrogen-fixing cover crops that prevent erosion, suppress weeds, and feed soil biology through winter and early spring.",
  },
]

const howToOrder = [
  {
    step: "01",
    icon: "fas fa-shopping-basket",
    title: "Choose Your Box",
    desc: "Select a weekly or bi-weekly veggie box — small (2–3 people), medium (4–5 people), or large (6+ people). Seasonal contents vary by harvest.",
  },
  {
    step: "02",
    icon: "fas fa-map-marker-alt",
    title: "Pick Up or Delivery",
    desc: "Collect your box from the farm in Tomahawk, Alberta, or arrange local delivery within our service area. Delivery schedules are confirmed weekly by email.",
  },
  {
    step: "03",
    icon: "fas fa-envelope-open-text",
    title: "Receive Your Weekly Guide",
    desc: "Every box comes with a harvest note listing what's inside, where it was grown, and recipe suggestions — including traditional African preparations where relevant.",
  },
  {
    step: "04",
    icon: "fas fa-heart",
    title: "Enjoy & Give Feedback",
    desc: "Cook, share, and enjoy. Your feedback shapes what we grow next season. Subscribers can also request add-ons like eggs, herbs, or preserved goods.",
  },
]

const stats = [
  { val: "30+",  label: "Vegetable Varieties Grown" },
  { val: "4",    label: "Growing Seasons" },
  { val: "150+", label: "Families Receiving Boxes" },
  { val: "Zero", label: "Synthetic Pesticides Used" },
]

const boxes = [
  { size: "Small Box",  people: "2–3 people",  items: "6–8 items",   freq: "Weekly or bi-weekly", color: "#e8f5e9", accent: "#2e7d32", icon: "fas fa-box-open",  featured: false },
  { size: "Medium Box", people: "4–5 people",  items: "10–12 items", freq: "Weekly",               color: "#fff8e1", accent: "#f57f17", icon: "fas fa-boxes",     featured: true  },
  { size: "Large Box",  people: "6+ people",   items: "14–16 items", freq: "Weekly",               color: "#e3f2fd", accent: "#1565c0", icon: "fas fa-pallet",    featured: false },
]

const relatedInitiatives = [
  { title: "Cultural Seeds",   desc: "Heritage seed preservation program reconnecting diaspora communities with ancestral crops and traditional food wisdom.", href: "/cultural-seeds",  icon: "/assets/img/healthy/veg1.png", color: "#f3e5f5", accent: "#6a1b9a" },
  { title: "Goat Banking",     desc: "Community goat ownership offering fresh milk, meat, and income through a traditional African livestock-sharing model.",  href: "/goat-banking",    icon: "/assets/img/healthy/goat.png", color: "#fce4ec", accent: "#c62828" },
  { title: "Chicken Banking",  desc: "Free-range poultry initiative giving families access to fresh eggs and chicken meat through shared flock ownership.",     href: "/chicken-banking", icon: "/assets/img/healthy/hen.png",  color: "#fff8e1", accent: "#f9a825" },
]

export default function SeasonalVegetablesPage() {
  return (
    <div>
      {/* ── Breadcrumb ── */}
      <div
        className="breadcrumb-area text-center shadow dark bg-fixed text-light"
        style={{ backgroundImage: "url(/assets/img/banner/banner10.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>Seasonal Vegetables</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li><a href="/"><i className="fas fa-home"></i> Home</a></li>
                  <li><a href="/brands">Brands &amp; Products</a></li>
                  <li className="active">Seasonal Vegetables</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero Intro ── */}
      <div className="about-style-one-area default-padding">
        <div className="shape-right-top">
          <img src="/assets/img/shape/leaf.png" alt="Shape" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5 col-lg-6 about-style-one pr-50 pr-md-15 pr-xs-15">
              <div className="thumb">
                <img src="/assets/img/about2.webp" alt="Adesco Seasonal Vegetables" />
                <div className="sub-item">
                  <img src="/assets/img/about.webp" alt="Fresh Harvest" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 about-style-one">
              <div className="row align-center">
                <div className="col-xl-7 col-lg-12">
                  <h5 className="sub-title">Farm Fresh</h5>
                  <h2 className="heading">Seasonal <br /> Vegetables</h2>
                  <p>
                    Adesco Western Ranch grows over 30 vegetable varieties across four growing
                    seasons using regenerative, pesticide-free practices on Alberta's fertile
                    land. Our produce is harvested at peak ripeness, packed the same day, and
                    delivered directly to families — no warehouses, no wax coatings, no compromise.
                  </p>
                  <p>
                    By growing what is in season and what our community actually eats — including
                    culturally significant varieties from African food traditions — we reconnect
                    families with the rhythms of the land and the flavours of their heritage.
                  </p>
                  <ul className="check-solid-list mt-20">
                    <li>Zero synthetic pesticides or herbicides</li>
                    <li>Harvested to order — maximum freshness guaranteed</li>
                    <li>Includes heritage and culturally significant varieties</li>
                  </ul>
                </div>
                <div className="col-xl-5 col-lg-12 pl-50 pl-md-15 pl-xs-15">
                  <div className="top-product-item">
                    <img src="/assets/img/icon/1.svg" alt="Icon" />
                    <h5><a href="#">Weekly Veggie Boxes</a></h5>
                    <p>Curated seasonal boxes delivered to your door or picked up at the farm.</p>
                  </div>
                  <div className="top-product-item">
                    <img src="/assets/img/icon/2.svg" alt="Icon" />
                    <h5><a href="#">Regenerative Growing</a></h5>
                    <p>Every vegetable is grown using practices that build — not deplete — the land.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div style={{ background: "#0d2b0d", padding: "50px 0" }}>
        <div className="container">
          <div className="row text-center">
            {stats.map((s) => (
              <div className="col-lg-3 col-md-6" key={s.label}>
                <div style={{ padding: "20px 0" }}>
                  <div style={{ color: "#a5d6a7", fontSize: "48px", fontWeight: 800, lineHeight: 1.1 }}>
                    {s.val}
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.70)", fontSize: "14px", display: "block", marginTop: "8px" }}>
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Growing Seasons ── */}
      <div className="default-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">What We Grow &amp; When</h5>
                <h2 className="title">Our Growing Seasons</h2>
                <div className="devider"></div>
                <p>Alberta's short but intensely productive growing season — extended by our greenhouse — means fresh Adesco produce is available from May through December and beyond.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {seasons.map((s) => (
              <div className="col-lg-3 col-md-6 mb-30" key={s.name}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "14px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ background: s.color, padding: "28px 24px 20px", display: "flex", alignItems: "center", gap: "14px" }}>
                    <div
                      style={{
                        width: "52px", height: "52px", borderRadius: "50%",
                        background: "#fff", display: "flex", alignItems: "center",
                        justifyContent: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.09)", flexShrink: 0,
                      }}
                    >
                      <i className={s.icon} style={{ color: s.accent, fontSize: "20px" }}></i>
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontWeight: 800, color: "#1a2e1a", fontSize: "17px" }}>{s.name}</h4>
                      <p style={{ margin: 0, fontSize: "12px", color: s.accent, fontWeight: 600 }}>{s.months}</p>
                    </div>
                  </div>
                  <div style={{ padding: "20px 24px 24px" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {s.crops.map((crop) => (
                        <li
                          key={crop}
                          style={{
                            padding: "6px 0", borderBottom: "1px solid #f0f0f0",
                            fontSize: "14px", color: "#555",
                            display: "flex", alignItems: "center", gap: "8px",
                          }}
                        >
                          <i className="fas fa-check-circle" style={{ color: s.accent, fontSize: "12px", flexShrink: 0 }}></i>
                          {crop}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Featured Vegetables ── */}
      <div className="default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">What We Grow</h5>
                <h2 className="title">Featured Produce</h2>
                <div className="devider"></div>
                <p>A selection of the varieties our community loves most — grown from open-pollinated seed, harvested by hand, and packed with flavour.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {vegetables.map((v) => (
              <div className="col-lg-4 col-md-6 mb-30" key={v.name}>
                <div
                  style={{
                    borderRadius: "14px", overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    height: "100%", display: "flex", flexDirection: "column", background: "#fff",
                  }}
                >
                  <div style={{ background: v.color, padding: "28px 28px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
                    <div
                      style={{
                        width: "56px", height: "56px", borderRadius: "50%",
                        background: "#fff", display: "flex", alignItems: "center",
                        justifyContent: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.10)", flexShrink: 0,
                      }}
                    >
                      <i className={v.icon} style={{ color: v.accent, fontSize: "22px" }}></i>
                    </div>
                    <div>
                      <span
                        style={{
                          display: "inline-block", background: v.accent, color: "#fff",
                          fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px",
                          textTransform: "uppercase", padding: "2px 10px",
                          borderRadius: "20px", marginBottom: "5px",
                        }}
                      >
                        {v.badge}
                      </span>
                      <h4 style={{ margin: 0, fontSize: "16px", fontWeight: 800, color: "#1a2e1a" }}>{v.name}</h4>
                    </div>
                  </div>
                  <div style={{ padding: "20px 28px 24px", flex: 1 }}>
                    <p style={{ fontSize: "12px", fontWeight: 700, color: v.accent, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
                      <i className="fas fa-calendar-alt" style={{ marginRight: "6px" }}></i>{v.season}
                    </p>
                    <p style={{ color: "#666", lineHeight: 1.75, margin: 0 }}>{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── How to Order ── */}
      <div className="default-padding bg-gray" style={{ backgroundImage: "url(/assets/img/shape/36.png)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">Get Started</h5>
                <h2 className="title">How to Order</h2>
                <div className="devider"></div>
                <p>Getting fresh Adesco vegetables to your table is simple. Here is how our weekly box subscription works.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {howToOrder.map((step) => (
              <div className="col-lg-3 col-md-6 mb-30" key={step.step}>
                <div
                  style={{
                    background: "#fff", borderRadius: "14px", padding: "36px 28px",
                    height: "100%", boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                    position: "relative", overflow: "hidden",
                  }}
                >
                  <span style={{ position: "absolute", top: "12px", right: "18px", fontSize: "64px", fontWeight: 900, color: "rgba(46,125,50,0.06)", lineHeight: 1 }}>
                    {step.step}
                  </span>
                  <div
                    style={{
                      width: "56px", height: "56px", borderRadius: "12px",
                      background: "linear-gradient(135deg, #1b5e20, #43a047)",
                      display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px",
                    }}
                  >
                    <i className={step.icon} style={{ color: "#fff", fontSize: "22px" }}></i>
                  </div>
                  <span
                    style={{
                      display: "inline-block", background: "#e8f5e9", color: "#2e7d32",
                      fontSize: "11px", fontWeight: 700, letterSpacing: "2px",
                      textTransform: "uppercase", padding: "3px 10px", borderRadius: "20px", marginBottom: "12px",
                    }}
                  >
                    Step {step.step}
                  </span>
                  <h4 style={{ fontSize: "17px", fontWeight: 800, marginBottom: "12px", color: "#1a2e1a" }}>{step.title}</h4>
                  <p style={{ color: "#666", lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Box Options ── */}
      {/* <div className="default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">Subscribe</h5>
                <h2 className="title">Veggie Box Options</h2>
                <div className="devider"></div>
                <p>Choose the box that fits your household. All boxes are filled with whatever is freshest that week — no two weeks are exactly alike.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {boxes.map((box) => (
              <div className="col-lg-4 col-md-6 mb-30" key={box.size}>
                <div
                  style={{
                    borderRadius: "16px", overflow: "hidden",
                    boxShadow: box.featured ? "0 12px 48px rgba(0,0,0,0.15)" : "0 4px 24px rgba(0,0,0,0.08)",
                    height: "100%", display: "flex", flexDirection: "column",
                    border: box.featured ? `2px solid ${box.accent}` : "2px solid transparent",
                    position: "relative",
                  }}
                >
                  {box.featured && (
                    <div
                      style={{
                        position: "absolute", top: "16px", right: "16px",
                        background: box.accent, color: "#fff", fontSize: "10px",
                        fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase",
                        padding: "4px 12px", borderRadius: "20px",
                      }}
                    >
                      Most Popular
                    </div>
                  )}
                  <div style={{ background: box.color, padding: "36px 32px 24px", textAlign: "center" }}>
                    <div
                      style={{
                        width: "68px", height: "68px", borderRadius: "50%", background: "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 16px", boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                      }}
                    >
                      <i className={box.icon} style={{ color: box.accent, fontSize: "26px" }}></i>
                    </div>
                    <h3 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "4px" }}>{box.size}</h3>
                    <p style={{ color: box.accent, fontWeight: 600, margin: 0 }}>{box.people}</p>
                  </div>
                  <div style={{ background: "#fff", padding: "24px 32px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
                      {[
                        { label: "Items per box",       val: box.items  },
                        { label: "Frequency",           val: box.freq   },
                        { label: "Pesticide-free",      val: "Always"   },
                        { label: "Harvest note",        val: "Included" },
                      ].map((row) => (
                        <li
                          key={row.label}
                          style={{
                            display: "flex", justifyContent: "space-between",
                            padding: "10px 0", borderBottom: "1px solid #f0f0f0", fontSize: "14px",
                          }}
                        >
                          <span style={{ color: "#888" }}>{row.label}</span>
                          <span style={{ fontWeight: 700, color: "#1a2e1a" }}>{row.val}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact-us"
                      style={{
                        display: "block",
                        background: box.featured ? box.accent : "transparent",
                        color: box.featured ? "#fff" : box.accent,
                        border: `2px solid ${box.accent}`,
                        padding: "13px 24px", borderRadius: "8px",
                        fontWeight: 700, fontSize: "15px",
                        textDecoration: "none", textAlign: "center", marginTop: "auto",
                      }}
                    >
                      Subscribe Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* ── Regenerative Practices ── */}
      <div className="default-padding" style={{ background: "#f0f7f2" }}>
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5 mb-xs-50">
              <img
                src="/assets/img/journey.webp"
                alt="Regenerative Farming"
                style={{ borderRadius: "14px", width: "100%", objectFit: "cover", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
              />
            </div>
            <div className="col-lg-6 offset-lg-1">
              <h5 className="sub-title">How We Grow</h5>
              <h2 className="title mb-20">Regenerative Practices</h2>
              <p style={{ marginBottom: "28px", color: "#555" }}>
                Every vegetable we grow is the product of farming practices designed to leave
                the land healthier than we found it. We do not just grow food — we rebuild soil,
                conserve water, and restore biodiversity with every season.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {practices.map((p) => (
                  <div key={p.title} style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "46px", height: "46px", borderRadius: "10px",
                        background: "linear-gradient(135deg, #1b5e20, #43a047)",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}
                    >
                      <i className={p.icon} style={{ color: "#fff", fontSize: "17px" }}></i>
                    </div>
                    <div>
                      <h5 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "4px" }}>{p.title}</h5>
                      <p style={{ color: "#666", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div
        className="default-padding text-light text-center"
        style={{
          background: "linear-gradient(135deg, #071a07 0%, #0d2b0d 40%, #133d13 70%, #071a07 100%)",
          position: "relative", overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(67,160,71,0.14) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(165,214,167,0.07) 0%, transparent 55%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                style={{
                  width: "72px", height: "72px", background: "rgba(165,214,167,0.12)",
                  borderRadius: "50%", display: "flex", alignItems: "center",
                  justifyContent: "center", margin: "0 auto 24px",
                  border: "2px solid rgba(165,214,167,0.25)",
                }}
              >
                <img
                  src="/assets/img/healthy/veg.png"
                  alt="Vegetables"
                  style={{ width: "42px", height: "42px", objectFit: "contain", filter: "brightness(10)" }}
                />
              </div>
              <h5 className="sub-title" style={{ color: "#a5d6a7" }}>Grown with Purpose</h5>
              <h2 className="title" style={{ color: "#fff", marginBottom: "20px" }}>
                Food That Feeds More Than Hunger
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "17px", lineHeight: 1.85, marginBottom: "36px" }}>
                When you subscribe to Adesco's seasonal vegetable boxes, you are not just buying
                groceries. You are supporting a Black-led farm that invests every harvest back
                into the community — funding livestock banking programs, seed preservation, youth
                training, and the long work of building an equitable food system in Canada.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                <a className="btn btn-theme secondary btn-md radius animation" href="/contact-us">
                  Subscribe to a Box
                </a>
                <a
                  className="btn btn-md radius"
                  href="/about-us"
                  style={{
                    border: "2px solid rgba(255,255,255,0.4)", color: "#fff",
                    padding: "12px 30px", borderRadius: "6px", fontWeight: 700, textDecoration: "none",
                  }}
                >
                  Our Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Related Initiatives ── */}
      <div className="default-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">Explore More</h5>
                <h2 className="title">Related Initiatives</h2>
                <div className="devider"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {relatedInitiatives.map((item) => (
              <div className="col-lg-4 col-md-6 mb-30" key={item.title}>
                <div
                  style={{
                    background: "#fff", borderRadius: "12px", padding: "32px 28px",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.07)",
                    height: "100%", display: "flex", flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "60px", height: "60px", borderRadius: "12px",
                      background: item.color, display: "flex", alignItems: "center",
                      justifyContent: "center", marginBottom: "20px",
                    }}
                  >
                    <img src={item.icon} alt={item.title} style={{ width: "36px", height: "36px", objectFit: "contain" }} />
                  </div>
                  <h4 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "12px" }}>{item.title}</h4>
                  <p style={{ color: "#666", lineHeight: 1.7, flex: 1, marginBottom: "20px" }}>{item.desc}</p>
                  <a
                    href={item.href}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      color: item.accent, fontWeight: 700, fontSize: "14px", textDecoration: "none",
                    }}
                  >
                    Learn More <i className="fas fa-arrow-right" style={{ fontSize: "12px" }}></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

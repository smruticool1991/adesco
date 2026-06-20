import React from 'react'

const howItWorks = [
  {
    step: "01",
    title: "Source & Collect",
    desc: "We gather heirloom and heritage seed varieties from African diaspora communities, partner farms, and seed banks — preserving genetic diversity that industrial agriculture has long ignored.",
    icon: "fas fa-search",
  },
  {
    step: "02",
    title: "Grow & Trial",
    desc: "Seeds are trialled on Adesco's Alberta land across multiple growing seasons to identify which varieties thrive in the Canadian climate while retaining their original flavour profiles and nutritional traits.",
    icon: "fas fa-seedling",
  },
  {
    step: "03",
    title: "Save & Store",
    desc: "Mature plants are allowed to go to seed. Seeds are carefully harvested, dried, labelled with cultural and growing notes, and stored in our community seed library for redistribution.",
    icon: "fas fa-archive",
  },
  {
    step: "04",
    title: "Share & Grow Together",
    desc: "Seed packets are distributed free or at low cost to community gardeners, urban farmers, and rural families. Each recipient is asked to save and return seeds at the end of the season.",
    icon: "fas fa-hands-helping",
  },
]

const seedVarieties = [
  {
    name: "African Eggplant",
    origin: "West Africa",
    desc: "Known as Garden Egg, this bitter-sweet variety is central to West African cuisine. Thrives in Alberta's warm summers and produces prolific harvests.",
    icon: "fas fa-circle",
    color: "#e8eaf6",
    accent: "#3949ab",
    tag: "Vegetable",
  },
  {
    name: "Moringa",
    origin: "East Africa / South Asia",
    desc: "The 'miracle tree' of nutrition. Grown as an annual in Alberta, moringa leaves are harvested for teas, powders, and culinary use rich in iron and vitamins.",
    icon: "fas fa-leaf",
    color: "#e8f5e9",
    accent: "#2e7d32",
    tag: "Superfood",
  },
  {
    name: "Cowpea (Black-Eyed Peas)",
    origin: "Sub-Saharan Africa",
    desc: "A drought-tolerant legume that fixes nitrogen in the soil while providing a high-protein staple crop. A cornerstone of African and African-American food traditions.",
    icon: "fas fa-dot-circle",
    color: "#fff8e1",
    accent: "#f57f17",
    tag: "Legume",
  },
  {
    name: "Sorghum",
    origin: "Northeast Africa",
    desc: "One of the world's oldest cultivated crops, sorghum is gluten-free, drought-resistant, and deeply embedded in African culinary heritage — from porridges to fermented beverages.",
    icon: "fas fa-wheat",
    color: "#fce4ec",
    accent: "#c62828",
    tag: "Grain",
  },
  {
    name: "Bitter Leaf",
    origin: "Central Africa",
    desc: "A medicinal and culinary herb used across Central and West Africa. Grown in containers or beds, bitter leaf is prized for soups, stews, and traditional wellness practices.",
    icon: "fas fa-spa",
    color: "#e0f2f1",
    accent: "#00695c",
    tag: "Herb",
  },
  {
    name: "Watermelon (Heirloom)",
    origin: "Southern Africa",
    desc: "Wild heirloom watermelon varieties pre-date commercial breeding. Smaller, more flavourful, and more nutrient-dense than supermarket varieties — grown for seed preservation and local markets.",
    icon: "fas fa-apple-alt",
    color: "#fce4ec",
    accent: "#ad1457",
    tag: "Fruit",
  },
]

const benefits = [
  {
    icon: "fas fa-dna",
    title: "Biodiversity Preservation",
    desc: "Heirloom seeds carry genetic diversity that commercial monocultures have eroded. Saving them protects our collective food future against crop failure and climate change.",
  },
  {
    icon: "fas fa-utensils",
    title: "Cultural Food Sovereignty",
    desc: "Access to ancestral crops reconnects diaspora communities with their food heritage, enabling preparation of traditional dishes that carry cultural identity and memory.",
  },
  {
    icon: "fas fa-recycle",
    title: "Seed-to-Seed Continuity",
    desc: "Unlike hybrid seeds, heirlooms can be saved year after year. Participants develop the skill and habit of seed saving, reducing dependence on commercial seed supply chains.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Resilient Food Systems",
    desc: "Community seed libraries create decentralised, locally controlled food networks that are resilient to supply chain shocks, price inflation, and corporate seed monopolies.",
  },
  {
    icon: "fas fa-flask",
    title: "Superior Nutrition",
    desc: "Heritage varieties are often richer in micronutrients, antioxidants, and flavour compounds than modern commercial cultivars bred primarily for shelf life and uniformity.",
  },
  {
    icon: "fas fa-globe-africa",
    title: "Diaspora Connection",
    desc: "Growing the same varieties cultivated by ancestors in Africa creates a living, tangible link across generations and geographies — rooting cultural identity in the soil.",
  },
]

const eligibility = [
  "Community gardeners, urban farmers, and rural families in Alberta",
  "Commitment to growing seeds out and returning a portion at season's end",
  "Willingness to document and share growing notes with the seed library",
  "Agreement not to sell or commercialise redistributed seeds without consent",
  "Attendance at a seed orientation session (in-person or virtual)",
]

const stats = [
  { val: "40+", label: "Seed Varieties Preserved" },
  { val: "12", label: "Countries of Origin" },
  { val: "200+", label: "Seed Packets Distributed" },
  { val: "5", label: "Growing Seasons Completed" },
]

export default function CulturalSeedsPage() {
  return (
    <div>
      {/* ── Breadcrumb ── */}
      <div
        className="breadcrumb-area text-center shadow dark bg-fixed text-light"
        style={{ backgroundImage: "url(/assets/img/banner/banner7.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>Cultural Seeds</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li><a href="/"><i className="fas fa-home"></i> Home</a></li>
                  <li><a href="/brands">Brands &amp; Products</a></li>
                  <li className="active">Cultural Seeds</li>
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
                <img src="/assets/img/about2.webp" alt="Cultural Seeds Program" />
                <div className="sub-item">
                  <img src="/assets/img/about.webp" alt="Heritage Seed Saving" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 about-style-one">
              <div className="row align-center">
                <div className="col-xl-7 col-lg-12">
                  <h5 className="sub-title">Heritage &amp; Identity</h5>
                  <h2 className="heading">Cultural Seeds <br /> Program</h2>
                  <p>
                    The Cultural Seeds Program is Adesco Western Ranch's commitment to preserving
                    the heirloom and heritage seed varieties that African and Black diaspora
                    communities have cultivated for centuries. These seeds carry history, identity,
                    nutrition, and resilience — traits that industrial agriculture has all but
                    erased from mainstream food systems.
                  </p>
                  <p>
                    Through growing trials, seed saving, and community redistribution, we are
                    building a living seed library rooted in Alberta soil — one that feeds both
                    bodies and cultural memory.
                  </p>
                  <ul className="check-solid-list mt-20">
                    <li>Free seed packets for enrolled community members</li>
                    <li>Annual seed swap events and growing workshops</li>
                    <li>Culturally grounded growing guides and recipe resources</li>
                  </ul>
                </div>
                <div className="col-xl-5 col-lg-12 pl-50 pl-md-15 pl-xs-15">
                  <div className="top-product-item">
                    <img src="/assets/img/icon/1.svg" alt="Icon" />
                    <h5><a href="#">Seed Sovereignty</a></h5>
                    <p>Restoring community control over the seeds that feed us and define our heritage.</p>
                  </div>
                  <div className="top-product-item">
                    <img src="/assets/img/icon/2.svg" alt="Icon" />
                    <h5><a href="#">Living Library</a></h5>
                    <p>A growing collection of varieties maintained by the community, for the community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="default-padding" style={{ background: "#1b1a2e", padding: "50px 0" }}>
        <div className="container">
          <div className="row text-center">
            {stats.map((s) => (
              <div className="col-lg-3 col-md-6" key={s.label}>
                <div style={{ padding: "20px 0" }}>
                  <div
                    style={{ color: "#ce93d8", fontSize: "48px", fontWeight: 800, lineHeight: 1.1 }}
                  >
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

      {/* ── How It Works ── */}
      <div className="default-padding bg-gray" style={{ backgroundImage: "url(/assets/img/shape/36.png)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">The Process</h5>
                <h2 className="title">How Cultural Seeds Works</h2>
                <div className="devider"></div>
                <p>A four-step cycle of collection, cultivation, saving, and sharing that keeps ancestral seeds alive and in community hands.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {howItWorks.map((step) => (
              <div className="col-lg-3 col-md-6 mb-30" key={step.step}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "14px",
                    padding: "36px 28px",
                    height: "100%",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "18px",
                      fontSize: "64px",
                      fontWeight: 900,
                      color: "rgba(106,27,154,0.06)",
                      lineHeight: 1,
                    }}
                  >
                    {step.step}
                  </span>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #6a1b9a, #ab47bc)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <i className={step.icon} style={{ color: "#fff", fontSize: "22px" }}></i>
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#f3e5f5",
                      color: "#6a1b9a",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      padding: "3px 10px",
                      borderRadius: "20px",
                      marginBottom: "12px",
                    }}
                  >
                    Step {step.step}
                  </span>
                  <h4 style={{ fontSize: "17px", fontWeight: 800, marginBottom: "12px", color: "#1a2e1a" }}>
                    {step.title}
                  </h4>
                  <p style={{ color: "#666", lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Seed Varieties ── */}
      <div className="default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">Our Collection</h5>
                <h2 className="title">Featured Seed Varieties</h2>
                <div className="devider"></div>
                <p>
                  A sample of the heritage varieties in our growing seed library. Each one carries
                  centuries of agricultural knowledge, cultural memory, and nutritional value.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {seedVarieties.map((seed) => (
              <div className="col-lg-4 col-md-6 mb-30" key={seed.name}>
                <div
                  style={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background: "#fff",
                  }}
                >
                  {/* Card header */}
                  <div
                    style={{
                      background: seed.color,
                      padding: "28px 28px 20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                        flexShrink: 0,
                      }}
                    >
                      <i className={seed.icon} style={{ color: seed.accent, fontSize: "22px" }}></i>
                    </div>
                    <div>
                      <span
                        style={{
                          display: "inline-block",
                          background: seed.accent,
                          color: "#fff",
                          fontSize: "10px",
                          fontWeight: 700,
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          padding: "2px 10px",
                          borderRadius: "20px",
                          marginBottom: "5px",
                        }}
                      >
                        {seed.tag}
                      </span>
                      <h4 style={{ margin: 0, fontSize: "16px", fontWeight: 800, color: "#1a2e1a" }}>{seed.name}</h4>
                    </div>
                  </div>
                  {/* Card body */}
                  <div style={{ padding: "20px 28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        color: seed.accent,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginBottom: "10px",
                      }}
                    >
                      <i className="fas fa-globe-africa" style={{ marginRight: "6px" }}></i>
                      {seed.origin}
                    </p>
                    <p style={{ color: "#666", lineHeight: 1.75, margin: 0, flex: 1 }}>{seed.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Benefits ── */}
      <div className="default-padding" style={{ background: "#f9f5fc" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">Why It Matters</h5>
                <h2 className="title">Benefits of Seed Saving</h2>
                <div className="devider"></div>
                <p>Preserving heritage seeds is an act of resistance, culture, and ecological care — with lasting benefits for individuals, communities, and the planet.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {benefits.map((b) => (
              <div className="col-lg-4 col-md-6 mb-30" key={b.title}>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #e8d5f5",
                    borderRadius: "12px",
                    padding: "32px 28px",
                    height: "100%",
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "10px",
                      background: "linear-gradient(135deg, #4a148c, #7b1fa2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i className={b.icon} style={{ color: "#fff", fontSize: "18px" }}></i>
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "8px" }}>{b.title}</h5>
                    <p style={{ color: "#666", lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Eligibility ── */}
      <div className="default-padding" style={{ background: "#f0f7f2" }}>
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5 mb-xs-50">
              <img
                src="/assets/img/journey.webp"
                alt="Seed Saving Community"
                style={{ borderRadius: "14px", width: "100%", objectFit: "cover", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
              />
            </div>
            <div className="col-lg-6 offset-lg-1">
              <h5 className="sub-title">Who Can Participate</h5>
              <h2 className="title mb-20">Participation Criteria</h2>
              <p style={{ marginBottom: "28px", color: "#555" }}>
                The Cultural Seeds Program is open to any community member in Alberta who
                is committed to growing, saving, and sharing seeds responsibly. Whether you
                have a backyard garden or a farm, you are welcome:
              </p>
              <ul className="check-solid-list">
                {eligibility.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div style={{ marginTop: "36px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a className="btn btn-theme btn-md radius animation" href="/contact-us">
                  Request Seeds
                </a>
                <a
                  className="btn btn-md radius"
                  href="/about-us"
                  style={{
                    border: "2px solid #6a1b9a",
                    color: "#6a1b9a",
                    padding: "12px 28px",
                    borderRadius: "6px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Learn About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Heritage Banner ── */}
      <div
        className="default-padding text-light text-center"
        style={{
          background: "linear-gradient(135deg, #1a0533 0%, #2d0a4e 40%, #3b0764 70%, #1a0533 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(171,71,188,0.14) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(206,147,216,0.08) 0%, transparent 55%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  background: "rgba(206,147,216,0.12)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  border: "2px solid rgba(206,147,216,0.25)",
                }}
              >
                <img
                  src="/assets/img/healthy/veg1.png"
                  alt="Seeds"
                  style={{ width: "42px", height: "42px", objectFit: "contain", filter: "brightness(10)" }}
                />
              </div>
              <h5 className="sub-title" style={{ color: "#ce93d8" }}>Seeds of Resistance</h5>
              <h2 className="title" style={{ color: "#fff", marginBottom: "20px" }}>
                Every Seed is a Story
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "17px", lineHeight: 1.85, marginBottom: "36px" }}>
                In many African traditions, seeds are never merely agricultural inputs — they are
                living archives of knowledge, memory, and kinship. When Black farmers were
                displaced, enslaved, or excluded from land ownership, the seeds they carried
                became acts of defiance and survival. At Adesco, we carry that tradition forward,
                planting heritage varieties in Alberta soil as a declaration that our food, our
                culture, and our futures belong to us.
              </p>
              <a className="btn btn-theme secondary btn-md radius animation" href="/contact-us">
                Join the Seed Library
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Seed Swap CTA ── */}
      <div className="default-padding bg-gray">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-7 mb-xs-40">
              <h5 className="sub-title">Annual Event</h5>
              <h2 className="title mb-20">Community Seed Swap</h2>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "24px" }}>
                Every spring, Adesco hosts a Community Seed Swap where participants bring saved
                seeds, trade varieties, share growing stories, and connect with fellow growers.
                The event includes workshops on seed saving techniques, soil health, and cooking
                with heritage crops. All are welcome — no experience required.
              </p>
              <ul className="check-solid-list">
                <li>Free entry for all community members</li>
                <li>Seed saving and growing workshops</li>
                <li>Cultural cooking demonstrations</li>
                <li>Seed packets to take home</li>
              </ul>
              <a
                className="btn btn-theme btn-md radius animation mt-30"
                href="/contact-us"
              >
                Register for the Next Swap
              </a>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "40px 32px",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, #6a1b9a, #ab47bc)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <i className="fas fa-calendar-alt" style={{ color: "#fff", fontSize: "32px" }}></i>
                </div>
                <h4 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "8px" }}>Next Seed Swap</h4>
                <p style={{ color: "#6a1b9a", fontWeight: 700, fontSize: "18px", marginBottom: "4px" }}>Spring 2027</p>
                <p style={{ color: "#888", fontSize: "14px", marginBottom: "20px" }}>Tomahawk, Alberta</p>
                <a
                  href="/contact-us"
                  style={{
                    display: "inline-block",
                    background: "#6a1b9a",
                    color: "#fff",
                    padding: "12px 28px",
                    borderRadius: "6px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                >
                  Get Notified
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Related Initiatives ── */}
      <div className="default-padding">
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
            {[
              { title: "Seasonal Vegetables", desc: "Fresh, organically grown seasonal produce from Adesco's regenerative market gardens, harvested at peak ripeness.", href: "/seasonal-vegetables", icon: "/assets/img/healthy/veg.png", color: "#e8f5e9", accent: "#2e7d32" },
              { title: "Goat Banking", desc: "Community goat ownership program offering fresh milk, meat, and income through a traditional livestock-sharing model.", href: "/goat-banking", icon: "/assets/img/healthy/goat.png", color: "#fce4ec", accent: "#c62828" },
              { title: "Cattle Banking", desc: "Shared cattle ownership program providing dairy milk, beef, and long-term herd equity for enrolled families.", href: "/cattle-banking", icon: "/assets/img/healthy/cow.png", color: "#e3f2fd", accent: "#1565c0" },
            ].map((item) => (
              <div className="col-lg-4 col-md-6 mb-30" key={item.title}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "32px 28px",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.07)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #f0f0f0",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "12px",
                      background: item.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <img src={item.icon} alt={item.title} style={{ width: "36px", height: "36px", objectFit: "contain" }} />
                  </div>
                  <h4 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "12px" }}>{item.title}</h4>
                  <p style={{ color: "#666", lineHeight: 1.7, flex: 1, marginBottom: "20px" }}>{item.desc}</p>
                  <a
                    href={item.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: item.accent,
                      fontWeight: 700,
                      fontSize: "14px",
                      textDecoration: "none",
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

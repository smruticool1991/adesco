import React from 'react'

const howItWorks = [
  {
    step: "01",
    title: "Submit Your Application",
    desc: "Interested community members apply through Adesco. Our team reviews each application, assesses land and care capacity, and schedules a farm orientation before approval.",
    icon: "fas fa-file-alt",
  },
  {
    step: "02",
    title: "Receive Your Cattle",
    desc: "Approved participants receive one or more cattle from the Adesco herd, complete with health records, breed information, feed guidance, and a starter supply to get going.",
    icon: "fas fa-hand-holding-heart",
  },
  {
    step: "03",
    title: "Raise & Profit",
    desc: "Participants raise the cattle and benefit directly from the milk produced, sell beef, or lease breeding rights. Adesco provides ongoing vet access and herd management support.",
    icon: "fas fa-chart-line",
  },
  {
    step: "04",
    title: "Return & Renew",
    desc: "Once a calf is born, one is returned to the Adesco community herd, keeping the cycle alive. The program grows with every new birth, extending opportunity to more families.",
    icon: "fas fa-sync-alt",
  },
]

const benefits = [
  {
    icon: "fas fa-tint",
    title: "Fresh Dairy Milk",
    desc: "Daily access to hormone-free, grass-fed milk for your household — reducing grocery costs and improving nutritional outcomes for your family.",
  },
  {
    icon: "fas fa-drumstick-bite",
    title: "Beef Production",
    desc: "Raise cattle for high-quality beef, sold locally or processed for home use, providing a premium protein source and a steady income stream.",
  },
  {
    icon: "fas fa-dollar-sign",
    title: "Income & Equity",
    desc: "Milk sales, beef, and breeding rights generate meaningful supplemental income, helping families build financial equity through livestock ownership.",
  },
  {
    icon: "fas fa-users",
    title: "Community Herd Growth",
    desc: "Each returned calf expands the community herd, enabling more families to participate and multiplying the program's economic and social impact over time.",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Agricultural Training",
    desc: "Participants learn cattle husbandry, milking, pasture rotation, and herd health management — skills that transfer to broader farming and employment opportunities.",
  },
  {
    icon: "fas fa-leaf",
    title: "Land Stewardship",
    desc: "Managed grazing improves soil health and pasture diversity. Cattle integrate into our regenerative land practices, benefiting both the herd and the Alberta landscape.",
  },
]

const eligibility = [
  "Alberta residents with suitable pasture or access to grazing land",
  "Commitment to humane cattle care and welfare standards",
  "Completion of Adesco's cattle orientation and training program",
  "Willingness to return one calf per birth cycle to the community herd",
  "Agreement to Adesco's Cattle Banking participation and reporting terms",
]

const stats = [
  { val: "30+", label: "Families Enrolled" },
  { val: "80+", label: "Cattle Placed" },
  { val: "2,400L", label: "Milk Produced Monthly" },
  { val: "100%", label: "Grass-Fed Herd" },
]

const products = [
  {
    name: "Fresh Whole Milk",
    desc: "Raw, unprocessed milk from grass-fed cattle, available directly from participating farms. Rich in natural fats, proteins, and vitamins.",
    icon: "fas fa-flask",
    color: "#e3f2fd",
    accent: "#1565c0",
  },
  {
    name: "Artisan Butter & Cream",
    desc: "Small-batch butter and heavy cream churned from our herd's milk. Produced with traditional methods and zero additives.",
    icon: "fas fa-cheese",
    color: "#fff8e1",
    accent: "#f57f17",
  },
  {
    name: "Premium Beef Cuts",
    desc: "Pasture-raised beef from Adesco cattle — ethically harvested, naturally marbled, and available in a range of cuts for local distribution.",
    icon: "fas fa-drumstick-bite",
    color: "#fce4ec",
    accent: "#b71c1c",
  },
]

export default function CattleBankingPage() {
  return (
    <div>
      {/* ── Breadcrumb ── */}
      <div
        className="breadcrumb-area text-center shadow dark bg-fixed text-light"
        style={{ backgroundImage: "url(/assets/img/banner/banner03.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>Cattle Banking</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li><a href="/"><i className="fas fa-home"></i> Home</a></li>
                  <li><a href="/brands">Brands &amp; Products</a></li>
                  <li className="active">Cattle Banking</li>
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
                <img src="/assets/img/initiatives/cattle-banking.jpg" alt="Adesco Cattle Herd" />
                <div className="sub-item">
                  <img src="/assets/img/about.webp" alt="Cattle Banking Program" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 about-style-one">
              <div className="row align-center">
                <div className="col-xl-7 col-lg-12">
                  <h5 className="sub-title">Community Initiative</h5>
                  <h2 className="heading">Cattle Banking <br /> Program</h2>
                  <p>
                    The Cattle Banking Program places grass-fed cattle into the hands of community
                    members who use them to produce fresh milk, quality beef, and breeding stock.
                    Built on a pay-it-forward model, participants return one calf per cycle to grow
                    the shared community herd.
                  </p>
                  <p>
                    This initiative draws on the time-honoured African tradition of shared livestock
                    stewardship, adapted for Alberta's agricultural landscape — creating pathways to
                    food security, income generation, and land equity for Black and marginalized
                    farming families.
                  </p>
                  <ul className="check-solid-list mt-20">
                    <li>Cattle provided at no upfront cost to approved participants</li>
                    <li>Full veterinary and nutritional support from Adesco</li>
                    <li>Access to Adesco pasture networks and grazing resources</li>
                  </ul>
                </div>
                <div className="col-xl-5 col-lg-12 pl-50 pl-md-15 pl-xs-15">
                  <div className="top-product-item">
                    <img src="/assets/img/icon/1.svg" alt="Icon" />
                    <h5><a href="#">Dairy &amp; Beef</a></h5>
                    <p>Fresh milk and quality beef from ethically raised, grass-fed cattle.</p>
                  </div>
                  <div className="top-product-item">
                    <img src="/assets/img/icon/2.svg" alt="Icon" />
                    <h5><a href="#">Herd Equity</a></h5>
                    <p>Participants build long-term value through a growing share in the community herd.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="default-padding" style={{ background: "#1a2e3a", padding: "50px 0" }}>
        <div className="container">
          <div className="row text-center">
            {stats.map((s) => (
              <div className="col-lg-3 col-md-6" key={s.label}>
                <div style={{ padding: "20px 0" }}>
                  <div
                    style={{ color: "#64b5f6", fontSize: "48px", fontWeight: 800, lineHeight: 1.1 }}
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
                <h2 className="title">How Cattle Banking Works</h2>
                <div className="devider"></div>
                <p>A transparent, four-step cycle that turns community cattle into lasting household wealth.</p>
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
                      color: "rgba(21,101,192,0.06)",
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
                      background: "linear-gradient(135deg, #1565c0, #42a5f5)",
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
                      background: "#e3f2fd",
                      color: "#1565c0",
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

      {/* ── Products ── */}
      <div className="default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">What We Produce</h5>
                <h2 className="title">Cattle Products</h2>
                <div className="devider"></div>
                <p>Every product from the Cattle Banking Program is raised ethically, processed minimally, and distributed locally — from our Alberta ranch to your table.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((p) => (
              <div className="col-lg-4 col-md-6 mb-30" key={p.name}>
                <div
                  style={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      background: p.color,
                      padding: "40px 32px 28px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "50%",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                        marginBottom: "16px",
                      }}
                    >
                      <i className={p.icon} style={{ color: p.accent, fontSize: "28px" }}></i>
                    </div>
                    <h4 style={{ fontWeight: 800, color: "#1a2e1a", margin: 0 }}>{p.name}</h4>
                  </div>
                  <div style={{ padding: "24px 32px", background: "#fff", flex: 1 }}>
                    <p style={{ color: "#666", lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Benefits ── */}
      <div className="default-padding" style={{ background: "#f5f9fc" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">Program Benefits</h5>
                <h2 className="title">What Participants Gain</h2>
                <div className="devider"></div>
                <p>From fresh dairy to long-term land equity, the Cattle Banking Program creates real, measurable value for every enrolled family.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {benefits.map((b) => (
              <div className="col-lg-4 col-md-6 mb-30" key={b.title}>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #ddeaf5",
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
                      background: "linear-gradient(135deg, #0d47a1, #1976d2)",
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
                src="/assets/img/farmer.webp"
                alt="Cattle Banking Participant"
                style={{ borderRadius: "14px", width: "100%", objectFit: "cover", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
              />
            </div>
            <div className="col-lg-6 offset-lg-1">
              <h5 className="sub-title">Who Can Apply</h5>
              <h2 className="title mb-20">Eligibility Criteria</h2>
              <p style={{ marginBottom: "28px", color: "#555" }}>
                The Cattle Banking Program is open to Alberta residents who have the land,
                commitment, and capacity to responsibly care for cattle. Here is what we
                look for:
              </p>
              <ul className="check-solid-list">
                {eligibility.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div style={{ marginTop: "36px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a className="btn btn-theme btn-md radius animation" href="/contact-us">
                  Apply Now
                </a>
                <a
                  className="btn btn-md radius"
                  href="/about-us"
                  style={{
                    border: "2px solid #1565c0",
                    color: "#1565c0",
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
          background: "linear-gradient(135deg, #05111a 0%, #092232 40%, #0d3347 70%, #071828 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse at 15% 50%, rgba(100,181,246,0.10) 0%, transparent 60%), radial-gradient(ellipse at 85% 30%, rgba(21,101,192,0.18) 0%, transparent 55%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  background: "rgba(100,181,246,0.12)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  border: "2px solid rgba(100,181,246,0.25)",
                }}
              >
                <img
                  src="/assets/img/healthy/cow.png"
                  alt="Cattle"
                  style={{ width: "42px", height: "42px", objectFit: "contain", filter: "brightness(10)" }}
                />
              </div>
              <h5 className="sub-title" style={{ color: "#64b5f6" }}>Our Heritage</h5>
              <h2 className="title" style={{ color: "#fff", marginBottom: "20px" }}>
                Cattle as Currency, Community as Wealth
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "17px", lineHeight: 1.85, marginBottom: "36px" }}>
                Across generations and continents, cattle have represented status, security, and
                community solidarity in African societies. Adesco's Cattle Banking Program honours
                this legacy by creating a modern, structured model of shared cattle ownership —
                one that builds wealth, nourishes families, and challenges the exclusion of Black
                farmers from Canada's agricultural economy.
              </p>
              <a className="btn btn-theme secondary btn-md radius animation" href="/contact-us">
                Get Involved
              </a>
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
            {[
              { title: "Goat Banking", desc: "Community goat ownership program offering fresh milk, meat, and income through a traditional livestock-sharing model.", href: "/goat-banking", icon: "/assets/img/healthy/goat.png", color: "#e8f5e9", accent: "#2e7d32" },
              { title: "Chicken Banking", desc: "Free-range poultry initiative giving families access to fresh eggs and chicken meat through shared flock ownership.", href: "/chicken-banking", icon: "/assets/img/healthy/hen.png", color: "#fff8e1", accent: "#f9a825" },
              { title: "Seasonal Vegetables", desc: "Organically grown seasonal produce delivered straight from Adesco's regenerative market gardens.", href: "/seasonal-vegetables", icon: "/assets/img/healthy/veg1.png", color: "#f3e5f5", accent: "#6a1b9a" },
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

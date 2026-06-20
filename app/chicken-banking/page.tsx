import React from 'react'

const howItWorks = [
  {
    step: "01",
    title: "Apply & Attend Orientation",
    desc: "Prospective participants submit an application and attend a free orientation covering flock care, coop requirements, feeding schedules, and biosecurity basics before receiving any birds.",
    icon: "fas fa-file-alt",
  },
  {
    step: "02",
    title: "Receive Your Flock",
    desc: "Approved participants receive a starter flock of laying hens or dual-purpose birds, along with feed, health records, and a coop setup guide to get production underway quickly.",
    icon: "fas fa-hand-holding-heart",
  },
  {
    step: "03",
    title: "Raise, Collect & Sell",
    desc: "Participants collect fresh eggs daily and raise birds for meat. Surplus eggs and processed chicken can be sold locally, at farmers' markets, or directly to Adesco's distribution network.",
    icon: "fas fa-store",
  },
  {
    step: "04",
    title: "Return & Renew the Flock",
    desc: "When hens hatch chicks, a portion is returned to the community pool. This renews the program for the next family and keeps the cycle of shared agricultural wealth going.",
    icon: "fas fa-sync-alt",
  },
]

const benefits = [
  {
    icon: "fas fa-egg",
    title: "Daily Fresh Eggs",
    desc: "Free-range hens produce nutritious, antibiotic-free eggs daily — reducing household grocery costs and providing a consistent source of high-quality protein.",
  },
  {
    icon: "fas fa-drumstick-bite",
    title: "Pasture-Raised Chicken",
    desc: "Heritage and dual-purpose breeds raised on open range produce clean, flavourful meat — sold locally or processed for household use without additives or hormones.",
  },
  {
    icon: "fas fa-dollar-sign",
    title: "Supplemental Income",
    desc: "Egg and meat sales provide a steady supplemental income stream, especially valuable for rural and peri-urban families building economic resilience through small-scale farming.",
  },
  {
    icon: "fas fa-users",
    title: "Community Flock Growth",
    desc: "Returned chicks expand the community pool each cycle, enabling more families to participate and amplifying the program's collective impact season after season.",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Poultry Skills Training",
    desc: "Participants gain hands-on skills in flock management, egg grading, biosecurity, and processing — credentials that open doors to broader agricultural employment.",
  },
  {
    icon: "fas fa-leaf",
    title: "Garden & Soil Benefits",
    desc: "Free-range chickens naturally fertilise pasture, control pests, and improve soil biology — integrating seamlessly into Adesco's regenerative land management approach.",
  },
]

const flockTypes = [
  {
    name: "Laying Hens",
    breed: "ISA Brown & Rhode Island Red",
    desc: "High-productivity laying breeds that reliably produce 250–300 eggs per hen annually. Calm, adaptable, and well-suited to Alberta's climate with proper winter coop insulation.",
    output: "250–300 eggs/year per hen",
    icon: "fas fa-egg",
    color: "#fff8e1",
    accent: "#f57f17",
  },
  {
    name: "Dual-Purpose Birds",
    breed: "Buff Orpington & Barred Rock",
    desc: "Heritage breeds valued for both egg production and quality meat. Slower-growing but richer in flavour, these birds are the foundation of traditional poultry farming.",
    output: "Eggs + premium table bird",
    icon: "fas fa-drumstick-bite",
    color: "#fce4ec",
    accent: "#c62828",
  },
  {
    name: "Broiler Flock",
    breed: "Freedom Ranger",
    desc: "A pasture-raised meat breed raised to harvest weight in 9–11 weeks. Slower than commercial broilers, Freedom Rangers develop superior flavour on open range with minimal feed inputs.",
    output: "4–6 kg live weight at harvest",
    icon: "fas fa-fire",
    color: "#e8f5e9",
    accent: "#2e7d32",
  },
]

const eligibility = [
  "Alberta residents with outdoor space for a secure, predator-proof coop",
  "Commitment to free-range, humane flock management standards",
  "Completion of Adesco's poultry orientation and biosecurity training",
  "Willingness to return a portion of chicks hatched to the community pool",
  "Agreement to Adesco's Chicken Banking participation and reporting terms",
]

const stats = [
  { val: "55+",   label: "Families Enrolled" },
  { val: "600+",  label: "Birds Placed" },
  { val: "1,800", label: "Eggs Produced Weekly" },
  { val: "4",     label: "Flock Cycles Completed" },
]

export default function ChickenBankingPage() {
  return (
    <div>
      {/* ── Breadcrumb ── */}
      <div
        className="breadcrumb-area text-center shadow dark bg-fixed text-light"
        style={{ backgroundImage: "url(/assets/img/banner/banner8.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>Chicken Banking</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li><a href="/"><i className="fas fa-home"></i> Home</a></li>
                  <li><a href="/brands">Brands &amp; Products</a></li>
                  <li className="active">Chicken Banking</li>
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
                <img src="/assets/img/about2.webp" alt="Adesco Chicken Banking" />
                <div className="sub-item">
                  <img src="/assets/img/about.webp" alt="Free-Range Flock" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 about-style-one">
              <div className="row align-center">
                <div className="col-xl-7 col-lg-12">
                  <h5 className="sub-title">Community Initiative</h5>
                  <h2 className="heading">Chicken Banking <br /> Program</h2>
                  <p>
                    The Chicken Banking Program places free-range flocks with community families
                    who raise them for fresh eggs, quality meat, and supplemental income. Built on
                    the same pay-it-forward principle as our other banking initiatives, participants
                    return a share of hatched chicks to keep the cycle alive for the next family.
                  </p>
                  <p>
                    Small-scale poultry keeping has been central to African household farming for
                    generations. This program honours that tradition while creating a structured,
                    supported pathway to food security and income generation for Black and
                    marginalised families across Alberta.
                  </p>
                  <ul className="check-solid-list mt-20">
                    <li>Starter flock provided at no upfront cost to approved participants</li>
                    <li>Coop setup guidance and biosecurity support from Adesco</li>
                    <li>Access to Adesco's local egg and poultry distribution network</li>
                  </ul>
                </div>
                <div className="col-xl-5 col-lg-12 pl-50 pl-md-15 pl-xs-15">
                  <div className="top-product-item">
                    <img src="/assets/img/icon/1.svg" alt="Icon" />
                    <h5><a href="#">Eggs &amp; Meat</a></h5>
                    <p>Daily fresh eggs and pasture-raised chicken from antibiotic-free, free-range flocks.</p>
                  </div>
                  <div className="top-product-item">
                    <img src="/assets/img/icon/2.svg" alt="Icon" />
                    <h5><a href="#">Flock Equity</a></h5>
                    <p>Participants build long-term value through a growing share in the community flock.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="default-padding" style={{ background: "#1f1a00", padding: "50px 0" }}>
        <div className="container">
          <div className="row text-center">
            {stats.map((s) => (
              <div className="col-lg-3 col-md-6" key={s.label}>
                <div style={{ padding: "20px 0" }}>
                  <div
                    style={{ color: "#ffd54f", fontSize: "48px", fontWeight: 800, lineHeight: 1.1 }}
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
                <h2 className="title">How Chicken Banking Works</h2>
                <div className="devider"></div>
                <p>A four-step cycle that turns a starter flock into lasting household food security and income.</p>
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
                      color: "rgba(245,127,23,0.07)",
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
                      background: "linear-gradient(135deg, #e65100, #fb8c00)",
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
                      background: "#fff8e1",
                      color: "#e65100",
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

      {/* ── Flock Types ── */}
      <div className="default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">What We Raise</h5>
                <h2 className="title">Flock Types</h2>
                <div className="devider"></div>
                <p>Adesco selects breeds suited to Alberta's climate, the participant's goals, and the program's commitment to free-range, humane poultry keeping.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {flockTypes.map((f) => (
              <div className="col-lg-4 col-md-6 mb-30" key={f.name}>
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
                  <div
                    style={{
                      background: f.color,
                      padding: "32px 28px 24px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                        flexShrink: 0,
                      }}
                    >
                      <i className={f.icon} style={{ color: f.accent, fontSize: "24px" }}></i>
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: "17px", fontWeight: 800, color: "#1a2e1a" }}>{f.name}</h4>
                      <p style={{ margin: 0, fontSize: "12px", color: "#888", marginTop: "2px" }}>{f.breed}</p>
                    </div>
                  </div>
                  <div style={{ padding: "20px 28px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <p style={{ color: "#666", lineHeight: 1.75, flex: 1, marginBottom: "16px" }}>{f.desc}</p>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: f.color,
                        color: f.accent,
                        padding: "8px 16px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: 700,
                      }}
                    >
                      <i className="fas fa-chart-bar" style={{ fontSize: "12px" }}></i>
                      {f.output}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Benefits ── */}
      <div className="default-padding" style={{ background: "#fffbf0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">Program Benefits</h5>
                <h2 className="title">What Participants Gain</h2>
                <div className="devider"></div>
                <p>From daily egg collection to long-term flock equity, the Chicken Banking Program creates tangible, immediate value for every enrolled family.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {benefits.map((b) => (
              <div className="col-lg-4 col-md-6 mb-30" key={b.title}>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #fde8c8",
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
                      background: "linear-gradient(135deg, #bf360c, #ef6c00)",
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
                alt="Chicken Banking Participant"
                style={{ borderRadius: "14px", width: "100%", objectFit: "cover", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
              />
            </div>
            <div className="col-lg-6 offset-lg-1">
              <h5 className="sub-title">Who Can Apply</h5>
              <h2 className="title mb-20">Eligibility Criteria</h2>
              <p style={{ marginBottom: "28px", color: "#555" }}>
                The Chicken Banking Program is open to Alberta residents who have the space,
                commitment, and willingness to raise free-range poultry responsibly. Here is
                what we look for:
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
                    border: "2px solid #e65100",
                    color: "#e65100",
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
          background: "linear-gradient(135deg, #1a0a00 0%, #2e1500 40%, #3e1f00 70%, #1a0a00 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(251,140,0,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(255,213,79,0.07) 0%, transparent 55%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  background: "rgba(251,140,0,0.12)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  border: "2px solid rgba(251,140,0,0.25)",
                }}
              >
                <img
                  src="/assets/img/healthy/hen.png"
                  alt="Chicken"
                  style={{ width: "42px", height: "42px", objectFit: "contain", filter: "brightness(10)" }}
                />
              </div>
              <h5 className="sub-title" style={{ color: "#ffd54f" }}>Our Heritage</h5>
              <h2 className="title" style={{ color: "#fff", marginBottom: "20px" }}>
                The Village Flock, Reimagined
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "17px", lineHeight: 1.85, marginBottom: "36px" }}>
                In African villages, the household chicken flock was among the most democratic
                of all assets — accessible to families of every income level, requiring minimal
                land, and producing daily nutrition. Adesco's Chicken Banking Program brings
                that tradition to the Canadian prairies: modernised, structured, and supported,
                but rooted in the same principle that access to food-producing animals is a
                fundamental community right.
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
              { title: "Goat Banking", desc: "Community goat ownership program offering fresh milk, meat, and income through a traditional livestock-sharing model.", href: "/goat-banking", icon: "/assets/img/healthy/goat.png", color: "#fce4ec", accent: "#c62828" },
              { title: "Cattle Banking", desc: "Shared cattle ownership providing dairy milk, quality beef, and long-term herd equity for enrolled Alberta families.", href: "/cattle-banking", icon: "/assets/img/healthy/cow.png", color: "#e3f2fd", accent: "#1565c0" },
              { title: "Cultural Seeds", desc: "Heritage seed preservation program reconnecting diaspora communities with ancestral crops and traditional food wisdom.", href: "/cultural-seeds", icon: "/assets/img/healthy/veg1.png", color: "#f3e5f5", accent: "#6a1b9a" },
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

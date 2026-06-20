import React from 'react'

const howItWorks = [
  {
    step: "01",
    title: "Apply to the Program",
    desc: "Community members submit an application expressing interest and outlining their capacity to care for goats. Our team reviews each submission and schedules an orientation session.",
    icon: "fas fa-file-alt",
  },
  {
    step: "02",
    title: "Receive Your Goat",
    desc: "Approved participants receive one or more goats from the Adesco herd. We provide starter feed, health records, and a care guide to set you up for success from day one.",
    icon: "fas fa-hand-holding-heart",
  },
  {
    step: "03",
    title: "Raise & Benefit",
    desc: "You raise the goat and enjoy the direct benefits — fresh milk, meat, and income from sales. Our team provides ongoing support, veterinary access, and community check-ins.",
    icon: "fas fa-seedling",
  },
  {
    step: "04",
    title: "Give Back to the Community",
    desc: "When your doe gives birth, one offspring is returned to the Goat Banking pool, passing the opportunity to the next family. The cycle of community wealth continues.",
    icon: "fas fa-sync-alt",
  },
]

const benefits = [
  {
    icon: "fas fa-tint",
    title: "Fresh Goat Milk",
    desc: "High-protein, easily digestible milk for your household — a nutritious alternative to cow's milk with rich cultural significance.",
  },
  {
    icon: "fas fa-drumstick-bite",
    title: "Quality Goat Meat",
    desc: "Raise your goat for premium halal and kosher-friendly meat, sold locally or consumed by your family.",
  },
  {
    icon: "fas fa-dollar-sign",
    title: "Income Generation",
    desc: "Sell milk, meat, or offspring to generate supplemental household income and build long-term financial resilience.",
  },
  {
    icon: "fas fa-users",
    title: "Community Wealth",
    desc: "The pay-it-forward model ensures every returned offspring starts a new family on their journey, multiplying community wealth.",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Skills & Training",
    desc: "Participants gain hands-on livestock management skills — feeding, health monitoring, and breeding — transferable to broader agricultural work.",
  },
  {
    icon: "fas fa-leaf",
    title: "Regenerative Impact",
    desc: "Goats contribute to land management through natural grazing, helping restore pasture health and soil biodiversity on Alberta rangelands.",
  },
]

const eligibility = [
  "Alberta residents with access to a safe outdoor space",
  "Commitment to humane animal care standards",
  "Ability to attend the orientation and follow-up sessions",
  "Willingness to return one offspring to the community pool",
  "Agreement to Adesco's Goat Banking participation terms",
]

const stats = [
  { val: "45+", label: "Families Supported" },
  { val: "120+", label: "Goats Placed" },
  { val: "3", label: "Offspring Cycles Completed" },
  { val: "100%", label: "Community-Funded" },
]

export default function GoatBankingPage() {
  return (
    <div>
      {/* ── Breadcrumb ── */}
      <div
        className="breadcrumb-area text-center shadow dark bg-fixed text-light"
        style={{ backgroundImage: "url(/assets/img/banner/banner2.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>Goat Banking</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li><a href="/"><i className="fas fa-home"></i> Home</a></li>
                  <li><a href="/brands">Brands &amp; Products</a></li>
                  <li className="active">Goat Banking</li>
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
                <img src="/assets/img/initiatives/goat-banking.jpg" alt="Goat Banking Program" />
                <div className="sub-item">
                  <img src="/assets/img/about.webp" alt="Adesco Goat Herd" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 about-style-one">
              <div className="row align-center">
                <div className="col-xl-7 col-lg-12">
                  <h5 className="sub-title">Community Initiative</h5>
                  <h2 className="heading">Goat Banking <br /> Program</h2>
                  <p>
                    The Goat Banking Program is Adesco Western Ranch's flagship community wealth
                    initiative. Inspired by traditional African livestock-sharing models, it provides
                    goats to community members who raise them for milk, meat, and income — then
                    return one offspring to pass the opportunity forward.
                  </p>
                  <p>
                    This model builds food security, generates income, and creates an
                    intergenerational cycle of agricultural empowerment rooted in cultural heritage
                    and mutual aid.
                  </p>
                  <ul className="check-solid-list mt-20">
                    <li>No upfront cost for approved participants</li>
                    <li>Ongoing veterinary and care support from Adesco</li>
                    <li>Culturally grounded, community-led model</li>
                  </ul>
                </div>
                <div className="col-xl-5 col-lg-12 pl-50 pl-md-15 pl-xs-15">
                  <div className="top-product-item">
                    <img src="/assets/img/icon/1.svg" alt="Icon" />
                    <h5><a href="#">Food Security</a></h5>
                    <p>Direct access to fresh milk and meat reduces household food insecurity.</p>
                  </div>
                  <div className="top-product-item">
                    <img src="/assets/img/icon/2.svg" alt="Icon" />
                    <h5><a href="#">Wealth Building</a></h5>
                    <p>Participants generate income and build agricultural skills for the long term.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="fun-facts-area default-padding" style={{ background: "#1a3a22" }}>
        <div className="container">
          <div className="row text-center">
            {stats.map((s) => (
              <div className="col-lg-3 col-md-6" key={s.label}>
                <div className="fun-fact" style={{ padding: "20px 0" }}>
                  <div className="counter">
                    <div style={{ color: "#82c45a", fontSize: "48px", fontWeight: 800 }}>
                      {s.val}
                    </div>
                  </div>
                  <span className="medium" style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px" }}>
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── How It Works ── */}
      <div className="process-area default-padding bg-gray" style={{ backgroundImage: "url(/assets/img/shape/36.png)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">The Process</h5>
                <h2 className="title">How Goat Banking Works</h2>
                <div className="devider"></div>
                <p>A simple, four-step cycle that turns one goat into lasting community wealth.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {howItWorks.map((step, i) => (
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
                  {/* Step number watermark */}
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "18px",
                      fontSize: "64px",
                      fontWeight: 900,
                      color: "rgba(74,124,89,0.06)",
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
                      background: "linear-gradient(135deg, #2e7d32, #66bb6a)",
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
                      background: "#e8f5e9",
                      color: "#2e7d32",
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

                  {/* Connector arrow (not on last) */}
                  {i < howItWorks.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        right: "-18px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 2,
                        display: "none",
                      }}
                      className="process-arrow-hidden"
                    >
                      <i className="fas fa-chevron-right" style={{ color: "#2e7d32", fontSize: "20px" }}></i>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Benefits ── */}
      <div className="services-style-one-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">Program Benefits</h5>
                <h2 className="title">What Participants Gain</h2>
                <div className="devider"></div>
                <p>From nutritious food to income and lifelong skills, the Goat Banking Program delivers tangible value to every participant and their family.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {benefits.map((b) => (
              <div className="col-lg-4 col-md-6 mb-30" key={b.title}>
                <div
                  style={{
                    background: "#f8fdf8",
                    border: "1px solid #e0f0e0",
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
                      background: "linear-gradient(135deg, #1b5e20, #43a047)",
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
                alt="Goat Banking Participant"
                style={{ borderRadius: "14px", width: "100%", objectFit: "cover", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
              />
            </div>
            <div className="col-lg-6 offset-lg-1">
              <h5 className="sub-title">Who Can Apply</h5>
              <h2 className="title mb-20">Eligibility Criteria</h2>
              <p style={{ marginBottom: "28px", color: "#555" }}>
                The Goat Banking Program is open to Alberta residents who are committed to
                responsible animal care and community values. Here is what we look for in
                a participant:
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
                    border: "2px solid #2e7d32",
                    color: "#2e7d32",
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

      {/* ── Cultural Roots ── */}
      <div
        className="default-padding text-light text-center"
        style={{
          background: "linear-gradient(135deg, #0f2d1f 0%, #1a4a2e 50%, #153d25 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(73,167,96,0.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  background: "rgba(130,196,90,0.15)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  border: "2px solid rgba(130,196,90,0.3)",
                }}
              >
                <img
                  src="/assets/img/healthy/goat.png"
                  alt="Goat"
                  style={{ width: "42px", height: "42px", objectFit: "contain", filter: "brightness(10)" }}
                />
              </div>
              <h5 className="sub-title" style={{ color: "#82c45a" }}>Our Roots</h5>
              <h2 className="title" style={{ color: "#fff", marginBottom: "20px" }}>
                A Tradition of Shared Prosperity
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "17px", lineHeight: 1.85, marginBottom: "36px" }}>
                Livestock sharing has been central to African agricultural communities for centuries.
                The Goat Banking Program honours this tradition by adapting it to the Canadian
                context, creating a culturally meaningful pathway to food sovereignty and economic
                independence for Black and marginalized farmers in Alberta.
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
              { title: "Cattle Banking", desc: "Dairy cattle program providing fresh milk and beef to community members through shared herd ownership.", href: "/cattle-banking", icon: "/assets/img/healthy/cow.png", color: "#e8f5e9", accent: "#2e7d32" },
              { title: "Chicken Banking", desc: "Free-range poultry initiative offering eggs and chicken meat to families enrolled in the program.", href: "/chicken-banking", icon: "/assets/img/healthy/hen.png", color: "#fff8e1", accent: "#f9a825" },
              { title: "Cultural Seeds", desc: "Heritage seed preservation program reconnecting diaspora communities with ancestral crops and food traditions.", href: "/cultural-seeds", icon: "/assets/img/healthy/veg1.png", color: "#f3e5f5", accent: "#6a1b9a" },
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

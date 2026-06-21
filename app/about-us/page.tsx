import React from 'react'

const values = [
  {
    icon: "fas fa-balance-scale",
    title: "Equity",
    desc: "We challenge the systemic barriers that have historically excluded Black and marginalized communities from land ownership, agricultural capital, and food systems.",
    color: "#e8f5e9",
    accent: "#2e7d32",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Resilience",
    desc: "Rooted in the enduring strength of African agricultural traditions, we build systems that withstand adversity and grow stronger through every challenge.",
    color: "#fce4ec",
    accent: "#c62828",
  },
  {
    icon: "fas fa-leaf",
    title: "Sustainability",
    desc: "Every farming decision is guided by long-term land stewardship — composting, regenerative grazing, cover cropping, and zero synthetic inputs across our operation.",
    color: "#e3f2fd",
    accent: "#1565c0",
  },
  {
    icon: "fas fa-users",
    title: "Community",
    desc: "Our programs exist to serve the community first. From livestock banking to seed libraries, every initiative is designed to multiply wealth and opportunity across families.",
    color: "#fff8e1",
    accent: "#f57f17",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Education",
    desc: "We partner with schools, institutions, and aspiring farmers to share knowledge about sustainable agriculture, food sovereignty, and the socio-political dimensions of food.",
    color: "#f3e5f5",
    accent: "#6a1b9a",
  },
  {
    icon: "fas fa-lightbulb",
    title: "Innovation",
    desc: "We blend time-honoured African farming knowledge with modern regenerative techniques, creating an agricultural model that is both culturally grounded and forward-looking.",
    color: "#e0f2f1",
    accent: "#00695c",
  },
]

const milestones = [
  { year: "2018", title: "Founded", desc: "Adesco Western Ranch established in Tomahawk, Parkland County, Alberta by Timothy Adekola — a young African Canadian farmer with a vision for equitable agriculture." },
  { year: "2019", title: "First Harvest", desc: "First full growing season completed. Initial vegetable plots and small livestock operation launched, establishing the foundation for community-facing programs." },
  { year: "2020", title: "Banking Programs", desc: "Goat Banking and Chicken Banking initiatives launched, placing the first community flocks and herds with enrolled Alberta families." },
  { year: "2021", title: "Cultural Seeds", desc: "The Cultural Seeds program began collecting and trialling African and diaspora heritage seed varieties on Adesco land, establishing the community seed library." },
  { year: "2022", title: "Cattle Banking", desc: "Cattle Banking program expanded the livestock-sharing model to include dairy and beef cattle, serving a growing number of families across the region." },
  { year: "2023", title: "Funded Growth", desc: "Secured funding support from Agriculture and Agri-Food Canada, enabling expanded infrastructure, training programs, and community outreach initiatives." },
  { year: "2024", title: "Webinar Series", desc: "Launched a four-part webinar series on mental wellness for Black farmers, addressing the intersection of mental health, land, and identity in the agricultural community." },
  { year: "2025", title: "Continued Impact", desc: "Over 150 families supported across all programs. Ongoing expansion of the seed library, livestock banking, and regenerative vegetable production across the ranch." },
]

const team = [
  {
    name: "Timothy Adekola",
    role: "President & Founder",
    desc: "A dynamic, resilient African Canadian farmer who established Adesco Western Ranch in 2018 as an act of resistance and community building. Timothy leads the ranch's strategic vision and community programs.",
    img: "/assets/img/president.jpg",
    fallback: "https://placehold.co/300x300/4a7c59/ffffff?text=TA",
  },
  {
    name: "Ranch Operations",
    role: "Farm Management Team",
    desc: "Our dedicated operations team manages daily livestock care, field cultivation, seed saving, and community distribution — ensuring every program runs with integrity and care.",
    img: "/assets/img/farmer.webp",
    fallback: "https://placehold.co/300x300/4a7c59/ffffff?text=Ops",
  },
  {
    name: "Community Programs",
    role: "Outreach & Education",
    desc: "Our community programs team coordinates banking program enrollments, seed library distribution, youth training sessions, and partnerships with local schools and institutions.",
    img: "/assets/img/gallery/youth.webp",
    fallback: "https://placehold.co/300x300/4a7c59/ffffff?text=CP",
  },
]

const initiatives = [
  { title: "Goat Banking",         href: "/goat-banking",         icon: "/assets/img/healthy/goat.png", color: "#fce4ec", accent: "#c62828", desc: "Community goat ownership providing milk, meat, and income." },
  { title: "Cattle Banking",       href: "/cattle-banking",       icon: "/assets/img/healthy/cow.png",  color: "#e3f2fd", accent: "#1565c0", desc: "Shared dairy and beef cattle for enrolled Alberta families." },
  { title: "Chicken Banking",      href: "/chicken-banking",      icon: "/assets/img/healthy/hen.png",  color: "#fff8e1", accent: "#f57f17", desc: "Free-range poultry flock program for eggs and meat." },
  { title: "Cultural Seeds",       href: "/cultural-seeds",       icon: "/assets/img/healthy/veg1.png", color: "#f3e5f5", accent: "#6a1b9a", desc: "Heritage seed preservation and community seed library." },
  { title: "Seasonal Vegetables",  href: "/seasonal-vegetables",  icon: "/assets/img/healthy/veg.png",  color: "#e8f5e9", accent: "#2e7d32", desc: "Pesticide-free seasonal produce boxes and market gardens." },
]

const stats = [
  { val: "2018",  label: "Year Founded" },
  { val: "150+",  label: "Families Supported" },
  { val: "5",     label: "Community Programs" },
  { val: "6+",    label: "Years of Impact" },
]

const faqs = [
  {
    id: "one",
    q: "What makes Adesco Western Ranch unique?",
    a: "Adesco is a Black-led agricultural enterprise founded on the principle that farming can be a vehicle for social justice. We combine traditional African livestock-sharing models with modern regenerative practices, serving our community through five distinct programs that build food security, income, and cultural connection.",
  },
  {
    id: "two",
    q: "Where is the ranch located?",
    a: "Adesco Western Ranch is located at 51217 Range Road 63 in Tomahawk, Parkland County, Alberta — along Highway 759, northeast of Drayton Valley. We welcome farm visits, educational tours, and volunteer days year-round.",
  },
  {
    id: "three",
    q: "How can I get involved or support Adesco?",
    a: "You can support our mission by enrolling in a Banking program, subscribing to our seasonal veggie boxes, joining the cultural seeds library, attending a webinar, volunteering on the ranch, or donating to Visible Futures Empowerment Society Inc. (VFES). Reach out through our contact page to learn more.",
  },
  {
    id: "four",
    q: "Do you offer farm tours or educational visits?",
    a: "Yes. We actively welcome schools, community groups, and individuals who want to learn about sustainable agriculture, food sovereignty, and the work we are doing. Educational tours can be arranged by contacting us directly.",
  },
]

const testimonials = [
  {
    quote: "Adesco Western Ranch's commitment to community education transformed how I understand regenerative agriculture. Their hands-on approach and dedication to social justice in farming is truly inspiring.",
    name: "Matthew J. Wyman",
    role: "Senior Consultant",
    initials: "MJW",
  },
  {
    quote: "Supporting a Black-led farm that challenges systemic barriers is exactly what we need in Canadian agriculture. The team's passion for sustainability and equity is unmatched.",
    name: "Anthom Bu Spar",
    role: "Community Partner",
    initials: "ABS",
  },
  {
    quote: "The educational programs at Adesco are game-changing. They are building a model for inclusive, sustainable agriculture that can inspire generations to come.",
    name: "Metho K. Partho",
    role: "Agricultural Educator",
    initials: "MKP",
  },
]

export default function AboutUsPage() {
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
              <h1>About Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li><a href="/"><i className="fas fa-home"></i> Home</a></li>
                  <li className="active">About Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* ── Our Story ── */}
      <div className="about-style-one-area default-padding">
        <div className="shape-right-top">
          <img src="/assets/img/shape/leaf.png" alt="Shape" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5 col-lg-6 about-style-one pr-50 pr-md-15 pr-xs-15">
              <div className="thumb">
                <img src="/assets/img/about2.webp" alt="Adesco Western Ranch" />
                <div className="sub-item">
                  <img src="/assets/img/about.webp" alt="Black Farmer in Canada" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 about-style-one">
              <div className="row align-center">
                <div className="col-xl-7 col-lg-12">
                  <h5 className="sub-title">Our Story</h5>
                  <h2 className="heading">Adesco Western Ranch <br /> Established in 2018</h2>
                  <p>
                    Established in 2018 in the close-knit hamlet of Tomahawk, Parkland County,
                    Alberta, Adesco Western Ranch was founded by Timothy Adekola — a dynamic,
                    resilient young African Canadian farmer. Located along Highway 759, northeast
                    of Drayton Valley, our farm sits on the land we tend, protect, and transform.
                  </p>
                  <p>
                    Our mission transcends traditional farming. We serve as a form of resistance
                    against historical marginalization, reclaiming narratives and spaces
                    traditionally inaccessible to Black and marginalized communities in Canada.
                  </p>
                  <ul className="check-solid-list mt-20">
                    <li>Regenerative agricultural practices and land stewardship</li>
                    <li>Community education and youth training programs</li>
                    <li>Challenging systemic barriers in Canadian agriculture</li>
                  </ul>
                </div>
                <div className="col-xl-5 col-lg-12 pl-50 pl-md-15 pl-xs-15">
                  <div className="top-product-item">
                    <img src="/assets/img/icon/1.svg" alt="Icon" />
                    <h5><a href="#">Food Sovereignty</a></h5>
                    <p>Restoring community control over food production, distribution, and cultural food traditions.</p>
                  </div>
                  <div className="top-product-item">
                    <img src="/assets/img/icon/2.svg" alt="Icon" />
                    <h5><a href="#">Community Wealth</a></h5>
                    <p>Building intergenerational agricultural equity through shared livestock and land programs.</p>
                  </div>
                </div>
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
                <div style={{ padding: "20px 0" }}>
                  <div style={{ color: "#82c45a", fontSize: "48px", fontWeight: 800, lineHeight: 1.1 }}>
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

      {/* ── Mission & Vision ── */}
      <div className="default-padding" style={{ background: "#f0f7f2" }}>
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-6 mb-xs-50">
              <img
                src="/assets/img/journey.webp"
                alt="Our Journey"
                style={{ borderRadius: "14px", width: "100%", objectFit: "cover", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
              />
            </div>
            <div className="col-lg-5 offset-lg-1">
              <h5 className="sub-title">Why We Exist</h5>
              <h2 className="title mb-20">Mission &amp; Vision</h2>
              <div
                style={{
                  borderLeft: "4px solid #2e7d32",
                  paddingLeft: "20px",
                  marginBottom: "28px",
                }}
              >
                <h5 style={{ color: "#1a3a22", fontWeight: 800, marginBottom: "8px" }}>Our Mission</h5>
                <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
                  To build an equitable, resilient, and sustainable agricultural community in
                  Canada — one that centres the experiences and leadership of Black and
                  marginalized farmers, and demonstrates that farming can be a powerful act
                  of resistance, healing, and community wealth-building.
                </p>
              </div>
              <div
                style={{
                  borderLeft: "4px solid #f57f17",
                  paddingLeft: "20px",
                  marginBottom: "28px",
                }}
              >
                <h5 style={{ color: "#1a3a22", fontWeight: 800, marginBottom: "8px" }}>Our Vision</h5>
                <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
                  A Canada where its food landscape reflects the full diversity of its people —
                  where Black farmers are celebrated, resourced, and empowered to lead the
                  transition to a just and sustainable food system for all.
                </p>
              </div>
              <a className="btn btn-theme btn-md radius animation" href="/contact-us">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Core Values ── */}
      <div className="default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">What Guides Us</h5>
                <h2 className="title">Our Core Values</h2>
                <div className="devider"></div>
                <p>Six principles that shape every decision we make — from how we tend the land to how we serve our community.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {values.map((v) => (
              <div className="col-lg-4 col-md-6 mb-30" key={v.title}>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #f0f0f0",
                    borderRadius: "12px",
                    padding: "32px 28px",
                    height: "100%",
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      background: v.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i className={v.icon} style={{ color: v.accent, fontSize: "20px" }}></i>
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "8px" }}>{v.title}</h5>
                    <p style={{ color: "#666", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Our Journey / Timeline ── */}
      <div className="default-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">Our History</h5>
                <h2 className="title">The Adesco Journey</h2>
                <div className="devider"></div>
                <p>From a single farm in Tomahawk to a multi-program community agricultural enterprise — six years of growth, resilience, and impact.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div style={{ position: "relative" }}>
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    bottom: 0,
                    width: "2px",
                    background: "linear-gradient(to bottom, #2e7d32, #82c45a)",
                    transform: "translateX(-50%)",
                  }}
                  className="timeline-line-hidden"
                />
                <style>{`
                  @media (max-width: 768px) { .timeline-line-hidden { display: none; } }
                `}</style>
                {milestones.map((m, i) => (
                  <div
                    key={m.year}
                    style={{
                      display: "flex",
                      flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                      gap: "40px",
                      marginBottom: "40px",
                      alignItems: "center",
                    }}
                    className="timeline-row"
                  >
                    <style>{`
                      @media (max-width: 768px) {
                        .timeline-row { flex-direction: column !important; gap: 16px !important; }
                      }
                    `}</style>
                    {/* Card */}
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "12px",
                          padding: "24px 28px",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                          borderLeft: "4px solid #2e7d32",
                        }}
                      >
                        <h5 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "6px" }}>{m.title}</h5>
                        <p style={{ color: "#666", lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
                      </div>
                    </div>
                    {/* Year bubble */}
                    <div
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #1b5e20, #43a047)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 4px 18px rgba(46,125,50,0.35)",
                        zIndex: 1,
                      }}
                    >
                      <span style={{ color: "#fff", fontWeight: 800, fontSize: "13px", textAlign: "center", lineHeight: 1.2 }}>
                        {m.year}
                      </span>
                    </div>
                    {/* Empty spacer for alternating layout */}
                    <div style={{ flex: 1 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── President Quote ── */}
      <div
        className="default-padding text-light"
        style={{
          background: "linear-gradient(160deg, #05111a 0%, #092232 35%, #0d3347 65%, #071828 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "4px",
          background: "linear-gradient(90deg, transparent 0%, #c9a84c 30%, #f0d080 60%, #c9a84c 80%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(ellipse at 10% 50%, rgba(240,192,64,0.08) 0%, transparent 55%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "60px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "20px",
              padding: "60px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontSize: "240px",
                color: "rgba(201,168,76,0.07)",
                fontFamily: "Georgia, serif",
                lineHeight: 1,
                position: "absolute",
                top: "-30px",
                left: "20px",
                pointerEvents: "none",
              }}
            >
              &#8220;
            </div>
            <div style={{ flexShrink: 0, position: "relative" }}>
              <img
                src="/assets/img/president.jpg"
                alt="Timothy Adekola, President"
                style={{
                  width: "220px",
                  height: "220px",
                  borderRadius: "12px",
                  objectFit: "cover",
                  border: "4px solid rgba(201,168,76,0.45)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
                  display: "block",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: "8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "linear-gradient(135deg, #c9a84c, #f0d080)",
                  color: "#0a1a08",
                  fontSize: "10px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "4px 14px",
                  borderRadius: "20px",
                  whiteSpace: "nowrap",
                }}
              >
                President
              </span>
            </div>
            <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                  marginBottom: "20px",
                }}
              >
                <span style={{ display: "inline-block", width: "34px", height: "2px", background: "linear-gradient(90deg, #c9a84c, #f0d080)", borderRadius: "2px" }} />
                A Word from Our Founder
              </span>
              <blockquote
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.90)",
                  margin: "0 0 24px",
                  fontStyle: "italic",
                  borderLeft: "3px solid rgba(201,168,76,0.5)",
                  paddingLeft: "20px",
                }}
              >
                "At Adesco Western Ranch, our mission goes beyond farming — we are building a
                legacy of resilience, equity, and sustainability. Every acre we tend, every
                community we serve, is a testament to the belief that agriculture can be a
                powerful force for social justice and environmental stewardship."
              </blockquote>
              <p style={{ color: "#fff", fontWeight: 800, fontSize: "17px", margin: "0 0 4px" }}>Timothy Adekola</p>
              <p style={{ color: "rgba(255,255,255,0.50)", fontSize: "13px", margin: 0 }}>President &amp; Founder, Adesco Western Ranch Ltd.</p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .president-flex { flex-direction: column !important; padding: 36px 24px !important; gap: 30px !important; text-align: center; }
            .president-flex blockquote { border-left: none !important; padding-left: 0 !important; border-top: 3px solid rgba(201,168,76,0.5); padding-top: 16px; }
          }
        `}</style>
      </div>

      {/* ── Meet the Team ── */}
      <div className="farmer-area default-padding bottom-less bg-gray" style={{ backgroundImage: "url(/assets/img/shape/36.png)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">The People Behind the Ranch</h5>
                <h2 className="title">Meet Our Team</h2>
                <div className="devider"></div>
                <p>From the founder to our operations and community teams, every person at Adesco is committed to the mission of equitable, sustainable agriculture.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                {team.map((member) => (
                  <div className="col-lg-4 farmer-stye-one" key={member.name}>
                    <div className="farmer-style-one-item">
                      <div className="thumb">
                        <img src={member.img} alt={member.name} />  
                      </div>
                      <div className="info">
                        <span>{member.role}</span>
                        <h4><a href="#">{member.name}</a></h4>
                        <p style={{ fontSize: "13px", color: "#777", marginTop: "8px", lineHeight: 1.6 }}>{member.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Our Initiatives ── */}
      <div className="default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">What We Do</h5>
                <h2 className="title">Our Programs &amp; Initiatives</h2>
                <div className="devider"></div>
                <p>Five community programs, each designed to build food security, income, and cultural connection for Black and marginalized families across Alberta.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {initiatives.map((item) => (
              <div className="col-lg-4 col-md-6 mb-30" key={item.title}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "28px 24px",
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
                      marginBottom: "16px",
                    }}
                  >
                    <img src={item.icon} alt={item.title} style={{ width: "36px", height: "36px", objectFit: "contain" }} />
                  </div>
                  <h4 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "8px" }}>{item.title}</h4>
                  <p style={{ color: "#666", lineHeight: 1.7, flex: 1, marginBottom: "16px" }}>{item.desc}</p>
                  <a
                    href={item.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "7px",
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

      {/* ── FAQ ── */}
      <div className="choose-us-style-one-area overflow-hidden default-padding" style={{ background: "#f0f7f2" }}>
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-6 choose-us-style-one mb-xs-50">
              <div className="thumb">
                <img src="/assets/img/about2.webp" alt="Adesco Ranch" />
                <div className="shape">
                  <img className="wow fadeInDown" src="/assets/img/shape/22.png" alt="Shape" />
                </div>
                <div className="product-produce">
                  <div className="icon"><i className="flaticon-farmer"></i></div>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer" data-to="6" data-speed="2000">6</div>
                      <div className="operator">Years</div>
                    </div>
                    <span className="medium">Building Sustainable Futures</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 choose-us-style-one">
              <h5 className="sub-title">Common Questions</h5>
              <h2 className="title mb-30">Frequently Asked Questions</h2>
              <div className="accordion accordion-regular" id="aboutFaq">
                {faqs.map((faq, i) => (
                  <div className="accordion-item" key={faq.id}>
                    <h2 className="accordion-header" id={`heading-${faq.id}`}>
                      <button
                        className={`accordion-button${i === 0 ? "" : " collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${faq.id}`}
                        aria-expanded={i === 0 ? "true" : "false"}
                        aria-controls={`collapse-${faq.id}`}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div
                      id={`collapse-${faq.id}`}
                      className={`accordion-collapse collapse${i === 0 ? " show" : ""}`}
                      aria-labelledby={`heading-${faq.id}`}
                      data-bs-parent="#aboutFaq"
                    >
                      <div className="accordion-body">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div
        className="testimonials-area default-padding"
        style={{
          background: "linear-gradient(135deg, #0f2d1f 0%, #1a4a2e 40%, #1f5a35 70%, #153d25 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(73,167,96,0.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <style>{`
          .testimonials-area .testimonial-style-two p { color: rgba(255,255,255,0.92) !important; font-size: 18px; }
          .testimonials-area .testimonial-style-two h4 { color: #fff !important; }
          .testimonials-area .testimonial-style-two span { color: #82c45a !important; }
          .testimonials-area .testimonial-info h4 { color: #fff !important; }
        `}</style>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <h5 className="sub-title" style={{ color: "#82c45a" }}>Testimonials</h5>
              <h2 className="title" style={{ color: "#fff" }}>What People Say</h2>
              <div className="devider"></div>
            </div>
          </div>
          <div className="row">
            {testimonials.map((t) => (
              <div className="col-lg-4 col-md-6 mb-30" key={t.name}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: "14px",
                    padding: "32px 28px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <i className="fas fa-quote-left" style={{ color: "#82c45a", fontSize: "28px", marginBottom: "16px" }}></i>
                  <p style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.8, flex: 1, fontStyle: "italic", marginBottom: "24px" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #2e7d32, #66bb6a)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: "13px",
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p style={{ color: "#fff", fontWeight: 700, margin: 0 }}>{t.name}</p>
                      <p style={{ color: "#82c45a", fontSize: "13px", margin: 0 }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Partners ── */}
      <div className="default-padding bg-gray text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 mb-50">
              <div className="site-heading">
                <h5 className="sub-title">We Are Grateful For</h5>
                <h2 className="title">Our Funding Partners</h2>
                <div className="devider"></div>
                <p>Adesco Western Ranch is supported by Government of Canada programs that recognise the vital role of diverse, community-led agriculture in Canada's food future.</p>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
            <a
              href="https://www.canada.ca"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center",
                background: "#fff", border: "1px solid #ddd",
                borderRadius: "10px", padding: "18px 32px",
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
                display: "inline-flex", alignItems: "center",
                background: "#fff", border: "1px solid #ddd",
                borderRadius: "10px", padding: "18px 32px",
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

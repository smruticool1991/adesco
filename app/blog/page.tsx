import React from 'react'

const posts = [
  {
    id: 1,
    slug: "goat-banking-program-changing-lives-rural-alberta",
    category: "Goat Banking",
    categoryColor: "#e8f5e9",
    categoryAccent: "#2e7d32",
    date: "June 10, 2026",
    title: "How the Goat Banking Program is Changing Lives in Rural Alberta",
    excerpt:
      "For families in Parkland County, owning livestock was once out of reach. Adesco's Goat Banking Program is rewriting that story — one goat, one family, one cycle at a time.",
    author: "Timothy Adekola",
    authorRole: "President & Founder",
    authorImg: "/assets/img/president.jpg",
    img: "/assets/img/initiatives/goat-banking.jpg",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "preserving-heritage-seeds-why-every-variety-matters",
    category: "Cultural Seeds",
    categoryColor: "#f3e5f5",
    categoryAccent: "#6a1b9a",
    date: "May 28, 2026",
    title: "Preserving Heritage Seeds: Why Every Variety Matters",
    excerpt:
      "Behind each seed packet in the Adesco library is a story spanning continents and centuries. We explore why saving these varieties is an act of cultural resistance.",
    author: "Ranch Operations",
    authorRole: "Farm Management Team",
    authorImg: "/assets/img/farmer.webp",
    img: "/assets/img/about2.webp",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    slug: "what-regenerative-agriculture-means-on-an-alberta-ranch",
    category: "Regenerative Farming",
    categoryColor: "#e3f2fd",
    categoryAccent: "#1565c0",
    date: "May 14, 2026",
    title: "What Regenerative Agriculture Actually Means on an Alberta Ranch",
    excerpt:
      "Cover cropping, rotational grazing, composting — these are not buzzwords at Adesco. They are the daily practices that keep our land healthy and our community fed.",
    author: "Timothy Adekola",
    authorRole: "President & Founder",
    authorImg: "/assets/img/president.jpg",
    img: "/assets/img/journey.webp",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 4,
    slug: "backyard-flock-to-community-asset-chicken-banking-story",
    category: "Chicken Banking",
    categoryColor: "#fff8e1",
    categoryAccent: "#f57f17",
    date: "April 30, 2026",
    title: "From Backyard Flock to Community Asset: The Chicken Banking Story",
    excerpt:
      "55+ families across Alberta are now raising free-range chickens through Adesco's banking model. Here is how the program works and why it is growing fast.",
    author: "Community Programs",
    authorRole: "Outreach & Education",
    authorImg: "/assets/img/gallery/youth.webp",
    img: "/assets/img/about.webp",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "black-farmers-fight-for-food-sovereignty-in-canada",
    category: "Food Sovereignty",
    categoryColor: "#fce4ec",
    categoryAccent: "#c62828",
    date: "April 15, 2026",
    title: "Black Farmers and the Fight for Food Sovereignty in Canada",
    excerpt:
      "Despite representing a growing portion of Alberta's farming community, Black farmers face systemic barriers to land and capital. We look at the landscape and what Adesco is doing to change it.",
    author: "Timothy Adekola",
    authorRole: "President & Founder",
    authorImg: "/assets/img/president.jpg",
    img: "/assets/img/banner/banner2.webp",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 6,
    slug: "cattle-banking-building-equity-through-shared-herd-ownership",
    category: "Cattle Banking",
    categoryColor: "#e3f2fd",
    categoryAccent: "#1565c0",
    date: "March 22, 2026",
    title: "Cattle Banking: Building Equity Through Shared Herd Ownership",
    excerpt:
      "The Cattle Banking Program places grass-fed cattle with community families who produce milk, beef, and breeding stock — then pass one calf forward to the next family.",
    author: "Ranch Operations",
    authorRole: "Farm Management Team",
    authorImg: "/assets/img/farmer.webp",
    img: "/assets/img/initiatives/cattle-banking.jpg",
    readTime: "5 min read",
    featured: false,
  },
]

const categories = [
  { label: "All Posts", count: 6, active: true },
  { label: "Goat Banking", count: 1 },
  { label: "Chicken Banking", count: 1 },
  { label: "Cattle Banking", count: 1 },
  { label: "Cultural Seeds", count: 1 },
  { label: "Regenerative Farming", count: 1 },
  { label: "Food Sovereignty", count: 1 },
]

const recentPosts = posts.slice(0, 4)

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <div>
      {/* ── Breadcrumb ── */}
      <div
        className="breadcrumb-area text-center shadow dark bg-fixed text-light"
        style={{ backgroundImage: "url(/assets/img/banner/banner13.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>News &amp; Blog</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li><a href="/"><i className="fas fa-home"></i> Home</a></li>
                  <li className="active">Blog</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* ── Featured Post ── */}
      <div className="default-padding" style={{ background: "#f8fdf8" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-50">
              <div className="site-heading">
                <h5 className="sub-title">Latest Story</h5>
                <h2 className="title">Featured Post</h2>
                <div className="devider"></div>
              </div>
            </div>
          </div>
          <div className="row align-center">
            {/* Image */}
            <div className="col-lg-6 mb-xs-40">
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 12px 48px rgba(0,0,0,0.14)",
                  position: "relative",
                }}
              >
                <img
                  src={featured.img}
                  alt={featured.title}
                  style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    background: featured.categoryAccent,
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "5px 14px",
                    borderRadius: "20px",
                  }}
                >
                  {featured.category}
                </span>
              </div>
            </div>
            {/* Content */}
            <div className="col-lg-6 pl-50 pl-md-15 pl-xs-15">
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px", flexWrap: "wrap" }}>
                <span style={{ color: "#888", fontSize: "13px" }}>
                  <i className="fas fa-calendar-alt" style={{ marginRight: "6px", color: "#2e7d32" }}></i>
                  {featured.date}
                </span>
                <span style={{ color: "#888", fontSize: "13px" }}>
                  <i className="fas fa-clock" style={{ marginRight: "6px", color: "#2e7d32" }}></i>
                  {featured.readTime}
                </span>
              </div>
              <h2 style={{ fontWeight: 800, color: "#1a2e1a", lineHeight: 1.35, marginBottom: "18px", fontSize: "28px" }}>
                {featured.title}
              </h2>
              <p style={{ color: "#666", lineHeight: 1.85, marginBottom: "28px", fontSize: "16px" }}>
                {featured.excerpt}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
                <img
                  src={featured.authorImg}
                  alt={featured.author}
                  style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover", border: "2px solid #e8f5e9" }}
                />
                <div>
                  <p style={{ margin: 0, fontWeight: 700, color: "#1a2e1a", fontSize: "14px" }}>{featured.author}</p>
                  <p style={{ margin: 0, color: "#888", fontSize: "12px" }}>{featured.authorRole}</p>
                </div>
              </div>
              <a
                href={`/blog/${featured.slug}`}
                className="btn btn-theme btn-md radius animation"
              >
                Read Full Post <i className="fas fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── All Posts + Sidebar ── */}
      <div className="default-padding">
        <div className="container">
          <div className="row">

            {/* ── Posts Grid ── */}
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12 mb-40">
                  <div className="site-heading">
                    <h5 className="sub-title">From the Ranch</h5>
                    <h2 className="title">All Posts</h2>
                    <div className="devider"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                {rest.map((post) => (
                  <div className="col-md-6 mb-40" key={post.id}>
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "14px",
                        overflow: "hidden",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid #f0f0f0",
                      }}
                    >
                      {/* Card image */}
                      <div style={{ position: "relative", overflow: "hidden" }}>
                        <img
                          src={post.img}
                          alt={post.title}
                          style={{ width: "100%", height: "200px", objectFit: "cover", display: "block", transition: "transform 0.3s ease" }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            top: "14px",
                            left: "14px",
                            background: post.categoryAccent,
                            color: "#fff",
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            padding: "4px 12px",
                            borderRadius: "20px",
                          }}
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Card body */}
                      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", gap: "14px", marginBottom: "14px", flexWrap: "wrap" }}>
                          <span style={{ color: "#aaa", fontSize: "12px" }}>
                            <i className="fas fa-calendar-alt" style={{ marginRight: "5px", color: "#2e7d32" }}></i>
                            {post.date}
                          </span>
                          <span style={{ color: "#aaa", fontSize: "12px" }}>
                            <i className="fas fa-clock" style={{ marginRight: "5px", color: "#2e7d32" }}></i>
                            {post.readTime}
                          </span>
                        </div>

                        <h4
                          style={{
                            fontWeight: 800,
                            color: "#1a2e1a",
                            lineHeight: 1.4,
                            marginBottom: "12px",
                            fontSize: "17px",
                            flex: 1,
                          }}
                        >
                          {post.title}
                        </h4>
                        <p style={{ color: "#777", lineHeight: 1.75, fontSize: "14px", marginBottom: "20px" }}>
                          {post.excerpt}
                        </p>

                        {/* Author + CTA */}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", flexWrap: "wrap", gap: "12px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <img
                              src={post.authorImg}
                              alt={post.author}
                              style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover", border: "2px solid #e8f5e9" }}
                            />
                            <span style={{ fontSize: "13px", fontWeight: 600, color: "#555" }}>{post.author}</span>
                          </div>
                          <a
                            href={`/blog/${post.slug}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                              color: "#2e7d32",
                              fontWeight: 700,
                              fontSize: "13px",
                              textDecoration: "none",
                            }}
                          >
                            Read More <i className="fas fa-arrow-right" style={{ fontSize: "11px" }}></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "8px" }}>
                {[1, 2, 3].map((n) => (
                  <a
                    key={n}
                    href="#"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "14px",
                      textDecoration: "none",
                      background: n === 1 ? "#2e7d32" : "#f5f5f5",
                      color: n === 1 ? "#fff" : "#555",
                      border: `1px solid ${n === 1 ? "#2e7d32" : "#e0e0e0"}`,
                    }}
                  >
                    {n}
                  </a>
                ))}
                <a
                  href="#"
                  style={{
                    padding: "0 16px",
                    height: "40px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    fontSize: "13px",
                    textDecoration: "none",
                    background: "#f5f5f5",
                    color: "#555",
                    border: "1px solid #e0e0e0",
                    gap: "6px",
                  }}
                >
                  Next <i className="fas fa-chevron-right" style={{ fontSize: "11px" }}></i>
                </a>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="col-lg-4 pl-50 pl-md-15 pl-xs-15">

              {/* Search */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                  marginBottom: "30px",
                  border: "1px solid #f0f0f0",
                }}
              >
                <h5 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "16px" }}>Search</h5>
                <div style={{ display: "flex", gap: "0" }}>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    style={{
                      flex: 1,
                      padding: "10px 14px",
                      border: "1px solid #e0e0e0",
                      borderRight: "none",
                      borderRadius: "8px 0 0 8px",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                  <button
                    style={{
                      background: "#2e7d32",
                      color: "#fff",
                      border: "none",
                      padding: "10px 16px",
                      borderRadius: "0 8px 8px 0",
                      cursor: "pointer",
                    }}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                  marginBottom: "30px",
                  border: "1px solid #f0f0f0",
                }}
              >
                <h5 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "20px" }}>Categories</h5>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {categories.map((cat) => (
                    <li
                      key={cat.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 0",
                        borderBottom: "1px solid #f5f5f5",
                      }}
                    >
                      <a
                        href="#"
                        style={{
                          color: cat.active ? "#2e7d32" : "#555",
                          fontWeight: cat.active ? 700 : 500,
                          textDecoration: "none",
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <i
                          className="fas fa-chevron-right"
                          style={{ fontSize: "10px", color: "#2e7d32" }}
                        ></i>
                        {cat.label}
                      </a>
                      <span
                        style={{
                          background: "#e8f5e9",
                          color: "#2e7d32",
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "2px 10px",
                          borderRadius: "20px",
                        }}
                      >
                        {cat.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                  marginBottom: "30px",
                  border: "1px solid #f0f0f0",
                }}
              >
                <h5 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "20px" }}>Recent Posts</h5>
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {recentPosts.map((post) => (
                    <a
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      style={{
                        display: "flex",
                        gap: "14px",
                        alignItems: "flex-start",
                        textDecoration: "none",
                      }}
                    >
                      <img
                        src={post.img}
                        alt={post.title}
                        style={{
                          width: "62px",
                          height: "62px",
                          borderRadius: "8px",
                          objectFit: "cover",
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <p
                          style={{
                            margin: "0 0 4px",
                            fontWeight: 700,
                            color: "#1a2e1a",
                            fontSize: "13px",
                            lineHeight: 1.4,
                          }}
                        >
                          {post.title}
                        </p>
                        <span style={{ color: "#aaa", fontSize: "12px" }}>
                          <i className="fas fa-calendar-alt" style={{ marginRight: "5px" }}></i>
                          {post.date}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div
                style={{
                  background: "linear-gradient(135deg, #1a3a22, #2e7d32)",
                  borderRadius: "14px",
                  padding: "32px 28px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <i className="fas fa-envelope" style={{ color: "#fff", fontSize: "22px" }}></i>
                </div>
                <h5 style={{ color: "#fff", fontWeight: 800, marginBottom: "10px" }}>Stay Updated</h5>
                <p style={{ color: "rgba(255,255,255,0.80)", fontSize: "13px", lineHeight: 1.7, marginBottom: "20px" }}>
                  Get the latest stories from the ranch delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "14px",
                    marginBottom: "12px",
                    outline: "none",
                  }}
                />
                <button
                  style={{
                    width: "100%",
                    background: "#82c45a",
                    color: "#fff",
                    border: "none",
                    padding: "11px",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "14px",
                    cursor: "pointer",
                    letterSpacing: "0.5px",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

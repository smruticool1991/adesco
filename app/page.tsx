"use client";
import { useState } from "react";

/* ─────────────────────────────────────────────
   NAVBAR  –  Center-logo | Left menu | Right menu
   Pure React, no jQuery dependency
───────────────────────────────────────────── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggle = (name: string) =>
    setOpenDropdown((prev) => (prev === name ? null : name));

  interface MenuItem {
    key: string;
    label: string;
    href: string;
    items: { label: string; href: string }[];
  }

  const leftMenus: MenuItem[] = [
    {
      key: "home",
      label: "Home", href: "/",
      items: [],
    },
    {
      key: "about-us",
      label: "About us", href: "/about-us",
      items: [],
    },
    {
      key: "who-we-are",
      label: "Who We Are", href: "/who-we-are",
      items: [],
    },
  ];

  const rightMenus: MenuItem[] = [
    {
      key: "brands-products",
      label: "Brands & Products", href: "/brands-products",
      items: [],
    },
    {
      key: "blog",
      label: "Blog", href: "/blog",
      items: [],
    },
    {
      key: "contact",
      label: "Contact", href: "/contact",
      items: [
      ],
    },
  ];

  return (
    <>
      <style>{`
        .rn-navbar {
          position: sticky;
          top: 0;
          z-index: 999;
          background: #fff;
          box-shadow: 0 2px 20px rgba(0,0,0,.08);
        }
        .rn-container {
          max-width: 1320px;
          width: 100%;
          margin: 0 auto;
          padding: 0 20px;
        }
        .collapse {
          visibility: visible;
        }
        .rn-navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          height: 80px;
        }
        /* ── Left / Right nav groups ── */
        .rn-nav {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 0;
        }
        .rn-nav.right { }
        .rn-nav li { position: relative; }
        .rn-nav li > a {
          display: block;
          padding: 28px 18px;
          font-size: 17px;
          font-weight: 700;
          color: #232323;
          text-transform: capitalize;
          white-space: nowrap;
          transition: color .2s;
          text-decoration: none;
        }
        .rn-nav li > a:hover { color: var(--color-primary, #4a7c59); }
        /* ── Dropdown ── */
        .rn-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 200px;
          background: #fff;
          border: 1px solid #e5e5e5;
          box-shadow: 0 8px 30px rgba(0,0,0,.12);
          border-radius: 6px;
          padding: 8px 0;
          display: none;
          z-index: 1000;
          list-style: none;
          margin: 0;
        }
        .rn-nav li:hover > .rn-dropdown { display: block; }
        .rn-dropdown li a {
          display: block;
          padding: 9px 20px;
          font-size: 14px;
          font-weight: 600;
          color: #444;
          white-space: nowrap;
          text-decoration: none;
          transition: background .15s, color .15s;
        }
        .rn-dropdown li a:hover {
          background: #f5faf6;
          color: var(--color-primary, #4a7c59);
        }
        /* ── Center logo ── */
        .rn-logo {
          flex-shrink: 0;
          padding: 0 30px;
        }
        .rn-logo img { height: 80px; display: block; }
        /* ── Right icons ── */
        .rn-icons {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-left: 20px;
          list-style: none;
          padding: 0;
          margin: 0;
          flex-shrink: 0;
        }
        .rn-icons li > a {
          color: #232323;
          font-size: 18px;
          padding: 4px;
          position: relative;
          display: block;
          text-decoration: none;
          transition: color .2s;
        }
        .rn-icons li > a:hover { color: var(--color-primary, #4a7c59); }
        .rn-icons .badge {
          position: absolute;
          top: -6px;
          right: -8px;
          background: var(--color-primary, #4a7c59);
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        /* cart dropdown */
        .rn-cart-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          width: 300px;
          background: #fff;
          border: 1px solid #e5e5e5;
          box-shadow: 0 8px 30px rgba(0,0,0,.12);
          border-radius: 6px;
          padding: 20px;
          display: none;
          z-index: 1000;
        }
        .rn-icons li:hover > .rn-cart-dropdown { display: block; }
        .rn-cart-item { display: flex; gap: 12px; padding: 12px 0; border-bottom: 1px solid #eee; }
        .rn-cart-item img { width: 55px; height: 55px; object-fit: contain; background: #f8f8f8; padding: 4px; border-radius: 4px; }
        .rn-cart-item h6 { margin: 0 0 4px; font-size: 14px; font-weight: 700; }
        .rn-cart-item p { margin: 0; font-size: 13px; color: #777; }
        .rn-cart-total { padding: 14px 0 0; display: flex; justify-content: space-between; align-items: center; font-weight: 700; font-size: 14px; }
        .rn-cart-btns { display: flex; gap: 8px; margin-top: 12px; }
        .rn-cart-btns a {
          flex: 1;
          text-align: center;
          padding: 9px;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }
        .rn-cart-btns a:first-child { background: var(--color-primary, #4a7c59); color: #fff; }
        .rn-cart-btns a:last-child { background: #eee; color: #333; }
        /* hamburger – mobile only */
        .rn-hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #232323;
          padding: 4px 8px;
        }
        /* ── Mobile drawer ── */
        .rn-mobile-menu {
          display: none;
          background: #fff;
          border-top: 1px solid #eee;
          padding: 10px 20px 20px;
        }
        .rn-mobile-menu.open { display: block; }
        .rn-mobile-menu ul { list-style: none; padding: 0; margin: 0; }
        .rn-mobile-menu > ul > li { border-bottom: 1px solid #f0f0f0; }
        .rn-mobile-menu > ul > li > button {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 13px 0;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          color: #232323;
          display: flex;
          justify-content: space-between;
        }
        .rn-mobile-submenu { display: none; padding: 0 0 8px 16px; }
        .rn-mobile-submenu.open { display: block; }
        .rn-mobile-submenu li a {
          display: block;
          padding: 7px 0;
          font-size: 14px;
          color: #555;
          text-decoration: none;
        }
        @media (max-width: 991px) {
          .rn-nav, .rn-icons { display: none !important; }
          .rn-hamburger { display: block !important; }
          .rn-logo { padding: 0; }
        }
      `}</style>

      <header>
        <nav className="rn-navbar">
          <div className="rn-container">
            <div className="rn-navbar-inner">

            {/* LEFT MENU */}
            <ul className="rn-nav">
              {leftMenus.map((menu) => (
                <li key={menu.key}>
                  <a href={menu.href}>{menu.label}{menu.items.length > 0 && " ▾"}</a>
                  {menu.items.length > 0 && (
                    <ul className="rn-dropdown">
                      {menu.items.map((item) => (
                        <li key={item.href}><a href={item.href}>{item.label}</a></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* CENTER LOGO */}
            <a className="rn-logo" href="/">
              <img src="/assets/img/logo.png" alt="Agrul Logo" />
            </a>

            {/* RIGHT MENU + ICONS */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }}>
              <ul className="rn-nav right">
                {rightMenus.map((menu) => (
                  <li key={menu.key}>
                    <a href="#">{menu.label}{menu.items.length > 0 && " ▾"}</a>
                    {menu.items.length > 0 && (
                      <ul className="rn-dropdown">
                        {menu.items.map((item) => (
                          <li key={item.href}><a href={item.href}>{item.label}</a></li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* Icons */}
              <ul className="rn-icons" style={{ display: "flex", alignItems: "center", gap: 20, listStyle: "none", padding: 0, marginLeft: 16 }}>
                {/* Cart */}
                <li style={{ position: "relative" }}>
                  <a href="#" style={{ position: "relative" }}>
                    <i className="far fa-shopping-cart"></i>
                    <span className="badge">3</span>
                  </a>
                  <div className="rn-cart-dropdown">
                    <div className="rn-cart-item">
                      <img src="/assets/img/products/1.png" alt="Product" />
                      <div>
                        <h6>Delica omtantur</h6>
                        <p>2x — <strong>$99.99</strong></p>
                      </div>
                    </div>
                    <div className="rn-cart-item">
                      <img src="/assets/img/products/2.png" alt="Product" />
                      <div>
                        <h6>Omnes ocurreret</h6>
                        <p>1x — <strong>$33.33</strong></p>
                      </div>
                    </div>
                    <div className="rn-cart-total"><span>Total</span><span>$133.32</span></div>
                    <div className="rn-cart-btns">
                      <a href="#">Cart</a>
                      <a href="#">Checkout</a>
                    </div>
                  </div>
                </li>
                {/* Search */}
                <li><a href="#"><i className="far fa-search"></i></a></li>
                {/* Sidebar bars */}
                <li>
                  <a href="#" style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    <span style={{ display: "block", width: 22, height: 2, background: "#232323", borderRadius: 2 }}></span>
                    <span style={{ display: "block", width: 22, height: 2, background: "#232323", borderRadius: 2 }}></span>
                    <span style={{ display: "block", width: 16, height: 2, background: "#232323", borderRadius: 2 }}></span>
                  </a>
                </li>
              </ul>
            </div>

            {/* MOBILE HAMBURGER */}
            <button className="rn-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              <i className={mobileOpen ? "fa fa-times" : "fa fa-bars"}></i>
            </button>
            </div>
          </div>
        </nav>

        {/* MOBILE DRAWER */}
        <div className={`rn-mobile-menu${mobileOpen ? " open" : ""}`}>
          <ul>
            {[...leftMenus, ...rightMenus].map((menu) => (
              <li key={menu.key}>
                <button onClick={() => toggle(menu.key)}>
                  {menu.label}
                  <span>{openDropdown === menu.key ? "▲" : "▼"}</span>
                </button>
                <ul className={`rn-mobile-submenu${openDropdown === menu.key ? " open" : ""}`}>
                  {menu.items.map((item) => (
                    <li key={item.href}><a href={item.href}>{item.label}</a></li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── BANNER ── */}
      <div className="banner-area navigation-circle text-light banner-style-one zoom-effect overflow-hidden">
        <div className="banner-fade">
          <div className="swiper-wrapper">

            {/* Slide 1 */}
            <div className="swiper-slide banner-style-one">
              <div className="banner-thumb bg-cover shadow dark" style={{ background: "url(/assets/img/banner/banner1.webp)" }}></div>
              <div className="container">
                <div className="row align-center">
                  <div className="col-xl-7">
                    <div className="content">
                      <h4>Regenerative Agriculture</h4>
                      <h2><strong>Adesco Western Ranch</strong> Building Sustainable Futures</h2>
                      <p>A Black-led farm in Alberta dedicated to fostering educational opportunities, sustainable practices, and community empowerment through innovative agricultural solutions.</p>
                      <div className="button">
                        <a className="btn btn-theme secondary btn-md radius animation" href="#about">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide banner-style-one">
              <div className="banner-thumb bg-cover shadow dark" style={{ background: "url(/assets/img/banner/banner2.webp)" }}></div>
              <div className="container">
                <div className="row align-center">
                  <div className="col-xl-7">
                    <div className="content">
                      <h4>Community Empowerment</h4>
                      <h2><strong>Food Autonomy</strong> and Social Justice</h2>
                      <p>Located in Tomahawk, Parkland County, Alberta, we challenge systemic barriers and foster resilience through education, collaboration, and inclusive agricultural practices.</p>
                      <div className="button">
                        <a className="btn btn-theme secondary btn-md radius animation" href="#mission">Discover Our Mission</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <div className="about-style-one-area default-padding" id="about">
        <div className="shape-right-top">
          <img src="/assets/img/shape/leaf.png" alt="Image not found" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5 col-lg-6 about-style-one pr-50 pr-md-15 pr-xs-15">
              <div className="thumb">
                <img src="/assets/img/about.webp" alt="Adesco Western Ranch" />
                <div className="sub-item">
                  <img src="/assets/img/farmer.webp" alt="Black Farmer in Canada" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 about-style-one">
              <div className="row align-center">
                <div className="col-xl-7 col-lg-12">
                  <h2 className="heading">Adesco Western Ranch <br /> Established 2018</h2>
                  <p>Established six years ago in Canada by a dynamic young and resilient African Canadian farmer, our farm is located in the close-knit hamlet of Tomahawk, Parkland County, Alberta, along Highway 759 northeast of Drayton Valley. Our mission transcends traditional farming, serving as a form of resistance against historical marginalization and reclaiming narratives and spaces traditionally inaccessible to marginalized communities.</p>
                  <ul className="check-solid-list mt-20">
                    <li>Regenerative agricultural practices and land stewardship</li>
                    <li>Community education and youth training programs</li>
                    <li>Challenging systemic barriers in agriculture</li>
                  </ul>
                </div>
                <div className="col-xl-5 col-lg-12 pl-50 pl-md-15 pl-xs-15">
                  <div className="top-product-item">
                    <img src="/assets/img/icon/1.svg" alt="Education Icon" />
                    <h5><a href="#">Educational Opportunities</a></h5>
                    <p>Workshops and partnerships teaching practical and socio-political aspects of food production.</p>
                  </div>
                  <div className="top-product-item">
                    <img src="/assets/img/icon/2.svg" alt="Community Icon" />
                    <h5><a href="#">Community Empowerment</a></h5>
                    <p>Building networks of support and collaboration that transcend rural isolation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <div className="services-style-one-area default-padding bg-gray half-bg-theme">
        <div className="shape-extra">
          <img src="/assets/img/shape/18.png" alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="heading-left">
            <div className="row">
              <div className="col-lg-5">
                <div className="left-info">
                  <h5 className="sub-title">Our Focus</h5>
                  <h2 className="title">Educational & <br /> Community Programs</h2>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="right-info">
                  <p>Through workshops and partnerships with local institutions, we instruct young people and aspiring agriculturists in practical techniques and the socio-political aspects of food production, emphasizing autonomy over food systems as a cornerstone of community resilience.</p>
                  <a className="btn btn-theme btn-md radius animation" href="/contact">Get Involved</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="services-style-one-carousel swiper">
                <div className="swiper-wrapper">
                  {[
                    { img: "1.png", title: "Youth Training" },
                    { img: "2.png", title: "Sustainable Practices" },
                    { img: "3.png", title: "Community Engagement" },
                    { img: "4.png", title: "Food Autonomy" },
                    { img: "6.png", title: "Regenerative Agriculture" },
                  ].map((s) => (
                    <div className="swiper-slide" key={s.title}>
                      <div className="services-style-one">
                        <div className="thumb">
                          <img src={`/assets/img/thumb/${s.img}`} alt={s.title} />
                        </div>
                        <h5><a href="#">{s.title}</a></h5>
                        <p>Building equitable food systems through education, collaboration, and inclusive practices.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MISSION & VISION ── */}
      <div className="product-list-area default-padding-bottom bottom-less bg-dark text-center text-light" id="mission">
        <div className="shape-bottom-right">
          <img src="/assets/img/shape/21.png" alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1 mb-50 mb-xs-30">
              <h2 className="mask-text">Our Mission: Equity, Resilience & Sustainability</h2>
            </div>
            <div className="product-list-box">
              {[
                { icon: "1.png", name: "Education" },
                { icon: "2.png", name: "Sustainability" },
                { icon: "3.png", name: "Equity" },
                { icon: "4.png", name: "Community" },
                { icon: "5.png", name: "Innovation" },
                { icon: "6.png", name: "Resilience" },
              ].map((p) => (
                <div className="product-list-item" key={p.name}>
                  <a href="#">
                    <img src={`/assets/img/icon/${p.icon}`} alt="Icon" />
                    <h5>{p.name}</h5>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── ABOUT OUR IMPACT ── */}
      <div className="choose-us-style-one-area overflow-hidden default-padding">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-6 choose-us-style-one">
              <div className="thumb">
                <img src="/assets/img/journey.webp" alt="Adesco Western Ranch Impact" />
                <div className="shape">
                  <img className="wow fadeInDown" src="/assets/img/shape/22.png" alt="Image not found" />
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
              <h5 className="sub-title">Our Journey</h5>
              <h2 className="title">Challenging Barriers, <br /> Building Futures</h2>
              <div className="accordion accordion-regular mt-35" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What makes Adesco unique?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p>Adesco Western Ranch is a Black-led agricultural enterprise that challenges systemic barriers in farming. We blend traditional agrarian knowledge with modern innovations while prioritizing community education and regenerative land stewardship.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How can I get involved?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p>You can support our mission through educational partnerships, volunteering, or donations to Visible Futures Empowerment Society Inc. (VFES). We welcome community members interested in learning about sustainable agriculture and food autonomy.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      What is your vision for the future?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p>We envision Canada&apos;s food landscape reflecting its diversity and potential for transformative change. Our goal is to inspire future generations to pursue agriculture as a vehicle for social justice, equity, and environmental sustainability.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div className="testimonials-area default-padding bg-gray" style={{ backgroundImage: "url(/assets/img/shape/23.png)" }}>
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5">
              <div className="testimonial-info text-center">
                <h4>Testimonial</h4>
                <div className="thumb">
                  <img src="https://placehold.co/150x150/4a7c59/ffffff?text=MJW" alt="Matthew J. Wyman" />
                  <img src="https://placehold.co/150x150/4a7c59/ffffff?text=ABS" alt="Anthom Bu Spar" />
                  <img src="https://placehold.co/150x150/4a7c59/ffffff?text=MKP" alt="Metho k. Partho" />
                  <img src="https://placehold.co/150x150/4a7c59/ffffff?text=TM" alt="Team Member" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="testimonial-carousel testimonial-style-one swiper">
                <div className="swiper-wrapper">
                  {[
                    { image: "https://placehold.co/150x150/4a7c59/ffffff?text=MJW", quote: "Adesco Western Ranch's commitment to community education transformed how I understand regenerative agriculture. Their hands-on approach and dedication to social justice in farming is truly inspiring.", name: "Matthew J. Wyman", role: "Senior Consultant" },
                    { image: "https://placehold.co/150x150/4a7c59/ffffff?text=ABS", quote: "Supporting a Black-led farm that challenges systemic barriers is what we need in agriculture. The team's passion for sustainability and equity is unmatched.", name: "Anthom Bu Spar", role: "Marketing Manager" },
                    { image: "https://placehold.co/150x150/4a7c59/ffffff?text=MKP", quote: "The educational programs at Adesco are game-changing. They're building a model for inclusive, sustainable agriculture that can inspire generations to come.", name: "Metho k. Partho", role: "Senior Developer" },
                  ].map((t) => (
                    <div className="swiper-slide" key={t.name}>
                      <div className="testimonial-style-two">
                        <div className="item">
                          <div className="content"><p>&#8220;{t.quote}&#8221;</p></div>
                          <div className="provider" style={{ display: "flex", alignItems: "center" }}>
                            <img src={t.image} alt={t.name} style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "12px", flexShrink: 0 }} />
                            <div className="info">
                              <h4>{t.name}</h4>
                              <span>{t.role}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── GALLERY ── */}
      <div className="gallery-style-one-area default-padding-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">Awesome Gallery</h5>
                <h2 className="title">Gallery Of Our Products</h2>
                <div className="devider"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-stage">
          <div className="row">
            <div className="col-xl-12">
              <div className="carousel-stage-right carousel-style-one swiper">
                <div className="swiper-wrapper">
                  {[
                    { label: "Fruit", title: "Healthy Food", image: "product1.webp" },
                    { label: "Organic", title: "Cow Milk", image: "product2.webp" },
                    { label: "Vegetables", title: "Organic Vegetables", image: "product3.webp" },
                    { label: "Cereals", title: "Fresh Mandrains", image: "product4.webp" },
                    { label: "Havest", title: "Crispy Cucumber", image: "product5.webp" },
                  ].map((g) => (
                    <div className="swiper-slide" key={g.title}>
                      <div className="gallery-style-one">
                        <img src={`/assets/img/product/${g.image}`} alt={g.title} />
                        <div className="overlay">
                          <span>{g.label}</span>
                          <h4><a href="#">{g.title}</a></h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FUN FACTS ── */}
      <div className="fun-facts-area default-padding">
        <div className="shape-left">
          <img src="/assets/img/shape/27.png" alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="item-inner">
            <div className="shape-right">
              <img src="/assets/img/shape/26.png" alt="Image Not Found" />
            </div>
            <div className="row">
              <div className="col-lg-4 fun-fact-style-one">
                <div className="heading">
                  <div className="sub-title">Achivements</div>
                  <h2 className="title">Delivering value <br /> since 1956</h2>
                </div>
              </div>
              <div className="col-lg-8 fun-fact-style-one text-end">
                <div className="row">
                  {[
                    { val: "250", unit: "M", label: "Growth Tonns of Harvest" },
                    { val: "98", unit: "%", label: "Happy clients" },
                    { val: "688", unit: "K", label: "Sales of our Products" },
                  ].map((f) => (
                    <div className="col-lg-4 col-md-4 item" key={f.label}>
                      <div className="fun-fact">
                        <div className="counter">
                          <div className="timer" data-to={f.val} data-speed="2000">{f.val}</div>
                          <div className="operator">{f.unit}</div>
                        </div>
                        <span className="medium">{f.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTACT ── */}
      <div className="contact-area bg-gray default-padding" style={{ backgroundImage: "url(/assets/img/shape/28.png)" }}>
        <div className="container">
          <div className="row align-center">
            <div className="col-tact-stye-one col-lg-7">
              <div className="contact-form-style-one mb-md-50">
                <h5 className="sub-title">Have Questions?</h5>
                <h2 className="heading">Send us a Massage</h2>
                <form action="/assets/mail/contact.php" method="POST" className="contact-form">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                        <span className="alert-error"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                        <span className="alert-error"></span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                        <span className="alert-error"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group comments">
                        <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <button type="submit" name="submit" id="submit">
                        <i className="fa fa-paper-plane"></i> Get in Touch
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg"></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-tact-stye-one col-lg-5 pl-60 pl-md-15 pl-xs-15">
              <div className="contact-style-one-info">
                <h2>Contact <span>Information
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M14.4,111.6c0,0,202.9-33.7,471.2,0c0,0-194-8.9-397.3,24.7c0,0,141.9-5.9,309.2,0" style={{ animationPlayState: "running" }}></path>
                  </svg>
                </span></h2>
                <p>Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.</p>
                <ul>
                  <li className="wow fadeInUp">
                    <div className="icon"><i className="fas fa-phone-alt"></i></div>
                    <div className="content"><h5 className="title">Hotline</h5><a href="tel:+1 (780) 297-0185">+1 (780) 297-0185</a></div>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="300ms">
                    <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="info"><h5 className="title">Our Location</h5><p>51217 Range road, 63 Tomahawk, Alberta T0E 2H0 Canada</p></div>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="500ms">
                    <div className="icon"><i className="fas fa-envelope-open-text"></i></div>
                    <div className="info"><h5 className="title">Official Email</h5><a href="mailto:tim.adekola1@gmail.com">tim.adekola1@gmail.com</a></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BLOG ── */}
      <div className="blog-area home-blog blog-grid default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-30">
              <div className="blog-style-one">
                <div className="thumb">
                  <a href="#"><img src="/assets/img/blog/blog01.webp" alt="Blog" /></a>
                  <div className="date"><strong>18</strong> <span>Apr, 22</span></div>
                </div>
                <div className="info">
                  <div className="meta"><ul>
                    <li><a href="#"><i className="fas fa-user-circle"></i> Admin</a></li>
                    <li><a href="#"><i className="fas fa-comments"></i> 26 Comments</a></li>
                  </ul></div>
                  <h4 className="title"><a href="#">Announcing if attachment resolution sentiments Possession ye no mr unaffected remarkably</a></h4>
                </div>
              </div>
            </div>
            {[
              { img: "blog/blog02.webp", date: "15", month: "Jul, 22", user: "User", comments: 35, title: "Considered imprudence of he friendship day" },
              { img: "blog/blog03.webp", date: "24", month: "Feb, 22", user: "User", comments: 12, title: "Overcame breeding or concerns removing past" },
            ].map((b) => (
              <div className="col-lg-3 col-md-6 mb-30" key={b.title}>
                <div className="blog-style-one">
                  <div className="thumb">
                    <a href="#"><img src={`/assets/img/${b.img}`} alt="Blog" /></a>
                    <div className="date"><strong>{b.date}</strong> <span>{b.month}</span></div>
                  </div>
                  <div className="info">
                    <div className="meta"><ul>
                      <li><a href="#"><i className="fas fa-user-circle"></i> {b.user}</a></li>
                      <li><a href="#"><i className="fas fa-comments"></i> {b.comments} Comments</a></li>
                    </ul></div>
                    <h4 className="title"><a href="#">{b.title}</a></h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-dark text-light" style={{ backgroundImage: "url(/assets/img/shape/brush-down.png)" }}>
        <div className="container">
          <div className="f-items default-padding">
            <div className="row">
              <div className="col-lg-4 col-md-6 item">
                <div className="footer-item about">
                  <img className="logo" src="/assets/img/logo-light.jpeg" alt="Logo" />
                  <p>Happen active county. Winding morning ambition shyness evident to poor. Because elderly new to the point to main success.</p>
                  <form action="#">
                    <input type="email" placeholder="Your Email" className="form-control" name="email" />
                    <button type="submit"> Go</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 item">
                <div className="footer-item link">
                  <h4 className="widget-title">Explore</h4>
                  <ul>
                    {["About Us", "Meet Our Team", "News & Media", "Services", "Contact Us", "Volunteers"].map((l) => (
                      <li key={l}><a href="#">{l}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 item">
                <div className="footer-item recent-post">
                  <h4 className="widget-title">Recent Posts</h4>
                  <ul>
                    <li>
                      <div className="thumb"><a href="#"><img src="/assets/img/800x800.png" alt="Thumb" /></a></div>
                      <div className="info">
                        <div className="meta-title"><span className="post-date">12 Sep, 2022</span></div>
                        <h5><a href="#">Meant widow equal an share least part.</a></h5>
                      </div>
                    </li>
                    <li>
                      <div className="thumb"><a href="#"><img src="/assets/img/800x800.png" alt="Thumb" /></a></div>
                      <div className="info">
                        <div className="meta-title"><span className="post-date">18 Jul, 2022</span></div>
                        <h5><a href="#">Future Plan &amp; Strategy for Consutruction</a></h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 item">
                <div className="footer-item contact">
                  <h4 className="widget-title">Contact Info</h4>
                  <ul>
                    <li>
                      <div className="icon"><i className="fas fa-home"></i></div>
                      <div className="content"><strong>Address:</strong>51217 Range road, 63 Tomahawk, Alberta T0E 2H0 Canada</div>
                    </li>
                    <li>
                      <div className="icon"><i className="fas fa-envelope"></i></div>
                      <div className="content"><strong>Email:</strong> <a href="mailto:tim.adekola1@gmail.com">tim.adekola1@gmail.com</a></div>
                    </li>
                    <li>
                      <div className="icon"><i className="fas fa-phone"></i></div>
                      <div className="content"><strong>Phone:</strong> <a href="tel:+1 (780) 297-0185">+1 (780) 297-0185</a><br/>
                       <a href="tel:+1 (403) 830-0579">+1 (403) 830-0579</a>
                      
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-6">
                <p>&copy; Copyright Adesco Western Ranch Ltd. 2026. All right reserved.</p>
              </div>
              <div className="col-lg-6 text-end">
                <p>Developed by <span style={{color: "#e74c3c"}}><a href="https://baninfotech.com" target="_blank" rel="noopener noreferrer">Ban-infotech Solutions</a></span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-right-bottom">
          <img src="/assets/img/shape/10.png" alt="Image Not Found" />
        </div>
        <div className="shape-left-bottom">
          <img src="/assets/img/shape/11.png" alt="Image Not Found" />
        </div>
      </footer>
    </>
  );
}

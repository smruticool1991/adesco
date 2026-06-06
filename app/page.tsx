"use client";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

/* ─────────────────────────────────────────────
   NAVBAR  –  Center-logo | Left menu | Right menu
   Pure React, no jQuery dependency
───────────────────────────────────────────── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggle = (name: string) =>
    setOpenDropdown((prev) => (prev === name ? null : name));

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 999;
          background: transparent;
          box-shadow: none;
          transition: all 0.3s ease;
        }
        .rn-navbar.scrolled {
          background: #fff;
          box-shadow: 0 2px 20px rgba(0,0,0,.08);
        }
        .rn-navbar.scrolled .rn-nav li > a {
          color: #232323;
        }
        .rn-navbar.scrolled .rn-icons li > a {
          color: #232323;
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
          color: #fff;
          text-transform: capitalize;
          white-space: nowrap;
          transition: color .2s;
          text-decoration: none;
        }
        .rn-nav li > a:hover { color: var(--color-primary, #4a7c59); }
        /* ── Book Now Button ── */
        .book-now-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: var(--color-primary, #4a7c59);
          color: #fff;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          transition: background .3s;
          margin-left: 10px;
        }
        .book-now-btn:hover {
          background: #3d6a4a;
          color: #fff;
        }
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
          color: #fff;
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
          color: #fff;
          padding: 4px 8px;
          transition: color .2s;
        }
        .rn-navbar.scrolled .rn-hamburger {
          color: #232323;
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
        /* Add padding top to body to account for fixed navbar */
        header {
          margin-bottom: 0;
        }
        header a{
           font-size: 16px!important;
        }
      `}</style>

      <header>
        <nav className="navbar mobile-sidenav nav-blur navbar-sticky navbar-default validnavs white navbar-fixed no-background">
          <div className="container-full d-flex justify-content-between align-items-center">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="/" data-discover="true">
                <img className="logo logo-display" alt="Logo" src="/assets/img/logo-light.jpeg" style={{width: "100px"}}/>
                <img className="logo logo-scrolled" alt="Logo" src="/assets/img/logo.png" style={{height: "100px"}}/>
              </a>
            </div>
            <div className="collapse navbar-collapse collapse-mobile" id="navbar-menu">
              <img alt="Logo" src="/assets/img/logo.png"/>
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <i className="fa fa-times"></i>
              </button>
              <ul className="nav navbar-nav navbar-right navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li>
                  <a className="dropdown-toggle" data-toggle="dropdown" href="/" data-discover="true">Home</a>
                </li>
                <li>
                  <a className="dropdown-toggle" data-toggle="dropdown" href="/project" data-discover="true">Who We Are</a>
                </li>
                <li>
                  <a className="dropdown-toggle" data-toggle="dropdown" href="/home-3" data-discover="true">Brands & Products</a>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="/home-3" data-discover="true">Initiatives</a>
                  <ul className="dropdown-menu">
                    <li><a href="/home-3" data-discover="true">Goat Banking</a></li>
                    <li><a href="/home-3" data-discover="true">Cattle Banking</a></li>
                    <li><a href="/home-3" data-discover="true">Cultural Seeds</a></li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-toggle" data-toggle="dropdown" href="/home-3" data-discover="true">Blog</a>
                </li>
                <li>
                  <a className="dropdown-toggle" data-toggle="dropdown" href="/home-3" data-discover="true">Contact us</a>
                </li>
                <li>
                  <div className="button" style={{marginLeft: "30px"}}>
                    <a className="btn btn-theme btn-md radius animation" style={{backgroundColor: "#fc4b00"}} href="#about">Donate</a>
                  </div>
                </li>
               </ul>
              </div>
              
              <div className="attr-right"><div className="attr-nav"><ul><li className="wishlist"><a href="/home-3" data-discover="true"><i className="fas fa-heart"></i></a></li><li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/home-3" data-discover="true"><i className="far fa-shopping-cart"></i><span className="badge">0</span></a><ul className="dropdown-menu cart-list"><li className="total"><p>Your cart is empty.</p></li></ul></li></ul></div></div></div><div className="overlay-screen"></div></nav>
              </header>

    </>
  );
}

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
const galleryItems = [
  { tag: "Livestock",    title: "Free-Range Chickens",  src: "/assets/img/product/product1.webp" },
  { tag: "Cattle",       title: "Jersey Cow Herd",      src: "/assets/img/product/product2.webp" },
  { tag: "Agriculture",  title: "Field Cultivation",    src: "/assets/img/product/product3.webp" },
  { tag: "Harvest",      title: "Fresh Produce",         src: "/assets/img/product/product4.webp" },
  { tag: "Training",     title: "Youth Farm Programs",  src: "/assets/img/gallery/youth.webp" },
  { tag: "Sustainability", title: "Regenerative Land", src: "/assets/img/gallery/regenerative.webp" },
  { tag: "Community",    title: "Farm Workshops",        src: "/assets/img/gallery/farm.webp " },
  { tag: "Growth",       title: "Seasonal Crops",        src: "/assets/img/gallery/crops.webp" },
];

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % galleryItems.length : null));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── BANNER ── */}
      <div className="banner-area navigation-circle text-light text-center banner-style-three-area zoom-effect overflow-hidden">
        <div className="banner-fade">
          <div className="swiper-wrapper">

            {/* Slide 1 */}
            <div className="swiper-slide banner-style-three">
              <div className="banner-thumb bg-cover shadow dark" style={{ background: "url(/assets/img/banner/banner1.webp)" }}></div>
              <div className="container">
                <div className="row align-center">
                  <div className="col-lg-10 offset-lg-1">
                    <div className="content">
                      <h2>Ultimate Products <br /> & Customers</h2>
                      <div style={{display: "flex", gap: "20px", alignItems: "center", justifyContent: "center", marginTop: "20px"}}>
                          <div className="button">
                            <a className="btn btn-theme secondary btn-md radius animation" href="#about">Discover More</a>
                          </div>
                          <div className="button">
                            <a className="btn btn-theme secondary btn-md radius animation" style={{backgroundColor: "#347604", color: "#fff"}} href="#about">Become a Farmer</a>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide banner-style-three">
              <div className="banner-thumb bg-cover shadow dark" style={{ background: "url(assets/img/banner/banner2.webp)" }}></div>
              <div className="container">
                <div className="row align-center">
                  <div className="col-lg-10 offset-lg-1">
                    <div className="content">
                      <h2>Natural & Organic <br /> Farm Store</h2>
                      <div style={{display: "flex", gap: "20px", alignItems: "center", justifyContent: "center", marginTop: "20px"}}>
                          <div className="button">
                            <a className="btn btn-theme secondary btn-md radius animation" href="#about">Discover More</a>
                          </div>
                          <div className="button">
                            <a className="btn btn-theme secondary btn-md radius animation" style={{backgroundColor: "#347604", color: "#fff"}} href="#about">Become a Farmer</a>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide banner-style-three">
              <div className="banner-thumb bg-cover shadow dark" style={{ background: "url(assets/img/banner/banner03.webp)" }}></div>
              <div className="container">
                <div className="row align-center">
                  <div className="col-lg-10 offset-lg-1">
                    <div className="content">
                      <h2> Fresh & Pure <br /> Dairy Farm </h2>
                      <div style={{display: "flex", gap: "20px", alignItems: "center", justifyContent: "center", marginTop: "20px"}}>
                          <div className="button">
                            <a className="btn btn-theme secondary btn-md radius animation" href="#about">Discover More</a>
                          </div>
                          <div className="button">
                            <a className="btn btn-theme secondary btn-md radius animation" style={{backgroundColor: "#347604", color: "#fff"}} href="#about">Become a Farmer</a>
                          </div>
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
                  <h2 className="heading">Adesco Western Ranch <br /> Established in 2018</h2>
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
              <h2 className="mask-text">Our Mission: Equity, Resilience And Sustainability</h2>
            </div>
            <div className="product-list-box">
              {[
                {
                  name: "Education",
                  svg: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60" height="60" fill="none">
                      <path d="M32 8L4 22l28 14 28-14L32 8z" fill="#f5c842" stroke="#333" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M4 22v18" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M14 28v12a18 7 0 0 0 36 0V28" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="4" cy="42" r="2.5" fill="#f5c842" stroke="#333" strokeWidth="1.5"/>
                    </svg>
                  ),
                },
                {
                  name: "Sustainability",
                  svg: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60" height="60" fill="none">
                      <path d="M32 56C18 56 8 46 8 32c0-10 6-19 15-23-2 6-1 14 4 19 2-8 8-14 16-16-3 5-3 12 0 17 5-4 9-11 9-18 5 5 8 12 8 19 0 14-10 26-28 26z" fill="#4caf50" stroke="#2e7d32" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M32 56V38" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  name: "Equity",
                  svg: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60" height="60" fill="none">
                      <line x1="32" y1="10" x2="32" y2="54" stroke="#555" strokeWidth="2.5" strokeLinecap="round"/>
                      <line x1="14" y1="18" x2="50" y2="18" stroke="#555" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M14 18l-8 16a12 6 0 0 0 16 0L14 18z" fill="#e8c84a" stroke="#b8960a" strokeWidth="1.8" strokeLinejoin="round"/>
                      <path d="M50 18l-8 16a12 6 0 0 0 16 0L50 18z" fill="#e8c84a" stroke="#b8960a" strokeWidth="1.8" strokeLinejoin="round"/>
                      <rect x="24" y="52" width="16" height="4" rx="2" fill="#555"/>
                    </svg>
                  ),
                },
                {
                  name: "Community",
                  svg: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60" height="60" fill="none">
                      <circle cx="32" cy="20" r="8" fill="#64b5f6" stroke="#1565c0" strokeWidth="2"/>
                      <path d="M16 52c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="#1565c0" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="14" cy="22" r="5.5" fill="#90caf9" stroke="#1565c0" strokeWidth="1.5"/>
                      <path d="M4 48c0-5.5 4.5-10 10-10" stroke="#1565c0" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="50" cy="22" r="5.5" fill="#90caf9" stroke="#1565c0" strokeWidth="1.5"/>
                      <path d="M60 48c0-5.5-4.5-10-10-10" stroke="#1565c0" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  name: "Innovation",
                  svg: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60" height="60" fill="none">
                      <path d="M32 10c-10 0-18 8-18 18 0 7 4 13 10 16v4h16v-4c6-3 10-9 10-16 0-10-8-18-18-18z" fill="#fff176" stroke="#f9a825" strokeWidth="2" strokeLinejoin="round"/>
                      <rect x="24" y="48" width="16" height="4" rx="2" fill="#f9a825"/>
                      <rect x="26" y="52" width="12" height="3" rx="1.5" fill="#f57f17"/>
                      <line x1="32" y1="10" x2="32" y2="6" stroke="#f9a825" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="50" y1="28" x2="54" y2="28" stroke="#f9a825" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="14" y1="28" x2="10" y2="28" stroke="#f9a825" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="46" y1="14" x2="49" y2="11" stroke="#f9a825" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="18" y1="14" x2="15" y2="11" stroke="#f9a825" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  name: "Resilience",
                  svg: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60" height="60" fill="none">
                      <path d="M32 8L10 18v16c0 14 10 24 22 28 12-4 22-14 22-28V18L32 8z" fill="#ef9a9a" stroke="#c62828" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M22 32l8 8 12-14" stroke="#c62828" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
              ].map((p) => (
                <div className="product-list-item" key={p.name}>
                  <a href="#">
                    <span style={{ display: "flex", justifyContent: "center", marginBottom: "8px" }}>{p.svg}</span>
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
      <div className="farm-gallery-section">
        <style>{`
          .farm-gallery-section {
            padding: 80px 0 90px;
            background: #f4f7f4;
          }
          .farm-gallery-section .section-head {
            text-align: center;
            margin-bottom: 48px;
          }
          .farm-gallery-section .section-head .sub-label {
            display: inline-block;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #4a7c59;
            margin-bottom: 10px;
          }
          .farm-gallery-section .section-head h2 {
            font-size: clamp(28px, 4vw, 42px);
            font-weight: 800;
            color: #1a2e1a;
            margin: 0 0 14px;
          }
          .farm-gallery-section .section-head .divider-line {
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #4a7c59, #82c45a);
            margin: 0 auto;
            border-radius: 2px;
          }

          /* ── Grid ── */
          .farm-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2, 260px);
            gap: 14px;
            padding: 0 20px;
          }
          @media (max-width: 1024px) {
            .farm-grid {
              grid-template-columns: repeat(2, 1fr);
              grid-template-rows: repeat(4, 240px);
            }
          }
          @media (max-width: 600px) {
            .farm-grid {
              grid-template-columns: 1fr;
              grid-template-rows: auto;
              gap: 10px;
            }
            .farm-grid .farm-card { height: 220px; }
          }

          /* ── Card ── */
          .farm-card {
            position: relative;
            overflow: hidden;
            border-radius: 14px;
            cursor: pointer;
            box-shadow: 0 4px 18px rgba(0,0,0,0.13);
            transition: box-shadow 0.35s ease, transform 0.35s ease;
          }
          .farm-card:hover {
            box-shadow: 0 12px 40px rgba(74,124,89,0.30);
            transform: translateY(-4px);
          }
          .farm-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          .farm-card:hover img {
            transform: scale(1.10);
          }

          /* ── Overlay ── */
          .farm-card-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to top,
              rgba(15, 40, 15, 0.82) 0%,
              rgba(15, 40, 15, 0.18) 55%,
              transparent 100%
            );
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 20px 22px;
            opacity: 0;
            transition: opacity 0.35s ease;
          }
          .farm-card:hover .farm-card-overlay {
            opacity: 1;
          }
          .farm-card-overlay .farm-tag {
            display: inline-block;
            background: #4a7c59;
            color: #fff;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            padding: 3px 10px;
            border-radius: 20px;
            margin-bottom: 8px;
            width: fit-content;
            transform: translateY(8px);
            transition: transform 0.35s ease 0.05s;
          }
          .farm-card:hover .farm-card-overlay .farm-tag {
            transform: translateY(0);
          }
          .farm-card-overlay h4 {
            color: #fff;
            font-size: 17px;
            font-weight: 700;
            margin: 0;
            transform: translateY(10px);
            transition: transform 0.35s ease 0.1s;
          }
          .farm-card:hover .farm-card-overlay h4 {
            transform: translateY(0);
          }

          /* ── Corner accent badge ── */
          .farm-card-badge {
            position: absolute;
            top: 14px;
            right: 14px;
            background: rgba(255,255,255,0.92);
            border-radius: 50%;
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transform: scale(0.6);
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
          .farm-card:hover .farm-card-badge {
            opacity: 1;
            transform: scale(1);
          }
          .farm-card-badge svg {
            width: 18px;
            height: 18px;
            stroke: #4a7c59;
            fill: none;
          }
        `}</style>

        <div className="container">
          <div className="section-head">
            <span className="sub-label">Awesome Gallery</span>
            <h2>Gallery Of Our Farms</h2>
            <div className="divider-line"></div>
          </div>
        </div>

        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="farm-grid">
            {galleryItems.map((item, index) => (
              <div className="farm-card" key={item.title}>
                <img src={item.src} alt={item.title} />
                <div className="farm-card-overlay">
                  <span className="farm-tag">{item.tag}</span>
                  <h4>{item.title}</h4>
                </div>
                <button
                  className="farm-card-badge"
                  onClick={() => openLightbox(index)}
                  aria-label={`Expand ${item.title}`}
                  style={{ border: "none", cursor: "pointer" }}
                >
                  <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX CSS (always rendered) ── */}
      <style>{`
        @keyframes lbFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lbImgIn { from { opacity:0; transform: scale(0.93) } to { opacity:1; transform: scale(1) } }
        .lb-img { animation: lbImgIn 0.3s ease; }
        .lb-backdrop {
          position: fixed; inset: 0; z-index: 99999;
          background: rgba(0,0,0,0.92);
          display: flex; align-items: center; justify-content: center;
          animation: lbFadeIn 0.25s ease;
        }
        .lb-nav-btn {
          position: fixed; top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.12);
          border: 2px solid rgba(255,255,255,0.25);
          border-radius: 50%;
          width: 52px; height: 52px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          color: #fff; font-size: 28px; line-height: 1;
          z-index: 100000;
        }
        .lb-nav-btn:hover { background: rgba(74,124,89,0.7); transform: translateY(-50%) scale(1.1); }
        .lb-close-btn {
          position: fixed; top: 20px; right: 24px;
          background: rgba(255,255,255,0.1);
          border: 2px solid rgba(255,255,255,0.25);
          border-radius: 50%;
          width: 48px; height: 48px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #fff; font-size: 20px;
          transition: background 0.2s;
          z-index: 100000;
        }
        .lb-close-btn:hover { background: rgba(220,50,50,0.7); }
        .lb-counter {
          position: fixed; bottom: 24px; left: 50%;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.75); font-size: 14px;
          font-weight: 600; letter-spacing: 2px;
          background: rgba(0,0,0,0.4);
          padding: 6px 18px; border-radius: 20px; z-index: 100000;
          white-space: nowrap;
        }
        .lb-caption {
          position: fixed; bottom: 64px; left: 50%;
          transform: translateX(-50%);
          text-align: center; z-index: 100000;
          white-space: nowrap;
        }
        .lb-caption .lb-tag {
          display: inline-block; background: #4a7c59;
          color: #fff; font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 3px 12px; border-radius: 20px; margin-bottom: 6px;
        }
        .lb-caption h4 { color: #fff; font-size: 20px; font-weight: 700; margin: 0; }
      `}</style>

      {/* ── LIGHTBOX MODAL (portal) ── */}
      {mounted && lightboxIndex !== null && ReactDOM.createPortal(
        <div className="lb-backdrop" onClick={closeLightbox}>
          {/* Close */}
          <button className="lb-close-btn" onClick={(e) => { e.stopPropagation(); closeLightbox(); }} aria-label="Close">
            ✕
          </button>

          {/* Prev */}
          <button className="lb-nav-btn" style={{ left: "20px" }}
            onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous">
            ‹
          </button>

          {/* Image */}
          <img
            key={lightboxIndex}
            className="lb-img"
            src={galleryItems[lightboxIndex].src}
            alt={galleryItems[lightboxIndex].title}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw", maxHeight: "82vh",
              objectFit: "contain", borderRadius: "12px",
              boxShadow: "0 20px 80px rgba(0,0,0,0.6)",
            }}
          />

          {/* Next */}
          <button className="lb-nav-btn" style={{ right: "20px" }}
            onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next">
            ›
          </button>

          {/* Caption */}
          <div className="lb-caption" onClick={(e) => e.stopPropagation()}>
            <div className="lb-tag">{galleryItems[lightboxIndex].tag}</div>
            <h4>{galleryItems[lightboxIndex].title}</h4>
          </div>

          {/* Counter */}
          <div className="lb-counter">{lightboxIndex + 1} / {galleryItems.length}</div>
        </div>,
        document.body
      )}

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
                    { val: "12", unit: "K", label: "Growth Tonns of Harvest" },
                    { val: "98", unit: "%", label: "Happy clients" },
                    { val: "68", unit: "K", label: "Sales of our Products" },
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
                    <div className="content"><h5 className="title">Hotline</h5>
                       <a href="tel:+1 (780) 297-0185">+1 (780) 297-0185</a><br/>
                        <a href="tel: +1 (403) 830-0579"> +1 (403) 830-0579</a>
                    </div>
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
                    {["About Us", "Meet Our Team", "News & Media", "Contact Us", "Volunteers"].map((l) => (
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

          {/* ── Partner Logos Row ── */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "24px",
            paddingBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}>
            <span style={{
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              flexShrink: 0,
            }}>
              Supported By
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
              <a
                href="https://www.canada.ca"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "8px",
                  padding: "10px 18px",
                  transition: "background 0.2s",
                }}
              >
                <img
                  src="/assets/img/canada-wordmark-white-footer2.png"
                  alt="Government of Canada"
                  style={{ height: "38px", objectFit: "contain", filter: "brightness(1.1)" }}
                />
              </a>
              <a
                href="https://agriculture.canada.ca"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "8px",
                  padding: "10px 18px",
                  transition: "background 0.2s",
                }}
              >
                <img
                  src="/assets/img/agrifood-canada-footer.png"
                  alt="Agriculture and Agri-Food Canada"
                  style={{ height: "38px", objectFit: "contain", filter: "brightness(1.1)" }}
                />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-6">
                <p>&copy; Copyright Adesco Western Ranch Ltd. 2026. All right reserved.</p>
              </div>
              <div className="col-lg-6 text-end">
                <p>Developed by <span style={{color: "#e74c3c"}}><a href="https://baninfotech.com" target="_blank" rel="noopener noreferrer" style={{color: "#e74c3c"}}>Ban-infotech Solutions</a></span></p>
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

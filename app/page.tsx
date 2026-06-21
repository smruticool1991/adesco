"use client";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

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
                      <h2>We Believe in Farming with <br/> a Respect for the Land</h2>
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
                      <h2 style={{color: "#fff"}}>Natural & Organic Farming by <br/> Canadian Black Farmers</h2>
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
                      <h2 style={{color: "#fff"}}> Adesco is an Animal-Friendly <br/> Housing & Comfort Ranch </h2>
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
      <div className="product-feature-style-one-area overflow-hidden default-padding">
        <div className="container">
            <div className="row align-center">
                <div className="col-lg-5 mb-xs-50 mb-md-120">
                    <div className="product-feature-style-one">
                        <div className="info">
                            <h4 className="sub-title">Healthy Foods</h4>
                            <h2 className="title mb-25">We’re Best Agriculture <br /> &amp; Organic Firms</h2>
                            <p>
                                Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected .
                            </p>
                            <a href="/about-us" className=" video-play-button with-text mt-15">
                                <div className="effect"></div>
                                <span><i className="fas fa-play"></i> OUR STORY</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                    <div className="product-features-style-one pl-100 pl-md-15 pl-xs-15 pt-md-120">
                        <div className="organic-badge">
                            <img src="assets/img/illustration/badge.png" alt="Badge"/>
                        </div>
                        <div className="product-feature-item">
                            <div className="thumb" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img src="assets/img/healthy/cow.png" alt="Thumb"/>
                            </div>
                            <h4><a href="#">Dairy Products</a></h4>
                        </div>
                        <div className="product-feature-item">
                            <div className="thumb" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img src="assets/img/healthy/goat.png" alt="Thumb"/>
                            </div>
                            <h4><a href="#">Livestock Farming</a></h4>
                        </div>
                        <div className="product-feature-item">
                            <div className="thumb" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img src="assets/img/healthy/hen.png" alt="Thumb"/>
                            </div>
                            <h4><a href="#">Poultry Farming</a></h4>
                        </div>
                        <div className="product-feature-item">
                            <div className="thumb" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img src="assets/img/healthy/veg1.png" alt="Thumb"/>
                            </div>
                            <h4><a href="#">Organic Vegetables</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      {/* ── ABOUT ── */}
      <div className="about-style-one-area default-padding" id="about" style={{ background: "#f0f7f2" }}>
        <div className="shape-right-top">
          <img src="/assets/img/shape/leaf.png" alt="Image not found" />
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

      {/* ── WEBINAR SERIES ── */}
      <div className="webinar-section">
        <style>{`
          .webinar-section {
            background: #49a760;
            position: relative;
            color: #fff;
            padding: 0 0 100px;
            overflow: hidden;
            font-family: 'Poppins', sans-serif;
          }
          .webinar-curve {
            width: 100%;
            overflow: hidden;
            line-height: 0;
            margin-top: -1px;
            background: #f0f7f2; /* Match the light green background of the About section above */
          }
          .webinar-section .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 20px 0;
          }
          .webinar-inner {
            display: flex;
            align-items: flex-start;
            gap: 50px;
          }
          .webinar-icon {
            flex-shrink: 0;
            margin-top: 5px;
          }
          .webinar-content {
            flex: 1;
          }
          .webinar-content h3 {
            color: #fff;
            font-size: clamp(24px, 3vw, 36px);
            font-weight: 700;
            margin: 0 0 18px;
            font-family: 'Poppins', sans-serif;
          }
          .webinar-content p {
            color: rgba(255, 255, 255, 0.95);
            font-size: 16px;
            line-height: 1.8;
            margin: 0 0 30px;
            font-family: 'Poppins', sans-serif;
          }
          .webinar-content p strong {
            color: #fff;
            font-weight: 700;
          }
          .webinar-actions {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }
          .webinar-actions a {
            display: inline-block;
            padding: 14px 35px;
            font-size: 15px;
            font-weight: 700;
            text-decoration: none;
            border-radius: 6px;
            transition: all 0.3s ease;
            text-align: center;
          }
          .btn-register {
            background: #fff;
            color: #0b0b0b !important;
            border: 2px solid #fff;
          }
          .btn-register:hover {
            background: transparent;
            color: #fff !important;
          }
          .btn-learn {
            background: transparent;
            color: #fff !important;
            border: 2px solid rgba(255, 255, 255, 0.45);
          }
          .btn-learn:hover {
            border-color: #fff;
            background: rgba(255, 255, 255, 0.1);
          }

          @media (max-width: 991px) {
            .webinar-inner {
              gap: 30px;
            }
          }
          @media (max-width: 768px) {
            .webinar-section {
              padding: 0 0 80px;
            }
            .webinar-inner {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 25px;
            }
            .webinar-icon {
              margin-top: 0;
            }
            .webinar-actions {
              justify-content: center;
              width: 100%;
            }
            .webinar-actions a {
              flex: 1;
              min-width: 150px;
            }
          }
        `}</style>

        <div className="webinar-curve">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
            <path d="M0,0 Q720,55 1440,0 L1440,60 L0,60 Z" fill="#49a760" />
          </svg>
        </div>

        <div className="container">
          <div className="webinar-inner">
            <div className="webinar-icon">
              <svg width="88" height="88" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Board */}
                <rect x="23" y="11" width="36" height="26" rx="2" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
                {/* Stand legs */}
                <path d="M31 37v10M51 37v10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                {/* Lines on board */}
                <path d="M37 19h14M37 25h14M37 31h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                {/* Person silhouette */}
                <circle cx="15" cy="23" r="6.5" stroke="white" strokeWidth="2.5" />
                <path d="M5 41c0-5 4-8 10-8s10 3 10 8v8H5v-8z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
                {/* Pointer stick */}
                <path d="M21 33l8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="webinar-content">
              <h3>Webinar Series</h3>
              <p>
                Join us for one of four webinars on mental wellness for black farmers. Click the button to register. Next in the series.. <strong>Reclaiming the Land: Reshaping the Narrative of Black Farming.</strong>
              </p>
              <div className="webinar-actions">
                <a href="#register" className="btn-register">Register Now</a>
                <a href="#learn-more" className="btn-learn">Learn More</a>
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
                    { img: "goat.png", title: "Youth Training", desc: "Empowering the next generation with hands-on agricultural skills, leadership development, and farm-to-table knowledge rooted in cultural heritage." },
                    { img: "rice.png", title: "Sustainable Practices", desc: "Implementing eco-conscious farming methods that protect soil health, conserve water resources, and reduce environmental impact across every season." },
                    { img: "cow.png", title: "Community Engagement", desc: "Partnering with local organizations, schools, and families to build stronger food networks and foster a shared sense of responsibility for the land." },
                    { img: "food.png", title: "Food Autonomy", desc: "Supporting communities in growing and accessing their own nutritious food, reducing dependence on external supply chains and promoting self-sufficiency." },
                    { img: "potato.png", title: "Regenerative Agriculture", desc: "Restoring ecosystem vitality through cover cropping, composting, and biodiversity practices that rebuild the land for generations to come." },
                  ].map((s) => (
                    <div className="swiper-slide" key={s.title}>
                      <div className="services-style-one">
                        <div className="thumb">
                          <img src={`/assets/img/focus/${s.img}`} alt={s.title} />
                        </div>
                        <h5><a href="#">{s.title}</a></h5>
                        <p>{s.desc}</p>
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
      <div className="choose-us-style-one-area overflow-hidden default-padding" style={{ background: "#fffaf2" }}>
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
      <div className="testimonials-area default-padding" style={{
        background: "linear-gradient(135deg, #0f2d1f 0%, #1a4a2e 40%, #1f5a35 70%, #153d25 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Subtle decorative overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(73,167,96,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%)",
          pointerEvents: "none",
        }} />
        <style>{`
          .testimonials-area .testimonial-style-two p {
            color: rgba(255,255,255,0.92) !important;
            font-size: 20px;
          }
          .testimonials-area .testimonial-style-two h4 {
            color: #fff !important;
          }
          .testimonials-area .testimonial-style-two span {
            color: #82c45a !important;
          }
          .testimonials-area .testimonial-info h4 {
            color: #fff !important;
          }
        `}</style>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row align-center">
            <div className="col-lg-5">
              <div className="testimonial-info text-center" style={{ position: "relative" }}>
                {/* Center Circle Image */}
                <div className="center-circle-img" style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  zIndex: 0,
                  boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
                  border: "4px solid rgba(130,196,90,0.5)"
                }}>
                  <img src="/assets/img/testimonial/1.jpeg" alt="Organic Farm Center" style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    position: "static",
                    boxShadow: "none",
                    padding: 0,
                    background: "none",
                    filter: "brightness(0.65) contrast(1.1)"
                  }} />
                </div>
                <h4 style={{ zIndex: 2, position: "relative", color: "#fff", textShadow: "0 2px 12px rgba(0,0,0,0.9)" }}>People Says</h4>
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
                            <img src={t.image} alt={t.name} style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "12px", flexShrink: 0, border: "2px solid rgba(130,196,90,0.6)" }} />
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

      {/* ── OUR PRESIDENT SAID ── */}
      <div className="president-said-area" style={{
        padding: "100px 0",
        background: "linear-gradient(160deg, #05111a 0%, #092232 35%, #0d3347 65%, #071828 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative radial glows */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse at 10% 50%, rgba(240,192,64,0.08) 0%, transparent 55%), radial-gradient(ellipse at 90% 30%, rgba(13,83,120,0.25) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        {/* Top gold accent line */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "4px",
          background: "linear-gradient(90deg, transparent 0%, #c9a84c 30%, #f0d080 60%, #c9a84c 80%, transparent 100%)",
        }} />
        <style>{`
          .president-said-area .president-quote-wrap {
            display: flex;
            align-items: center;
            gap: 60px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.09);
            border-radius: 20px;
            padding: 60px 60px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 24px 80px rgba(0,0,0,0.45);
            backdrop-filter: blur(4px);
          }
          .president-said-area .president-quote-wrap::before {
            content: "\\201C";
            font-size: 280px;
            color: rgba(201,168,76,0.09);
            font-family: 'Georgia', serif;
            line-height: 1;
            position: absolute;
            top: -40px;
            left: 20px;
            pointer-events: none;
          }
          .president-said-area .president-photo {
            flex-shrink: 0;
            position: relative;
          }
          .president-said-area .president-photo img {
            width: 260px;
            height: 260px;
            border-radius: 14px;
            object-fit: cover;
            border: 4px solid rgba(201,168,76,0.45);
            box-shadow: 0 20px 60px rgba(0,0,0,0.55), 0 0 0 8px rgba(201,168,76,0.08);
          }
          .president-said-area .president-photo .badge-tag {
            position: absolute;
            bottom: 8px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #c9a84c, #f0d080);
            color: #0a1a08;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 2px;
            text-transform: uppercase;
            padding: 5px 16px;
            border-radius: 20px;
            white-space: nowrap;
            box-shadow: 0 4px 14px rgba(201,168,76,0.4);
          }
          .president-said-area .president-content {
            flex: 1;
            position: relative;
            z-index: 1;
          }
          .president-said-area .president-content .section-tag {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #c9a84c;
            margin-bottom: 20px;
          }
          .president-said-area .president-content .section-tag::before {
            content: "";
            display: inline-block;
            width: 34px;
            height: 2px;
            background: linear-gradient(90deg, #c9a84c, #f0d080);
            border-radius: 2px;
          }
          .president-said-area .president-content blockquote {
            font-size: 22px;
            font-weight: 500;
            line-height: 1.75;
            color: rgba(255,255,255,0.90);
            margin: 0 0 28px;
            font-style: italic;
            border-left: 3px solid rgba(201,168,76,0.5);
            padding-left: 20px;
          }
          .president-said-area .president-content .president-name {
            font-size: 19px;
            font-weight: 800;
            color: #fff;
            margin: 0 0 5px;
          }
          .president-said-area .president-content .president-role {
            font-size: 13px;
            color: rgba(255,255,255,0.50);
            font-weight: 500;
            letter-spacing: 0.5px;
          }
          .president-said-area .president-content .sign {
            margin-top: 18px;
            height: 48px;
            opacity: 0.75;
            filter: brightness(10);
          }
          @media (max-width: 768px) {
            .president-said-area .president-quote-wrap {
              flex-direction: column;
              text-align: center;
              padding: 40px 28px;
              gap: 30px;
            }
            .president-said-area .president-content .section-tag {
              justify-content: center;
            }
            .president-said-area .president-content blockquote {
              font-size: 18px;
              border-left: none;
              padding-left: 0;
              border-top: 3px solid rgba(201,168,76,0.5);
              padding-top: 16px;
            }
          }
        `}</style>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="president-quote-wrap">
            <div className="president-photo">
              <img src="/assets/img/president.jpg" alt="President of Adesco Western Ranch"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x200/4a7c59/ffffff?text=President"; }} />
              <span className="badge-tag">President</span>
            </div>
            <div className="president-content">
              <span className="section-tag">Our President Said</span>
              <blockquote>
                "At Adesco Western Ranch, our mission goes beyond farming — we are building a legacy of resilience, equity, and sustainability. Every acre we tend, every community we serve, is a testament to the belief that agriculture can be a powerful force for social justice and environmental stewardship."
              </blockquote>
              <p className="president-name">Timothy Adekola</p>
              <p className="president-role">President &amp; Founder, Adesco Western Ranch Ltd.</p>
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
            <h2>Farm Gallery</h2>
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

        {/* More Photos Button */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href="/gallery"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--color-primary, #4a7c59)",
              color: "#fff",
              padding: "14px 36px",
              borderRadius: "6px",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              letterSpacing: "0.5px",
              transition: "background 0.25s, transform 0.2s",
              boxShadow: "0 4px 18px rgba(74,124,89,0.25)",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#3d6a4a"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-primary, #4a7c59)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
          >
            <i className="fas fa-images"></i>
            More Photos
          </a>
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
      <div className="fun-facts-area default-padding" style={{ background: "#f5f9f0" }}>
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
                  <h2 className="title">Delivering value <br /> since 10 Years</h2>
                </div>
              </div>
              <div className="col-lg-8 fun-fact-style-one text-end">
                <div className="row">
                  {[
                    { val: "12", unit: "K", label: "Tons of Fresh Produce" },
                    { val: "98", unit: "%", label: "Happy Community Members" },
                    { val: "68", unit: "K", label: "Families Fed & Supported" },
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
      <div className="blog-area home-blog blog-grid default-padding bottom-less" style={{ background: "#f0f7f2" }}>
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
    </>
  );
}

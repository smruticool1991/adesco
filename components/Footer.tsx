"use client"

import React from 'react'

export default function Footer() {
  return (
    <div>
              {/* ── FOOTER ── */}
      <footer className="bg-dark text-light" style={{ backgroundImage: "url(/assets/img/shape/brush-down.png)" }}>
        <div className="container">
          <div className="f-items default-padding">
            <div className="row">
              <div className="col-lg-4 col-md-6 item">
                <div className="footer-item about">
                  <img className="logo" src="/assets/img/logo-light2.png" alt="Logo" />
                  <p>Happen active county. Winding morning ambition shyness evident to poor. Because elderly new to the point to main success.</p>
                  {/* <form action="#">
                    <input type="email" placeholder="Your Email" className="form-control" name="email" />
                    <button type="submit"> Go</button>
                  </form> */}
                </div>
              </div>
              <div className="col-lg-2 col-md-6 item">
                <div className="footer-item link">
                  <h4 className="widget-title">Explore</h4>
                  <ul>
                    {[
                      { label: "About Us",      href: "/about-us"   },
                      { label: "Meet Our Team", href: "/about-us#team" },
                      { label: "News & Media",  href: "/blog"       },
                      { label: "Contact Us",    href: "/contact-us" },
                      { label: "Volunteers",    href: "/contact-us" },
                    ].map((l) => (
                      <li key={l.label}><a href={l.href}>{l.label}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 item">
                <div className="footer-item recent-post">
                  <h4 className="widget-title">Recent Posts</h4>
                  <ul>
                    <li>
                      <div className="thumb"><a href="/blog/goat-banking-program-changing-lives-rural-alberta"><img src="/assets/img/initiatives/goat-banking.jpg" alt="Goat Banking" /></a></div>
                      <div className="info">
                        <div className="meta-title"><span className="post-date">June 10, 2026</span></div>
                        <h5><a href="/blog/goat-banking-program-changing-lives-rural-alberta">How the Goat Banking Program is Changing Lives in Rural Alberta</a></h5>
                      </div>
                    </li>
                    <li>
                      <div className="thumb"><a href="/blog/preserving-heritage-seeds-why-every-variety-matters"><img src="/assets/img/about2.webp" alt="Cultural Seeds" /></a></div>
                      <div className="info">
                        <div className="meta-title"><span className="post-date">May 28, 2026</span></div>
                        <h5><a href="/blog/preserving-heritage-seeds-why-every-variety-matters">Preserving Heritage Seeds: Why Every Variety Matters</a></h5>
                      </div>
                    </li>
                    <li>
                      <div className="thumb"><a href="/blog/what-regenerative-agriculture-means-on-an-alberta-ranch"><img src="/assets/img/journey.webp" alt="Regenerative Farming" /></a></div>
                      <div className="info">
                        <div className="meta-title"><span className="post-date">May 14, 2026</span></div>
                        <h5><a href="/blog/what-regenerative-agriculture-means-on-an-alberta-ranch">What Regenerative Agriculture Actually Means on an Alberta Ranch</a></h5>
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
            {/* ── Follow Us On ── */}
            <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
                Follow Us On
              </span>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/adescowesternranchltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "9px",
                    background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                    color: "#fff",
                    padding: "9px 18px",
                    borderRadius: "6px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  <i className="fab fa-instagram" style={{ fontSize: "18px" }}></i>
                  Instagram
                </a>
                {/* Google My Business */}
                <a
                  href="https://www.google.com/search?q=Adesco+Western+Ranch+Ltd&sca_esv=e1870cce4b49432d&rlz=1C1CHBF_enIN930IN930&sxsrf=ANbL-n6MLHaxfZtA4IzEfENevZT8CRlQZw%3A1781536980009&ei=1BgwascR4ai-vQ-zkrnYDw&biw=1280&bih=585&ved=0ahUKEwjHy-O2xomVAxVhlK8BHTNJDvsQ4dUDCBI&uact=5&oq=Adesco+Western+Ranch+Ltd&gs_lp=Egxnd3Mtd2l6LXNlcnAiGEFkZXNjbyBXZXN0ZXJuIFJhbmNoIEx0ZDIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIXEC4Y3AYYuAYY2gYY2AIYyAMYsAPYAQFIhQZQAFgAcAF4AZABAJgBAKABAKoBALgBA8gBAJgCAaACEJgDAIgGAZAGCboGBAgBGBmSBwExoAcAsgcAuAcAwgcDMy0xyAcNgAgB&sclient=gws-wiz-serp"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "9px",
                    background: "#fff",
                    color: "#444",
                    padding: "9px 18px",
                    borderRadius: "6px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4285F4" d="M24 9.5c3.1 0 5.6 1.1 7.6 2.9l5.6-5.6C33.7 3.5 29.2 1.5 24 1.5 14.9 1.5 7.2 7.2 4.1 15.1l6.6 5.1C12.3 13.7 17.6 9.5 24 9.5z"/>
                    <path fill="#34A853" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.4c-.5 2.7-2.1 5-4.4 6.6l6.8 5.3c4-3.7 6.3-9.2 6.3-15.9z"/>
                    <path fill="#FBBC05" d="M10.7 28.6A14.6 14.6 0 0 1 9.5 24c0-1.6.3-3.2.8-4.6l-6.6-5.1A22.5 22.5 0 0 0 1.5 24c0 3.6.9 7 2.4 10l6.8-5.4z"/>
                    <path fill="#EA4335" d="M24 46.5c5.2 0 9.5-1.7 12.7-4.6l-6.8-5.3c-1.7 1.2-3.8 1.9-5.9 1.9-6.4 0-11.7-4.3-13.3-10l-6.8 5.4C7.2 40.8 14.9 46.5 24 46.5z"/>
                  </svg>
                  Google
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@AdescoWesternRanch"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "9px",
                    background: "#FF0000",
                    color: "#fff",
                    padding: "9px 18px",
                    borderRadius: "6px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  <i className="fab fa-youtube" style={{ fontSize: "18px" }}></i>
                  YouTube
                </a>
              </div>
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
    </div>
  )
}

"use client"

import React, { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [initiativesOpen, setInitiativesOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
    setInitiativesOpen(false)
  }

  return (
    <div>
      <header>
        <nav className="navbar mobile-sidenav nav-blur navbar-sticky navbar-default validnavs white navbar-fixed no-background">
          <div className="container-full d-flex justify-content-between align-items-center">

            {/* ── Hamburger + Logo ── */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                onClick={() => setMenuOpen(true)}
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="/">
                <img className="logo logo-display" alt="Logo" src="/assets/img/logo-light.png" style={{ width: "145px", height: "auto" }} />
                <img className="logo logo-scrolled" alt="Logo" src="/assets/img/logo.png" style={{ height: "100px" }} />
              </a>
            </div>

            {/* ── Nav Menu ── */}
            <div
              className={`collapse navbar-collapse collapse-mobile${menuOpen ? " in" : ""}`}
              id="navbar-menu"
            >
              <img alt="Logo" src="/assets/img/logo.png" />
              <button
                type="button"
                className="navbar-toggle"
                onClick={closeMenu}
              >
                <i className="fa fa-times"></i>
              </button>

              <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li>
                  <a href="/" onClick={closeMenu}>Home</a>
                </li>
                <li>
                  <a href="/about-us" onClick={closeMenu}>Who We Are</a>
                </li>
                <li>
                  <a href="/brands" onClick={closeMenu}>Brands &amp; Products</a>
                </li>

                {/* Initiatives dropdown */}
                <li className={`dropdown${initiativesOpen ? " open" : ""}`}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setInitiativesOpen((o) => !o)
                    }}
                  >
                    Initiatives <i className="fas fa-chevron-down" style={{ fontSize: "10px", marginLeft: "4px" }}></i>
                  </a>
                  <ul className="dropdown-menu" style={initiativesOpen ? { display: "block" } : {}}>
                    <li><a href="/goat-banking" onClick={closeMenu}>Goat Banking</a></li>
                    <li><a href="/cattle-banking" onClick={closeMenu}>Cattle Banking</a></li>
                    <li><a href="/cultural-seeds" onClick={closeMenu}>Cultural Seeds</a></li>
                    <li><a href="/chicken-banking" onClick={closeMenu}>Chicken Banking</a></li>
                    <li><a href="/seasonal-vegetables" onClick={closeMenu}>Seasonal Vegetables</a></li>
                  </ul>
                </li>

                <li>
                  <a href="/blog" onClick={closeMenu}>Media</a>
                </li>
                <li>
                  <a href="/contact-us" onClick={closeMenu}>Contact Us</a>
                </li>
                <li>
                  <div className="button" style={{ marginLeft: "30px" }}>
                    <a
                      className="btn btn-theme btn-md radius animation"
                      style={{ backgroundColor: "#fc4b00" }}
                      href="/contact-us"
                      onClick={closeMenu}
                    >
                      Join
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* ── WhatsApp icon ── */}
            <div className="attr-right">
              <div className="attr-nav">
                <ul>
                  <li>
                    <a href="https://wa.me/17802970185" target="_blank" rel="noopener noreferrer">
                      <i style={{ fontSize: "36px", color: "#25D366" }} className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          {/* Overlay to close menu when clicking outside */}
          {menuOpen && (
            <div
              className="overlay-screen"
              onClick={closeMenu}
              style={{ display: "block" }}
            />
          )}
        </nav>
      </header>
    </div>
  )
}

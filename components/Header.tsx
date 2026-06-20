import React from 'react'

export default function Header() {
  return (
    <div>
        <header>
                <nav className="navbar mobile-sidenav nav-blur navbar-sticky navbar-default validnavs white navbar-fixed no-background">
                  <div className="container-full d-flex justify-content-between align-items-center">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                      </button>
                      <a className="navbar-brand" href="/" data-discover="true">
                        <img className="logo logo-display" alt="Logo" src="/assets/img/logo-light.png" style={{width: "145px", height: "auto"}}/>
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
                          <a className="dropdown-toggle" data-toggle="dropdown" href="/about-us" data-discover="true">Who We Are</a>
                        </li>
                        <li>
                          <a className="dropdown-toggle" data-toggle="dropdown" href="/brands" data-discover="true">Brands & Products</a>
                        </li>
                        <li className="dropdown">
                          <a className="dropdown-toggle" data-toggle="dropdown" href="#" data-discover="true">Initiatives</a>
                          <ul className="dropdown-menu">
                            <li><a href="/goat-banking" data-discover="true">Goat Banking</a></li>
                            <li><a href="/cattle-banking" data-discover="true">Cattle Banking</a></li>
                            <li><a href="/cultural-seeds" data-discover="true">Cultural Seeds</a></li>
                            <li><a href="/chicken-banking" data-discover="true">Chicken Banking</a></li>
                            <li><a href="/seasonal-vegetables" data-discover="true">Seasonal Vegetables</a></li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-toggle" data-toggle="dropdown" href="/blog" data-discover="true">Media</a>
                        </li>
                        <li>
                          <a className="dropdown-toggle" data-toggle="dropdown" href="/contact-us" data-discover="true">Contact us</a>
                        </li>
                        <li>
                          <div className="button" style={{marginLeft: "30px"}}>
                            <a className="btn btn-theme btn-md radius animation" style={{backgroundColor: "#fc4b00"}} href="#about">Join</a>
                          </div>
                        </li>
                       </ul>
                      </div>
                      
                      <div className="attr-right"><div className="attr-nav"><ul><li><a href="https://wa.me/17802970185" target="_blank" rel="noopener noreferrer"><i style={{fontSize: "36px", color: "#25D366"}} className="fab fa-whatsapp"></i></a></li></ul></div></div></div><div className="overlay-screen"></div></nav>
                      </header>
    </div>
  )
}

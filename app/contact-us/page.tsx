import React from 'react'

export default function page() {
  return (
    <div>
       <div className="breadcrumb-area text-center shadow dark bg-fixed text-light" style={{ backgroundImage: "url(assets/img/banner/banner12.webp)" }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1>Contact us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                            <li className="active">Contact Us</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <div className="contact-area default-padding" style={{backgroundImage: `url(assets/img/shape/28.png)`}}>
        <div className="container">
            <div className="row align-center">
                
                <div className="col-tact-stye-one col-lg-7 mb-md-50">
                    <div className="contact-form-style-one">
                        <h5 className="sub-title">Have Questions?</h5>
                        <h2 className="heading">Send us a Massage</h2>
                        <form action="assets/mail/contact.php" method="POST" className="contact-form contact-form">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" id="name" name="name" placeholder="Name" type="text"/>
                                        <span className="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" id="email" name="email" placeholder="Email*" type="email"/>
                                        <span className="alert-error"></span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text"/>
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
                        <h2>
                            Contact 
                            <span>
                                Information
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M14.4,111.6c0,0,202.9-33.7,471.2,0c0,0-194-8.9-397.3,24.7c0,0,141.9-5.9,309.2,0"></path></svg>
                            </span>
                        </h2>
                        <p>
                            Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.
                        </p>
                        <ul>
                            <li className="wow fadeInUp">
                                <div className="icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="content">
                                    <h5 className="title">Hotline</h5>
                                    <a href="tel:+1 (780) 297-0185">+1 (780) 297-0185</a><br/>
                                    <a href="tel:+1 (403) 830-0579">+1 (403) 830-0579</a>

                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay="300ms">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info">
                                    <h5 className="title">Our Location</h5>
                                    <p>
                                        51217 Range road, 63 Tomahawk, Alberta T0E 2H0 Canada
                                    </p>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay="500ms">
                                <div className="icon">
                                    <i className="fas fa-envelope-open-text"></i>
                                </div>
                                <div className="info">
                                    <h5 className="title">Official Email</h5>
                                    <a href="mailto:tim.adekola1@gmail.com">tim.adekola1@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>

    </div>
  )
}

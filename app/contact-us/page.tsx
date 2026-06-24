"use client"

import React, { useState } from 'react'

const CONTACT_URL = process.env.NODE_ENV === 'development' ? '/api/contact' : '/contact-mail.php'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(CONTACT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to send message.')
      }
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <div className="breadcrumb-area text-center shadow dark bg-fixed text-light" style={{ backgroundImage: "url(/assets/img/banner/banner-contact.webp)" }}>
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

      <div className="contact-area default-padding" style={{ backgroundImage: `url(assets/img/shape/28.png)` }}>
        <div className="container">
          <div className="row align-center">

            <div className="col-tact-stye-one col-lg-7 mb-md-50">
              <div className="contact-form-style-one">
                <h5 className="sub-title">Have Questions?</h5>
                <h2 className="heading">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form-react">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email*"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                          type="text"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group comments">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Tell Us About Project *"
                          required
                          value={form.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      {status === 'sending' && (
                        <span style={{
                          display: 'inline-block',
                          width: '22px',
                          height: '22px',
                          border: '3px solid rgba(0,0,0,0.15)',
                          borderTopColor: '#347604',
                          borderRadius: '50%',
                          animation: 'spin 0.7s linear infinite',
                          flexShrink: 0,
                        }} />
                      )}
                      <button type="submit" name="submit" id="submit" disabled={status === 'sending'}>
                        <i className="fa fa-paper-plane"></i>{' '}
                        {status === 'sending' ? 'Sending...' : 'Get in Touch'}
                      </button>
                    </div>
                  </div>
                  <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                  <div className="col-lg-12 alert-notification">
                    {status === 'success' && (
                      <div className="alert-msg" style={{ color: '#28a745', marginTop: '12px' }}>
                        Your message has been sent successfully!
                      </div>
                    )}
                    {status === 'error' && (
                      <div className="alert-msg" style={{ color: '#dc3545', marginTop: '12px' }}>
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

            <div className="col-tact-stye-one col-lg-5 pl-60 pl-md-15 pl-xs-15">
              <div className="contact-style-one-info">
                <h2>
                  Contact
                  <span style={{ marginLeft: "8px" }}>
                    Information
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M14.4,111.6c0,0,202.9-33.7,471.2,0c0,0-194-8.9-397.3,24.7c0,0,141.9-5.9,309.2,0"></path></svg>
                  </span>
                </h2>
                <p>
                  We'd love to hear from you! Whether you have a question about our services, need support, want to provide feedback, or discuss a business opportunity, our team is here to help.
                </p>
                <ul>
                  <li className="wow fadeInUp">
                    <div className="icon"><i className="fas fa-phone-alt"></i></div>
                    <div className="content">
                      <h5 className="title">Hotline</h5>
                      <a href="tel:+1 (780) 297-0185">+1 (780) 297-0185</a><br />
                      <a href="tel:+1 (403) 830-0579">+1 (403) 830-0579</a>
                    </div>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="300ms">
                    <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="info">
                      <h5 className="title">Our Location</h5>
                      <p>51217 Range road, 63 Tomahawk, Alberta T0E 2H0 Canada</p>
                    </div>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="500ms">
                    <div className="icon"><i className="fas fa-envelope-open-text"></i></div>
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

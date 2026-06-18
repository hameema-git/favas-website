import { useState } from 'react'
import useReveal from '../components/useReveal'
import Footer from '../components/Footer'
import { COMPANY, SERVICES } from '../data/content'
import './Contact.css'

export default function Contact() {
  useReveal()
  const [form, setForm] = useState({ name:'', phone:'', email:'', service:'', message:'' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.phone || !form.service) {
      alert('Please fill in your name, phone number and select a service.')
      return
    }
    setSubmitted(true)
    setForm({ name:'', phone:'', email:'', service:'', message:'' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="page-hero-eyebrow"><div className="eyebrow-dot" style={{background:'var(--g4)'}}/>Reach Us</div>
          <h1>Contact Easy Solutions</h1>
          <p>Have a question or need a service? We will get back within 24 hours — often much sooner.</p>
        </div>
      </div>

      <section className="section-pad" style={{background:'#fff'}}>
        <div className="container">
          <div className="contact-grid">
            {/* Info Column */}
            <div>
              <div className="ci-card reveal">
                <h3>Get In Touch</h3>
                <div className="ci-item"><div className="ci-icon">📍</div><div><div className="ci-label">Office</div><div className="ci-value">Easy Solutions<br/>{COMPANY.address}</div></div></div>
                <div className="ci-item"><div className="ci-icon">📞</div><div><div className="ci-label">Phone / WhatsApp</div><div className="ci-value"><a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a></div></div></div>
                <div className="ci-item"><div className="ci-icon">✉️</div><div><div className="ci-label">Email</div><div className="ci-value"><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div></div></div>
                <div className="ci-item"><div className="ci-icon">🕐</div><div><div className="ci-label">Hours</div><div className="ci-value">{COMPANY.hours}</div></div></div>
                <div className="ci-social">
                  <a href={COMPANY.social.facebook} target="_blank" rel="noreferrer" className="ci-social-btn">f</a>
                  <a href={COMPANY.social.linkedin} target="_blank" rel="noreferrer" className="ci-social-btn">in</a>
                  <a href={COMPANY.social.instagram} target="_blank" rel="noreferrer" className="ci-social-btn">📷</a>
                </div>
              </div>
              <a href={`https://wa.me/${COMPANY.phoneRaw}?text=Hi%2C%20I%20want%20to%20enquire%20about%20Easy%20Solutions`} target="_blank" rel="noreferrer" className="wa-full-btn reveal delay-1">
                💬 Chat on WhatsApp
              </a>
              {/* Map */}
              <div className="map-block reveal delay-2">
                <div className="map-visual">
                  <svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',inset:0,width:'100%',height:'100%'}}>
                    <rect width="500" height="240" fill="#e4ede7"/>
                    <line x1="0" y1="120" x2="500" y2="120" stroke="#fff" strokeWidth="14" opacity=".7"/>
                    <line x1="250" y1="0" x2="250" y2="240" stroke="#fff" strokeWidth="8" opacity=".6"/>
                    <line x1="0" y1="72" x2="500" y2="72" stroke="#fff" strokeWidth="5" opacity=".4"/>
                    <line x1="0" y1="178" x2="500" y2="178" stroke="#fff" strokeWidth="5" opacity=".4"/>
                    <line x1="150" y1="0" x2="150" y2="240" stroke="#fff" strokeWidth="5" opacity=".4"/>
                    <line x1="380" y1="0" x2="380" y2="240" stroke="#fff" strokeWidth="5" opacity=".4"/>
                    <rect x="20" y="18" width="110" height="44" rx="4" fill="#c8d9cc" opacity=".8"/>
                    <rect x="170" y="18" width="60" height="44" rx="4" fill="#c8d9cc" opacity=".7"/>
                    <rect x="270" y="18" width="90" height="44" rx="4" fill="#c8d9cc" opacity=".7"/>
                    <rect x="400" y="18" width="80" height="44" rx="4" fill="#c8d9cc" opacity=".6"/>
                    <rect x="20" y="136" width="110" height="84" rx="4" fill="#c8d9cc" opacity=".7"/>
                    <rect x="170" y="136" width="60" height="34" rx="4" fill="#c8d9cc" opacity=".6"/>
                    <rect x="270" y="136" width="90" height="84" rx="4" fill="#c8d9cc" opacity=".7"/>
                    <rect x="400" y="136" width="80" height="84" rx="4" fill="#c8d9cc" opacity=".6"/>
                    <ellipse cx="250" cy="126" rx="15" ry="5" fill="rgba(45,106,79,.22)"/>
                    <path d="M250 82C238 82 228 92 228 105C228 118 250 140 250 140C250 140 272 118 272 105C272 92 262 82 250 82Z" fill="#2D6A4F"/>
                    <circle cx="250" cy="105" r="7" fill="#fff"/>
                  </svg>
                </div>
                <div className="map-footer">
                  <span className="map-addr">📍 Easy Solutions, {COMPANY.location}</span>
                  <a className="map-link" href={COMPANY.mapsLink} target="_blank" rel="noreferrer">Open in Maps →</a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="form-card reveal delay-1">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <div className="fg"><label>Your Name *</label><input name="name" value={form.name} onChange={handleChange} placeholder="Rajan Menon"/></div>
                  <div className="fg"><label>Phone *</label><input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX"/></div>
                </div>
                <div className="fg"><label>Email</label><input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com"/></div>
                <div className="fg">
                  <label>Service Required *</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    {SERVICES.map(s=><option key={s.id} value={s.title}>{s.title}</option>)}
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>
                <div className="fg"><label>Message</label><textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your requirement..."/></div>
                <button type="submit" className="form-submit-btn">Send Message →</button>
                {submitted && <div className="form-ok">✅ Message received! We will get back to you within 24 hours.</div>}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

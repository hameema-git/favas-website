import { Link } from 'react-router-dom'
import Logo from './Logo'
import { COMPANY, SERVICES } from '../data/content'

export default function Footer() {
  const uniqueServices = SERVICES.slice(0, 6)
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10 }}>
              <Logo size={32} />
              <span className="footer-brand">
                {COMPANY.name.split(' ')[0]} <span>{COMPANY.name.split(' ')[1]}</span>
              </span>
            </div>
            <p className="footer-tagline">
              Your trusted partner for GST, Income Tax, PAN, TAN, DSC, Accounting and Company Registration in {COMPANY.location}.
            </p>
            <div className="footer-social">
              <a href={COMPANY.social.facebook} target="_blank" rel="noreferrer" className="footer-social-btn">f</a>
              <a href={COMPANY.social.linkedin} target="_blank" rel="noreferrer" className="footer-social-btn">in</a>
              <a href={COMPANY.social.instagram} target="_blank" rel="noreferrer" className="footer-social-btn">📷</a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Quick Links</div>
            <div className="footer-links">
              {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link key={to} to={to}>{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              {uniqueServices.map((s) => (
                <Link key={s.id} to="/services">{s.title}</Link>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-list">
              <div>📍 {COMPANY.address}</div>
              <div>📞 {COMPANY.phone}</div>
              <div>✉️ {COMPANY.email}</div>
              <div>🕐 {COMPANY.hours}</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
          <span>Built by <strong style={{ color: 'rgba(255,255,255,.35)' }}>Code Leaf</strong></span>
        </div>
      </div>
    </footer>
  )
}

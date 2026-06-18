import { useNavigate } from 'react-router-dom'
import useReveal from '../components/useReveal'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'
import { COMPANY, SERVICES } from '../data/content'
import './Services.css'

const CATEGORIES = [...new Set(SERVICES.map(s => s.category))]

export default function Services() {
  useReveal()
  const nav = useNavigate()
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="page-hero-eyebrow"><div className="eyebrow-dot" style={{background:'var(--g4)'}}/>What We Offer</div>
          <h1>Our Services</h1>
          <p>12 expert financial services for individuals, freelancers, startups &amp; businesses across Kerala.</p>
        </div>
      </div>

      <section className="section-pad" style={{background:'#fff'}}>
        <div className="container">
          {CATEGORIES.map(cat => {
            const catServices = SERVICES.filter(s => s.category === cat)
            return (
              <div key={cat} className="svc-category">
                <div className="svc-cat-label">{cat}</div>
                <div className="svc-full-grid">
                  {catServices.map((s,i) => (
                    <ServiceCard key={s.id} service={s} variant="full" delay={i+1}/>
                  ))}
                </div>
              </div>
            )
          })}

          <div className="svc-cta-box reveal">
            <h3>Not sure which service you need?</h3>
            <p>Talk to us free — we will assess your situation and recommend the right solution.</p>
            <div className="svc-cta-btns">
              <button className="btn btn-green" onClick={()=>nav('/contact')}>Get Free Advice</button>
              <a className="btn btn-wa" href={`https://wa.me/${COMPANY.phoneRaw}`} target="_blank" rel="noreferrer">💬 WhatsApp Now</a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

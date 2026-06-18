import { useState } from 'react'
import useReveal from '../components/useReveal'
import Footer from '../components/Footer'
import { GALLERY } from '../data/content'
import './Gallery.css'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'activity', label: 'Activities' },
  { key: 'success', label: 'Client Success' },
  { key: 'update', label: 'Updates' },
]

export default function Gallery() {
  useReveal()
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? GALLERY : GALLERY.filter(g => g.category === active)

  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="page-hero-eyebrow"><div className="eyebrow-dot" style={{background:'var(--g4)'}}/>Gallery &amp; Updates</div>
          <h1>Our Activities</h1>
          <p>Client milestones, company activities, and the latest from Easy Solutions.</p>
        </div>
      </div>

      <section className="section-pad" style={{background:'#fff'}}>
        <div className="container">
          <div className="gallery-filters">
            {FILTERS.map(f => (
              <button key={f.key} className={`gfbtn ${active===f.key?'active':''}`} onClick={()=>setActive(f.key)}>
                {f.label}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {filtered.map((g,i) => (
              <div key={g.id} className={`gallery-card reveal delay-${(i%3)+1}`}>
                <div className="gallery-img" style={{background: g.image ? undefined : g.bgColor}}>
                  {g.image
                    ? <img src={g.image} alt={g.title}/>
                    : <span style={{fontSize:40}}>{g.icon}</span>
                  }
                </div>
                <div className="gallery-body">
                  <div className="gallery-tag">{g.category}</div>
                  <div className="gallery-title">{g.title}</div>
                  <p className="gallery-desc">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

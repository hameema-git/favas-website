import useReveal from '../components/useReveal'
import TeamCard from '../components/TeamCard'
import Footer from '../components/Footer'
import { COMPANY, TEAM, MISSION_VISION, TRACK_RECORD } from '../data/content'
import './About.css'

export default function About() {
  useReveal()
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="page-hero-eyebrow"><div className="eyebrow-dot" style={{background:'var(--g4)'}}/>Who We Are</div>
          <h1>About Easy Solutions</h1>
          <p>A Kochi-based accounting &amp; compliance firm making finance simple, accurate, and affordable for every client across Kerala.</p>
        </div>
      </div>

      <section className="section-pad" style={{background:'#fff'}}>
        <div className="container">
          <div className="about-grid">
            <div className="about-vis-card reveal">
              <div>
                <div className="avc-logo">Easy<br/><span>Solutions</span></div>
                <div className="avc-sub">{COMPANY.location} · Est. {COMPANY.established}</div>
                <div className="avc-badges">
                  {['✓ GST Practitioner','✓ CA Assisted','✓ DSC Agent','✓ 8+ Years','✓ MSME Certified'].map(b=>(
                    <div key={b} className="avc-badge">{b}</div>
                  ))}
                </div>
              </div>
              <div className="avc-stats">
                <div className="avc-stat"><div className="avc-n">500+</div><div className="avc-l">Clients</div></div>
                <div className="avc-stat"><div className="avc-n">8 Yrs</div><div className="avc-l">Experience</div></div>
                <div className="avc-stat"><div className="avc-n">₹50L+</div><div className="avc-l">Tax Saved</div></div>
              </div>
            </div>
            <div>
              <div className="eyebrow"><div className="eyebrow-dot"/>Company Profile</div>
              <h2 className="section-heading reveal">Simplifying Finance<br/>for Kerala Businesses</h2>
              <div style={{width:38,height:3,background:'var(--g6)',borderRadius:2,marginBottom:22}}/>
              <p className="about-para reveal">Easy Solutions was founded with one purpose: to make financial compliance genuinely accessible — for the corner shop in Fort Kochi, the freelance developer in Infopark, and the growing manufacturer in Thrissur. We operate as a freelance consultancy, so every client gets direct personal attention from our principal consultant, not a junior from a large firm.</p>
              <p className="about-para reveal delay-1">We stay current with every change in GST law, Income Tax Act, PAN/TAN rules, DSC regulations, and Company Law. We explain everything in plain language — no jargon, no hidden costs, no surprises in your bill.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{background:'var(--g0)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:38}}>
            <div className="eyebrow" style={{justifyContent:'center'}}><div className="eyebrow-dot"/>Purpose</div>
            <h2 className="section-heading">Mission &amp; Vision</h2>
          </div>
          <div className="mv-grid">
            {MISSION_VISION.map((m,i)=>(
              <div key={i} className={`mv-card ${m.dark?'mv-dark':'mv-light'} reveal delay-${i+1}`}>
                <div className="mv-icon">{m.icon}</div>
                <div className="mv-title">{m.title}</div>
                <p className="mv-text">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{background:'#fff'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:44}}>
            <div className="eyebrow" style={{justifyContent:'center'}}><div className="eyebrow-dot"/>The Team</div>
            <h2 className="section-heading">Meet Our People</h2>
            <p className="section-sub" style={{textAlign:'center',margin:'0 auto'}}>A dedicated team with deep expertise in GST, taxation, PAN, TAN, DSC and compliance</p>
          </div>
          <div className="team-grid">
            {TEAM.map((m,i)=><TeamCard key={m.id} member={m} delay={i+1}/>)}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{background:'var(--g0)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:36}}>
            <div className="eyebrow" style={{justifyContent:'center'}}><div className="eyebrow-dot"/>Track Record</div>
            <h2 className="section-heading">By the Numbers</h2>
          </div>
          <div className="track-grid">
            {TRACK_RECORD.map((t,i)=>(
              <div key={i} className={`track-card reveal delay-${i+1}`}>
                <div className="track-n">{t.value}</div>
                <div className="track-l">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useReveal from '../components/useReveal'
import ServiceCard from '../components/ServiceCard'
import AIChat from '../components/AIChat'
import CertModal from '../components/CertModal'
import Footer from '../components/Footer'
import { COMPANY, STATS, SERVICES, TESTIMONIALS, CERTIFICATES, WHY_POINTS, WHY_STATS } from '../data/content'
import './Home.css'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    let c = 0; const step = Math.max(1, Math.ceil(value / 55))
    const tk = setInterval(() => {
      c = Math.min(c + step, value); el.textContent = c + suffix
      if (c >= value) clearInterval(tk)
    }, 28)
    return () => clearInterval(tk)
  }, [value, suffix])
  return <div className="stat-num" ref={ref}>0</div>
}

export default function Home() {
  useReveal()
  const nav = useNavigate()
  const [selectedCert, setSelectedCert] = useState(null)
  return (
    <>
      <section className="hero">
        <div className="hero-pattern"/>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left">
              <div className="hero-badge">
                <div className="pulse" style={{width:7,height:7,borderRadius:'50%',background:'#4ADE80',flexShrink:0}}/>
                Kochi's Trusted Financial Partner
              </div>
              <h1 className="hero-title">Complete GST &amp;<br/><em>Tax Solutions</em><br/>for Kerala</h1>
              <p className="hero-desc">{COMPANY.description}</p>
              <div className="hero-actions">
                <button className="btn btn-light" onClick={()=>nav('/contact')}>📞 Free Consultation</button>
                <button className="btn btn-ghost-w" onClick={()=>nav('/services')}>Our Services →</button>
              </div>
              <div className="hero-trust">
                {/* <div className="trust-avatars">
                  {['R','P','A','M'].map(l=><div key={l} className="trust-av">{l}</div>)}
                </div> */}
                <div className="trust-label">
                  <strong>500+ Satisfied Clients</strong>
                  across Kochi, Thrissur &amp; Kerala
                </div>
              </div>
            </div>
            <div className="hero-right">
              <div style={{position:'relative',width:'100%',maxWidth:378}}>
                {/* <div className="float-chip chip-tl">
                  <div className="chip-icon">✅</div>
                  <div><div className="chip-n">100%</div><div className="chip-l">Compliance Rate</div></div>
                </div> */}
                <div className="hero-card">
                  <div className="hc-header">
                    <div className="hc-logo-row">
                      <div className="hc-logo-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" stroke="#74C69D" strokeWidth="1"/>
                          <text x="8" y="11" textAnchor="middle" fill="#fff" fontSize="5" fontFamily="'Plus Jakarta Sans'" fontWeight="800">ES</text>
                        </svg>
                      </div>
                      <span className="hc-logo-text">Easy Solutions</span>
                    </div>
                    <div className="hc-status">
                      <div className="pulse" style={{width:6,height:6,borderRadius:'50%',background:'#4ADE80'}}/>Active
                    </div>
                  </div>
                  <div className="hc-big-label">Tax Saved This Quarter</div>
                  <div className="hc-big">₹2.4L</div>
                  <div className="hc-sub">for 12 clients this month</div>
                  <div className="hc-bars">
                    {[36,54,43,80,65,50,90].map((h,i)=>(
                      <div key={i} className={`hc-bar${h>70?' hi':h>55?' md':''}`} style={{height:`${h}%`}}/>
                    ))}
                  </div>
                  <div className="hc-months">
                    {['Sep','Oct','Nov','Dec','Jan','Feb','Mar'].map(m=><div key={m} className="hc-month">{m}</div>)}
                  </div>
                  {[['GST Return GSTR-3B','Filed ✓','done'],['Income Tax Return','Filed ✓','done'],['TDS Quarterly Return','Due Apr 30','warn']].map(([l,t,tp])=>(
                    <div key={l} className="hc-row">
                      <span className="hc-row-label">{l}</span>
                      <span className={`pill pill-${tp}`}>{t}</span>
                    </div>
                  ))}
                </div>
                <div className="float-chip chip-br">
                  <div className="chip-icon">📋</div>
                  <div><div className="chip-n">12 Services</div><div className="chip-l">All under one roof</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        <div className="container"><div className="stats-grid">
          {STATS.map((s,i)=>(
            <div key={i} className="stat-col">
              <Counter value={s.value} suffix={s.suffix}/>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div></div>
      </div>

      <section className="section-pad" style={{background:'#fff'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:48}}>
            <div className="eyebrow" style={{justifyContent:'center'}}><div className="eyebrow-dot"/>What We Do</div>
            <h2 className="section-heading">Complete Financial Services</h2>
            <p className="section-sub" style={{margin:'0 auto',textAlign:'center'}}>GST, Tax, PAN, TAN, DSC, Accounting &amp; more — all under one roof</p>
          </div>
          <div className="services-home-grid">
            {SERVICES.slice(0,8).map((s,i)=>(
              <ServiceCard key={s.id} service={s} variant="home" delay={i%4}/>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:34}}>
            <button className="btn btn-green" onClick={()=>nav('/services')}>View All 12 Services</button>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{background:'var(--g0)'}}>
        <div className="container">
          <div className="why-grid">
            <div className="why-vis reveal">
              <div className="why-main-card">
                <div className="wm-label">Why Easy Solutions</div>
                <div className="wm-title">Kerala's Most Trusted Accounting Partner</div>
                <div className="wm-stats-grid">
                  {WHY_STATS.map((s,i)=>(
                    <div key={i} className="wm-stat"><div className="wm-stat-n">{s.value}</div><div className="wm-stat-l">{s.label}</div></div>
                  ))}
                </div>
              </div>
              <div className="why-float">
                <div className="wf-icon">🏆</div>
                <div><div className="wf-n">₹50L+</div><div className="wf-l">Tax savings this year</div></div>
              </div>
            </div>
            <div>
              <div className="eyebrow"><div className="eyebrow-dot"/>Our Advantage</div>
              <h2 className="section-heading">Your Numbers,<br/>Our Responsibility</h2>
              <div style={{width:38,height:3,background:'var(--g6)',borderRadius:2,marginBottom:24}}/>
              <div className="why-points">
                {WHY_POINTS.map((p,i)=>(
                  <div key={i} className={`why-point reveal delay-${i+1}`}>
                    <div className="why-point-icon">{p.icon}</div>
                    <div><div className="why-point-title">{p.title}</div><div className="why-point-desc">{p.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{background:'#fff'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:44}}>
            <div className="eyebrow" style={{justifyContent:'center'}}><div className="eyebrow-dot"/>Our Credentials</div>
            <h2 className="section-heading">Trusted &amp; Certified</h2>
            <p className="section-sub" style={{textAlign:'center',margin:'8px auto 0',fontSize:14,color:'var(--sll)'}}>
              Click any certificate to view the original document
            </p>
          </div>
          <div className="cert-grid">
            {CERTIFICATES.map((c,i)=>(
              <div
                key={i}
                className={`cert-card reveal delay-${i+1} ${c.pdf !== undefined ? 'cert-clickable' : ''}`}
                onClick={() => setSelectedCert(c)}
                title={c.pdf ? `View ${c.title} certificate` : 'Certificate coming soon'}
              >
                <div className={`cert-badge cert-${c.color}`}>{c.icon}</div>
                <div className="cert-title">{c.title}</div>
                <div className="cert-desc">{c.desc}</div>
                <div className={`cert-tag cert-tag-${c.color}`}>{c.tag}</div>
                <div className="cert-view-hint">
                  {c.pdf ? '📄 View Certificate →' : '📄 Coming Soon'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}

      <section className="section-pad" style={{background:'var(--g0)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:44}}>
            <div className="eyebrow" style={{justifyContent:'center'}}><div className="eyebrow-dot"/>Client Stories</div>
            <h2 className="section-heading">What Our Clients Say</h2>
          </div>
          <div className="test-grid">
            {TESTIMONIALS.map((t,i)=>(
              <div key={t.id} className={`test-card reveal delay-${i+1}`}>
                <div className="test-stars">{'★'.repeat(t.stars)}</div>
                <div className="test-quote">"</div>
                <p className="test-text">{t.text}</p>
                <div className="test-author">
                  <div className="test-av">{t.initials}</div>
                  <div><div className="test-name">{t.name}</div><div className="test-role">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad ai-section">
        <div className="container">
          <div className="ai-grid">
            <div className="ai-left">
              {/* <div className="eyebrow" style={{color:'var(--g4)'}}><div className="eyebrow-dot" style={{background:'var(--g4)'}}/>AI-Powered</div>
              <h2 className="section-heading" style={{color:'#fff'}}>Free AI Tax<br/>Assistant</h2>
              <p className="ai-desc">Get instant answers to GST, Income Tax, PAN, TAN, DSC and compliance questions. Powered by AI — completely free, no login required.</p> */}

                            <div className="eyebrow" style={{color:'var(--g4)'}}><div className="eyebrow-dot" style={{background:'var(--g4)'}}/>GST & TAX SUPPORT</div>
              <h2 className="section-heading" style={{color:'#fff'}}>Quick GST & Tax<br/>Help Desk</h2>
              <p className="ai-desc">Get instant answers to GST, Income Tax, PAN, TAN, DSC, MSME and Company Registration questions.</p>
              <div className="ai-badges">
                {['✓ GST Queries','✓ Tax Planning','✓ PAN/TAN Help','✓ DSC Info','✓ Company Law'].map(b=>(
                  <div key={b} className="ai-badge">{b}</div>
                ))}
              </div>
              {/* <div className="ai-disclaimer"><strong>Disclaimer:</strong> AI responses are for general information only and do not constitute professional financial or legal advice.</div> */}

                          <div className="ai-disclaimer">
  <strong>Disclaimer:</strong> The information provided is for general guidance only. Please contact Easy Solutions for professional GST, tax, and compliance assistance.
</div>
            </div>
            <AIChat/>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div><h2>Ready to simplify your finances?</h2><p>First consultation is completely free. Talk to Favas today.</p></div>
            <div className="cta-btns">
              <a className="btn btn-wa" href={`https://wa.me/${COMPANY.phoneRaw}`} target="_blank" rel="noreferrer">💬 WhatsApp Us</a>
              <button className="btn btn-green" onClick={()=>nav('/contact')}>Contact Us →</button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

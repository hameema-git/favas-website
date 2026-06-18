import { useNavigate } from 'react-router-dom'
import './ServiceCard.css'

export default function ServiceCard({ service, delay = 0, variant = 'full' }) {
  const navigate = useNavigate()

  if (variant === 'home') {
    return (
      <div className={`shc reveal delay-${delay}`} onClick={() => navigate('/services')}>
        <div className="shc-icon">{service.icon}</div>
        <div className="shc-title">{service.title}</div>
        <p className="shc-desc">{service.shortDesc}</p>
      </div>
    )
  }

  return (
    <div className={`sfc reveal delay-${delay}`}>
      <div className="sfc-icon">{service.icon}</div>
      <h3 className="sfc-title">{service.title}</h3>
      <p className="sfc-desc">{service.description}</p>
      <ul className="sfc-list">
        {service.points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
      <div className="sfc-cta" onClick={() => navigate('/contact')}>
        Enquire Now →
      </div>
    </div>
  )
}

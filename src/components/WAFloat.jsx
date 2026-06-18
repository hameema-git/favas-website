import { COMPANY } from '../data/content'

export default function WAFloat() {
  const url = `https://wa.me/${COMPANY.phoneRaw}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Easy%20Solutions`
  return (
    <a className="wa-float" href={url} target="_blank" rel="noreferrer" title="Chat on WhatsApp">
      💬
    </a>
  )
}

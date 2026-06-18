import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    els.forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight * 0.95) el.classList.add('visible')
      else io.observe(el)
    })
    return () => io.disconnect()
  })
}

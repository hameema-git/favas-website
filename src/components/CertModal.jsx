import { useEffect } from 'react'
import './CertModal.css'

export default function CertModal({ cert, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="cert-modal-overlay" onClick={onClose}>
      <div className="cert-modal" onClick={e => e.stopPropagation()}>
        <div className="cert-modal-header">
          <div className="cert-modal-title">
            <span className="cert-modal-icon">{cert.icon}</span>
            <div>
              <div className="cert-modal-name">{cert.title}</div>
              <div className="cert-modal-tag">{cert.tag}</div>
            </div>
          </div>
          <button className="cert-modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="cert-modal-body">
          {cert.pdf ? (
            <>
              <iframe
                src={cert.pdf}
                title={cert.title}
                className="cert-pdf-frame"
              />
              <a
                href={cert.pdf}
                download
                target="_blank"
                rel="noreferrer"
                className="cert-download-btn"
              >
                ⬇ Download Certificate
              </a>
            </>
          ) : (
            <div className="cert-no-pdf">
              <div className="cert-no-pdf-icon">📄</div>
              <div className="cert-no-pdf-title">Certificate Coming Soon</div>
              <p className="cert-no-pdf-desc">
                The PDF for <strong>{cert.title}</strong> will be uploaded soon.<br />
                To add it now, place your PDF in:<br />
                <code>public/certificates/</code><br />
                Then update <code>content.js</code>:<br />
                <code>pdf: '/certificates/your-file.pdf'</code>
              </p>
              <div className="cert-no-pdf-steps">
                <div className="step">
                  <div className="step-num">1</div>
                  <div>Copy your PDF to <strong>public/certificates/</strong> folder</div>
                </div>
                <div className="step">
                  <div className="step-num">2</div>
                  <div>Open <strong>src/data/content.js</strong></div>
                </div>
                <div className="step">
                  <div className="step-num">3</div>
                  <div>Change <code>pdf: null</code> to <code>pdf: '/certificates/filename.pdf'</code></div>
                </div>
                <div className="step">
                  <div className="step-num">4</div>
                  <div>Save and push to GitHub — done!</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

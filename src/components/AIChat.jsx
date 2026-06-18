import { useState, useRef, useEffect } from 'react'
import { COMPANY } from '../data/content'
import './AIChat.css'

const CHIPS = [
  'What is GST?',
  'Who needs to file ITR?',
  'PAN vs TAN difference?',
  'What is DSC used for?',
  'How to register a company?',
]

const SYSTEM_PROMPT = `You are a helpful tax assistant for Easy Solutions, a GST and accounting consultancy in Kochi, Kerala, India. Answer questions about GST, Income Tax, PAN, TAN, DSC (Digital Signature Certificate), company registration, MSME, TDS, accounting, and Indian financial compliance in a friendly, concise way. Keep answers under 120 words. Use simple language — imagine explaining to a small business owner or freelancer in Kerala. Always end with: "For personalised advice, contact Easy Solutions at ${COMPANY.phone}." Do not provide specific legal advice.`

function timeStr() {
  const d = new Date()
  return `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`
}

export default function AIChat() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: '👋 Hi! I\'m your free AI tax assistant. Ask me anything about GST, Income Tax, PAN, TAN, DSC, Company Registration, or any Indian tax compliance question. How can I help?', time: timeStr() }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [chips, setChips] = useState(CHIPS)
  const msgsRef = useRef(null)

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight
  }, [messages, loading])

  async function ask(question) {
    setMessages(prev => [...prev, { role: 'usr', text: question, time: timeStr() }])
    setLoading(true)
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [{ role: 'user', content: question }]
        })
      })
      const data = await res.json()
      const reply = data.content?.[0]?.text || 'Sorry, I had trouble with that. Please contact Easy Solutions directly!'
      setMessages(prev => [...prev, { role: 'bot', text: reply, time: timeStr() }])
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: `I had a connection issue. Please contact Easy Solutions at ${COMPANY.phone} or via WhatsApp!`, time: timeStr() }])
    }
    setLoading(false)
  }

  function handleChip(chip) {
    setChips(prev => prev.filter(c => c !== chip))
    ask(chip)
  }

  function handleSend() {
    const q = input.trim()
    if (!q) return
    setInput('')
    ask(q)
  }

  return (
    <div className="ai-box">
      <div className="ai-header">
        <div className="ai-header-dot pulse"></div>
        <span className="ai-header-title">Easy Solutions Tax Assistant</span>
        <span className="ai-header-sub">Free AI · No Login</span>
      </div>

      <div className="ai-messages" ref={msgsRef}>
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role}`}>
            <div className="msg-bubble">{m.text}</div>
            <div className="msg-time">{m.time}</div>
          </div>
        ))}
        {loading && (
          <div className="ai-typing">
            <div className="typing-dots">
              <span /><span /><span />
            </div>
          </div>
        )}
      </div>

      {chips.length > 0 && (
        <div className="ai-chips">
          {chips.map(chip => (
            <button key={chip} className="ai-chip" onClick={() => handleChip(chip)}>{chip}</button>
          ))}
        </div>
      )}

      <div className="ai-input-row">
        <input
          className="ai-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Type your tax question..."
        />
        <button className="ai-send" onClick={handleSend}>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="#fff">
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/>
          </svg>
        </button>
      </div>
      <div className="ai-footer-note">AI responses are informational only · Not professional advice</div>
    </div>
  )
}

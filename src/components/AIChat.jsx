import { useState, useRef, useEffect } from 'react'
import { COMPANY } from '../data/content'
import './AIChat.css'
import { getBotReply } from "../data/faqBot";

// const CHIPS = [
//   // 'What is GST?',
//   // 'Who needs to file ITR?',
//   // 'PAN vs TAN difference?',
//   // 'What is DSC used for?',
//   // 'How to register a company?',

//     "What is GST?",
//   "GST Registration",
//   "GST Return Filing",
//   "GST Registration Limit",
//   "GSTR-1",
//   "GSTR-3B",
//   "GST Cancellation",
//   "Input Tax Credit (ITC)",

//   "Who needs to file ITR?",
//   "What is ITR?",
//   "ITR Due Date",
//   "Tax Saving Options",
//   "Form 16",
//   "Income Tax Refund",

//   "PAN vs TAN",
//   "PAN Application",
//   "PAN Correction",
//   "What is TAN?",
//   "TDS Filing",

//   "What is DSC?",
//   "DSC Renewal",
//   "Class 3 DSC",
//     "Company Registration",
//   "Private Limited Company",
//   "LLP Registration",
//   "Partnership Firm",
//   "MSME Registration",

//   "Accounting Services",
//   "Payroll Services",
//   "Bookkeeping"
// ]

export const CHIP_GROUPS = {
  main: [
    // "GST Services",
    // "Income Tax",
    // "PAN & TAN",
    // "DSC",
    // "Company Registration",
    // "MSME",
    // "Accounting"
      "GST Services",
    "Income Tax",
    "PAN & TAN",
    "DSC",
    "Company Registration",
    "MSME",
    "Accounting",
    "Payroll",
    "Business Compliance",
    "Contact Us"
  ],

  // "GST Services": [
  //   "What is GST?",
  //   "GST Registration",
  //   "How to file GST return?",
  //   "GST Registration Limit",
  //   "GSTR-1",
  //   "GSTR-3B",
  //   "Input Tax Credit",
  //   "⬅ Back"
  // ],

  "GST Services": [
  "What is GST?",
  "GST Registration",
  "GST Registration Limit",
  "GST Return Filing",
  "How to file GST return?",
  "GSTR-1",
  "GSTR-3B",
  "Input Tax Credit",
  "GST Amendment",
  "GST Cancellation",
  "GST Annual Return",
  "E-Way Bill",
  "E-Invoice",
  "Composition Scheme",
  "Late GST Filing",
  "GST for Small Business",
  "GST for Freelancers",
  "GST for Online Sellers",
  "GST Documents Required",
  "⬅ Back"],

  // "Income Tax": [
  //   "What is ITR?",
  //   "Who should file ITR?",
  //   "How to file Income Tax Return?",
  //   "ITR Due Date",
  //   "Form 16",
  //   "Tax Saving Options",
  //   "⬅ Back"
  // ],
  "Income Tax": [
  "What is ITR?",
  "Who should file ITR?",
  "How to file Income Tax Return?",
  "ITR Due Date",
  "ITR-1",
  "ITR-2",
  "ITR-3",
  "Form 16",
  "Form 26AS",
  "Tax Saving Options",
  "Section 80C",
  "Section 80D",
  "Advance Tax",
  "Income Tax Refund",
  "Income Tax Notice",
  "Freelancer Tax",
  "Salary Income",
  "Capital Gains Tax",
  "⬅ Back"
],

  // "PAN & TAN": [
  //   "PAN vs TAN",
  //   "PAN Application",
  //   "PAN Correction",
  //   "What is TAN?",
  //   "⬅ Back"
  // ],

  "PAN & TAN": [
  "PAN Application",
  "PAN Correction",
  "Lost PAN Card",
  "What is PAN?",
  "What is TAN?",
  "PAN vs TAN",
  "Who needs TAN?",
  "TAN Application",
  "TDS Filing",
  "TDS Return",
  "TDS on Salary",
  "TDS Certificate",
  "⬅ Back"
],

  // "DSC": [
  //   "What is DSC?",
  //   "DSC Renewal",
  //   "Class 3 DSC",
  //   "⬅ Back"
  // ]

  "DSC": [
  "What is DSC?",
  "Why is DSC Required?",
  "Class 3 DSC",
  "DSC Renewal",
  "DSC Validity",
  "DSC for GST",
  "DSC for MCA",
  "DSC Documents Required",
  "⬅ Back"
],
"Company Registration": [
  "How to register a company?",
  "Private Limited Company",
  "LLP Registration",
  "Partnership Firm",
  "Proprietorship",
  "One Person Company",
  "Startup Registration",
  "Company Registration Cost",
  "Company Registration Documents",
  "DIN Registration",
  "ROC Filing",
  "Annual Compliance",
  "⬅ Back"
],
"MSME": [
  "What is MSME?",
  "MSME Registration",
  "Udyam Registration",
  "Benefits of MSME",
  "MSME Eligibility",
  "MSME Loan",
  "MSME Certificate",
  "⬅ Back"
],
"Accounting": [
  "Bookkeeping",
  "Accounting Services",
  "Financial Statements",
  "Balance Sheet",
  "Profit and Loss Statement",
  "Cash Flow Statement",
  "Inventory Accounting",
  "Business Expenses",
  "Accounting Software",
  "⬅ Back"
],
"Payroll": [
  "Payroll Services",
  "Salary Processing",
  "Payslip Generation",
  "PF Registration",
  "ESI Registration",
  "Employee Compliance",
  "Labour Compliance",
  "⬅ Back"
],
"Business Compliance": [
  "FSSAI Registration",
  "Trade License",
  "Shop License",
  "Professional Tax",
  "Business Loan Assistance",
  "Annual Filing",
  "Audit Services",
  "Compliance Support",
  "⬅ Back"
],
"Contact Us": [
  "How much do your services cost?",
  "Can I get a free consultation?",
  "How can I contact Easy Solutions?",
  "Do you provide online services?",
  "Can I WhatsApp my documents?",
  "Where is your office located?",
  "⬅ Back"
]
};

const SYSTEM_PROMPT = `You are a helpful tax assistant for Easy Solutions, a GST and accounting consultancy in Kochi, Kerala, India. Answer questions about GST, Income Tax, PAN, TAN, DSC (Digital Signature Certificate), company registration, MSME, TDS, accounting, and Indian financial compliance in a friendly, concise way. Keep answers under 120 words. Use simple language — imagine explaining to a small business owner or freelancer in Kerala. Always end with: "For personalised advice, contact Easy Solutions at ${COMPANY.phone}." Do not provide specific legal advice.`

function timeStr() {
  const d = new Date()
  return `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`
}

export default function AIChat() {
  const [messages, setMessages] = useState([
    // { role: 'bot', text: '👋 Hi! I\'m your free AI tax assistant. Ask me anything about GST, Income Tax, PAN, TAN, DSC, Company Registration, or any Indian tax compliance question. How can I help?', time: timeStr() }
//     {
//   role: 'bot',
//   text: `👋 Welcome to Easy Solutions.

// I can help you with:

// ✅ GST Registration
// ✅ GST Return Filing
// ✅ Income Tax Filing
// ✅ PAN & TAN Services
// ✅ DSC Services
// ✅ MSME Registration
// ✅ Company Registration

// Ask me a question or select one of the options below.`,
//   time: timeStr()
// }

{
  role: "bot",
  text: `👋 Welcome to Easy Solutions GST & Tax Help Desk

We can assist you with:

✅ GST Registration
✅ Income Tax Filing
✅ PAN & TAN Services
✅ DSC Services
✅ Company Registration
✅ MSME Registration

👇 Tap one of the quick questions below
or type your own question to get started.`,
  time: timeStr()
}
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  // const [chips, setChips] = useState(CHIPS)
  const [chips, setChips] = useState(CHIP_GROUPS.main);
  const msgsRef = useRef(null)

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight
  }, [messages, loading])

  async function ask(question) {
  //   setMessages(prev => [...prev, { role: 'usr', text: question, time: timeStr() }])
  //   setLoading(true)
  //   try {
  //     const res = await fetch('https://api.anthropic.com/v1/messages', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         model: 'claude-sonnet-4-6',
  //         max_tokens: 1000,
  //         system: SYSTEM_PROMPT,
  //         messages: [{ role: 'user', content: question }]
  //       })
  //     })
  //     const data = await res.json()
  //     const reply = data.content?.[0]?.text || 'Sorry, I had trouble with that. Please contact Easy Solutions directly!'
  //     setMessages(prev => [...prev, { role: 'bot', text: reply, time: timeStr() }])
  //   } catch {
  //     setMessages(prev => [...prev, { role: 'bot', text: `I had a connection issue. Please contact Easy Solutions at ${COMPANY.phone} or via WhatsApp!`, time: timeStr() }])
  //   }
  //   setLoading(false)
  // }


  setMessages(prev => [
    ...prev,
    {
      role: "usr",
      text: question,
      time: timeStr()
    }
     ]);

  setLoading(true);

  setTimeout(() => {
    const reply = getBotReply(question);

    setMessages(prev => [
      ...prev,
      {
        role: "bot",
        text: reply,
        time: timeStr()
      }
    ]);

    setLoading(false);
  }, 800);
}
  // function handleChip(chip) {
  //   setChips(prev => prev.filter(c => c !== chip))
  //   ask(chip)
  // }

  function handleChip(chip) {

  if (chip === "⬅ Back") {
    setChips(CHIP_GROUPS.main);
    return;
  }

  if (CHIP_GROUPS[chip]) {
    setChips(CHIP_GROUPS[chip]);
    return;
  }

  ask(chip);
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
        {/* <span className="ai-header-sub">Free AI · No Login</span> */}
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
           <div className="ai-footer-note">
  Information provided for general guidance only · Contact Easy Solutions for personalised assistance
</div>
      {/* <div className="ai-footer-note">AI responses are informational only · Not professional advice</div> */}
    </div>
  )
}

// ============================================================
//  EASY SOLUTIONS — WEBSITE CONTENT
//  Edit this file to update any content on the website.
//  No need to touch any component files.
// ============================================================

export const COMPANY = {
  name: 'Easy Solutions',
  tagline: 'Complete GST & Tax Solutions for Kerala',
  description:
    'Easy Solutions handles your GST, Income Tax, PAN, TAN, DSC, Company Registration and Accounting — so you focus on growing your business.',
  address: 'Kochi, Kerala — 682001',
  phone: '+91 98765 43210',
  phoneRaw: '919876543210',
  email: 'info@easysolutions.in',
  hours: 'Mon – Sat: 9:00 AM – 7:00 PM',
  established: '2017',
  location: 'Kochi, Kerala',
  mapsLink: 'https://maps.google.com/?q=Kochi+Kerala',
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
  },
}

export const STATS = [
  { value: 500, suffix: '+', label: 'Clients Served' },
  { value: 8, suffix: '', label: 'Years Experience' },
  { value: 12, suffix: '', label: 'Services Offered' },
  { value: 100, suffix: '%', label: 'Compliance Rate' },
]

// ── SERVICES ────────────────────────────────────────────────
// To add a new service: copy one object and add to the array.
// To edit: change title, description, or bullet points here.
// ────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'gst-registration',
    icon: '📋',
    title: 'GST Registration',
    category: 'GST Services',
    shortDesc: 'GSTIN, amendments, returns on time.',
    description:
      'Full application from document collection to GSTIN issuance. Includes composition scheme, voluntary registration, and amendments.',
    points: [
      'New GST registration',
      'Composition scheme setup',
      'Voluntary registration',
      'Amendment & cancellation',
    ],
  },
  {
    id: 'gst-filing',
    icon: '🔄',
    title: 'GST Return Filing',
    category: 'GST Services',
    shortDesc: 'Monthly, quarterly & annual returns filed on time.',
    description:
      'Monthly, quarterly & annual GST returns filed on time with full ITC reconciliation. No missed due dates, ever.',
    points: ['GSTR-1, 3B, 9, 9C', 'ITC reconciliation', 'Late fee advisory', 'E-way bill assistance'],
  },
  {
    id: 'income-tax',
    icon: '🧾',
    title: 'Income Tax Filing',
    category: 'Income Tax & TDS',
    shortDesc: 'ITR for individuals, freelancers & businesses.',
    description:
      'Accurate ITR filing for salaried, freelancers, business owners & companies. Every eligible deduction identified and claimed.',
    points: ['ITR-1 to ITR-6', 'Capital gains planning', 'Tax saving advisory', 'Refund follow-up'],
  },
  {
    id: 'tds',
    icon: '📑',
    title: 'TDS Filing',
    category: 'Income Tax & TDS',
    shortDesc: 'Quarterly TDS returns, zero penalties.',
    description:
      'Timely TDS deduction, deposit & quarterly return filing. 24Q, 26Q, 27Q filed before due dates — zero penalties.',
    points: ['TDS calculation & deposit', 'Quarterly TDS returns', 'TDS certificates', 'Form 15CA/15CB'],
  },
  {
    id: 'pan',
    icon: '🪪',
    title: 'PAN Application',
    category: 'PAN, TAN & DSC',
    shortDesc: 'New PAN, corrections & reprints — fast.',
    description:
      'New PAN for individuals, HUFs, firms & companies. Corrections, reprints and surrender handled online quickly.',
    points: [
      'New PAN for individuals',
      'PAN for firms & companies',
      'PAN correction & reprint',
      'Minor to adult PAN update',
    ],
  },
  {
    id: 'tan',
    icon: '🔢',
    title: 'TAN Application',
    category: 'PAN, TAN & DSC',
    shortDesc: 'TAN for businesses that deduct TDS.',
    description:
      'Tax Deduction Account Number application for businesses and individuals who deduct TDS. Fast online processing.',
    points: ['New TAN registration', 'TAN correction', 'TAN verification', 'TAN for new branches'],
  },
  {
    id: 'dsc',
    icon: '🔏',
    title: 'DSC — Digital Signature',
    category: 'PAN, TAN & DSC',
    shortDesc: 'Class 2 & 3 DSC for MCA, GST, IT portal.',
    description:
      'Class 2 & Class 3 DSC for MCA filings, GST portal, Income Tax, tender submissions and more. Token setup included.',
    points: ['Class 2 & Class 3 DSC', 'DSC for MCA, GST, IT', 'DSC renewal', 'Token procurement & setup'],
  },
  {
    id: 'company-reg',
    icon: '🏢',
    title: 'Company Registration',
    category: 'Registrations & Compliance',
    shortDesc: 'Pvt Ltd, LLP, OPC — MCA compliant, fast.',
    description:
      'Start on a solid legal foundation. Pvt Ltd, LLP, OPC & Sole Proprietorship registered quickly and correctly on MCA.',
    points: ['Private Limited Company', 'LLP & OPC', 'Name reservation & MOA', 'DSC & DIN filing'],
  },
  {
    id: 'msme',
    icon: '🏭',
    title: 'MSME Registration',
    category: 'Registrations & Compliance',
    shortDesc: 'Udyam registration to unlock government benefits.',
    description:
      'Udyam portal registration to unlock government benefits, priority sector lending & scheme eligibility across Kerala.',
    points: ['Udyam Registration', 'MSME certificate', 'Scheme advisory', 'Modifications & updates'],
  },
  {
    id: 'accounting',
    icon: '📊',
    title: 'Accounting & Bookkeeping',
    category: 'Accounting & Advisory',
    shortDesc: 'Clean monthly books with Tally & cloud tools.',
    description:
      'Clean monthly books using Tally, QuickBooks & cloud tools. P&L, balance sheets, and bank reconciliation every month.',
    points: ['Daily bookkeeping', 'P&L & balance sheet', 'Bank reconciliation', 'Financial reporting'],
  },
  {
    id: 'consultancy',
    icon: '💡',
    title: 'Financial Consultancy',
    category: 'Accounting & Advisory',
    shortDesc: 'Strategic guidance for growing businesses.',
    description:
      'Strategic guidance for growing businesses — cash flow management, loan readiness, investment decisions & budget planning.',
    points: ['Business financial planning', 'Cash flow management', 'Loan documentation', 'Budget & projections'],
  },
  {
    id: 'payroll',
    icon: '💼',
    title: 'Payroll Services',
    category: 'Accounting & Advisory',
    shortDesc: 'Monthly payroll, PF, ESI, PT & payslips.',
    description:
      'Complete monthly payroll — salary processing, PF, ESI, professional tax & payslip generation for all business sizes.',
    points: ['Monthly payroll processing', 'PF & ESI compliance', 'Professional tax filing', 'Payslip generation'],
  },
]

// ── TEAM ────────────────────────────────────────────────────
// To add a team member: add a new object.
// photo: put the image file in /public/team/ folder
//        e.g. photo: '/team/favas.jpg'
//        Leave as null to show the illustrated avatar.
// ────────────────────────────────────────────────────────────
export const TEAM = [
  {
    id: 'favas',
    name: 'Favas Thangal',
    role: 'Founder & Principal Consultant',
    // photo: null, // Replace with: '/team/favas.jpg'
     photo: '/team/favas.jpeg', 
    description:
      '8+ years in GST, Income Tax, PAN/TAN, DSC and business registration. Leads every engagement personally with precision and care.',
    avatarColor: '#2D6A4F',
    initials: 'FT',
  },
  {
    id: 'asha',
    name: 'Asha Nair',
    role: 'Accounts & Bookkeeping Lead',
    photo: null, // Replace with: '/team/asha.jpg'
    description:
      'Meticulous bookkeeping specialist with Tally & cloud accounting expertise. Keeps client books clean and always audit-ready.',
    avatarColor: '#1D4ED8',
    initials: 'AN',
  },
  {
    id: 'rahul',
    name: 'Rahul K.',
    role: 'Tax Filing Specialist',
    photo: null, // Replace with: '/team/rahul.jpg'
    description:
      'Dedicated ITR and TDS expert who ensures zero errors and maximises every eligible deduction for each client, every time.',
    avatarColor: '#92400E',
    initials: 'RK',
  },
]

// ── TESTIMONIALS ─────────────────────────────────────────────
// To add a testimonial: add a new object below.
// ────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajan Menon',
    role: 'Retail Business Owner, Kochi',
    initials: 'RM',
    text: 'Favas handled my GST registration in two days. Smooth, hassle-free and I didn\'t have to do a thing myself. Truly stress-free experience!',
    stars: 5,
  },
  {
    id: 2,
    name: 'Priya Nair',
    role: 'Freelance Designer, Ernakulam',
    initials: 'PN',
    text: 'As a freelance designer taxes were a nightmare. Easy Solutions filed my ITR and saved me ₹30,000 I didn\'t know I was entitled to!',
    stars: 5,
  },
  {
    id: 3,
    name: 'Anees Hameed',
    role: 'Tech Startup Founder, Kakkanad',
    initials: 'AH',
    text: 'Got my Pvt Ltd registered in 6 days. They handled everything from DSC to MCA filing. Very professional and very reasonably priced!',
    stars: 5,
  },
]

// ── CERTIFICATES ─────────────────────────────────────────────
export const CERTIFICATES = [
  {
    icon: '🏅',
    title: 'GST Practitioner',
    desc: 'Enrolled GST Practitioner registered with GSTN portal',
    tag: 'GSTIN Certified',
    color: 'gold',
  },
  {
    icon: '📜',
    title: 'CA-Assisted Services',
    desc: 'All tax filings reviewed and backed by qualified Chartered Accountants',
    tag: 'CA Assisted',
    color: 'green',
  },
  {
    icon: '🔏',
    title: 'DSC Authorised Agent',
    desc: 'Authorised registration agent for Class 2 & 3 Digital Signature Certificates',
    tag: 'DSC Agent',
    color: 'blue',
  },
  {
    icon: '🏭',
    title: 'MSME Registered',
    desc: 'Udyam registered firm with experience in MSME portal filings and advisory',
    tag: 'Udyam',
    color: 'red',
  },
]

// ── GALLERY ──────────────────────────────────────────────────
// categories: 'activity' | 'success' | 'update'
// image: put image in /public/gallery/ and use e.g. '/gallery/workshop.jpg'
//        Leave as null for colored background with icon.
// ────────────────────────────────────────────────────────────
export const GALLERY = [
  {
    id: 1,
    category: 'activity',
    icon: '🏢',
    bgColor: 'linear-gradient(135deg,#D8F3DC,#B7E4C7)',
    image: null,
    title: 'Team Strategy Planning Q1 2025',
    desc: 'Reviewing GST compliance updates and planning our approach for the new financial year filing season.',
  },
  {
    id: 2,
    category: 'success',
    icon: '🏆',
    bgColor: 'linear-gradient(135deg,#FEF9EC,#FDE68A)',
    image: null,
    title: '100th GST Registration Milestone',
    desc: 'Celebrated 100 successful GST registrations from retail shops to IT companies across Kerala.',
  },
  {
    id: 3,
    category: 'update',
    icon: '🔏',
    bgColor: 'linear-gradient(135deg,#EFF6FF,#BFDBFE)',
    image: null,
    title: 'DSC & PAN/TAN Services Launched',
    desc: 'We now offer Class 2 & 3 Digital Signature Certificates plus PAN and TAN applications for all client types.',
  },
  {
    id: 4,
    category: 'success',
    icon: '⭐',
    bgColor: 'linear-gradient(135deg,#D8F3DC,#74C69D)',
    image: null,
    title: 'Freelancer Tax Savings Drive 2024',
    desc: 'Helped 80+ freelancers in Kochi optimise their ITR filings, saving lakhs in tax using Section 44ADA.',
  },
  {
    id: 5,
    category: 'activity',
    icon: '📚',
    bgColor: 'linear-gradient(135deg,#FEF9EC,#FDE68A)',
    image: null,
    title: 'Free GST Workshop for Traders',
    desc: 'Conducted a free awareness session on GST obligations and penalty avoidance for local business owners.',
  },
  {
    id: 6,
    category: 'update',
    icon: '💼',
    bgColor: 'linear-gradient(135deg,#D8F3DC,#EFF6FF)',
    image: null,
    title: 'Payroll Services Now Available',
    desc: 'Easy Solutions now offers complete payroll management with PF, ESI, and professional tax compliance.',
  },
]

// ── WHY CHOOSE US ─────────────────────────────────────────────
export const WHY_POINTS = [
  {
    icon: '⚡',
    title: 'Fast & Deadline-Driven',
    desc: 'We file before due dates — no penalties, no stress for you.',
  },
  {
    icon: '🔒',
    title: '100% Confidential',
    desc: 'Your financial data handled with complete privacy and discretion.',
  },
  {
    icon: '💰',
    title: 'Freelancer-Friendly Pricing',
    desc: 'Expert services at rates built for small businesses and freelancers.',
  },
  {
    icon: '📱',
    title: 'WhatsApp-First Support',
    desc: 'Reach us anytime. Replies in plain Malayalam or English, fast.',
  },
]

// ── WHY STATS ─────────────────────────────────────────────────
export const WHY_STATS = [
  { value: '500+', label: 'Happy Clients' },
  { value: '8 Yrs', label: 'Experience' },
  { value: '100%', label: 'On-Time Filing' },
  { value: '24h', label: 'Response Time' },
]

// ── MISSION & VISION ─────────────────────────────────────────
export const MISSION_VISION = [
  {
    icon: '🎯',
    title: 'Our Mission',
    dark: false,
    text: 'To deliver reliable, transparent, and affordable financial services that empower businesses and individuals across Kerala to stay compliant, save money, and grow confidently.',
  },
  {
    icon: '🔭',
    title: 'Our Vision',
    dark: true,
    text: 'To be the most trusted name in freelance financial consultancy across Kerala — where every client has access to expert, personalised financial guidance regardless of business size.',
  },
  {
    icon: '💎',
    title: 'Our Values',
    dark: false,
    text: 'Integrity in every interaction. Precision in every filing. Respect for every client\'s time and trust. Honest advice is the foundation of every long-term relationship.',
  },
  {
    icon: '🤝',
    title: 'Our Promise',
    dark: true,
    text: 'We never miss a deadline. Available when you need us. We explain everything in plain Malayalam or English — no confusion, no surprises in your bill.',
  },
]

// ── ABOUT TRACK RECORD ───────────────────────────────────────
export const TRACK_RECORD = [
  { value: '500+', label: 'GST Returns Filed' },
  { value: '300+', label: 'ITRs Processed' },
  { value: '120+', label: 'Company Registrations' },
  { value: '50+', label: 'MSME Registrations' },
  { value: '₹50L+', label: 'Client Tax Savings' },
]

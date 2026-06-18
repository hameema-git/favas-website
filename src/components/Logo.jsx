export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="9" fill="#2D6A4F" />
      <path d="M9 18C9 13 13 9 18 9C23 9 27 13 27 18C27 23 23 27 18 27C13 27 9 23 9 18Z"
        fill="none" stroke="#74C69D" strokeWidth="1.2" />
      <text x="18" y="22.5" textAnchor="middle" fill="#fff"
        fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="9.5" fontWeight="800">ES</text>
      <path d="M26 9C26 9 23 10 22 13C24 12 26 9 26 9Z" fill="#86EFAC" />
      <circle cx="26" cy="9" r="2.5" fill="#4ADE80" opacity=".7" />
    </svg>
  )
}

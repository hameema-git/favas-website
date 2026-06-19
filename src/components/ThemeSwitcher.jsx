import { useState, useEffect } from 'react'
import './ThemeSwitcher.css'

// ── ADD MORE THEMES HERE ─────────────────────────────────────
// Each theme sets the full CSS variable palette.
// Copy any block and change the hex codes to test new colours.
// ────────────────────────────────────────────────────────────
const THEMES = [
  {
    id: 'green',
    label: 'Forest Green',
    preview: '#2D6A4F',
    vars: {
      '--g9': '#1B4332', '--g8': '#2D6A4F', '--g7': '#40916C',
      '--g6': '#52B788', '--g4': '#74C69D', '--g2': '#D8F3DC',
      '--g1': '#F0FAF2', '--g0': '#F8FFF9',
      '--ink': '#0F2419', '--sl': '#3D5A47', '--sll': '#6B8A76',
      '--bd': '#C7E6CE',
    },
  },
  {
    id: 'blue',
    label: 'Ocean Blue',
    preview: '#1D4ED8',
    vars: {
      '--g9': '#1E3A8A', '--g8': '#1D4ED8', '--g7': '#2563EB',
      '--g6': '#3B82F6', '--g4': '#60A5FA', '--g2': '#DBEAFE',
      '--g1': '#EFF6FF', '--g0': '#F8FAFF',
      '--ink': '#0F172A', '--sl': '#334155', '--sll': '#64748B',
      '--bd': '#BFDBFE',
    },
  },
  {
    id: 'teal',
    label: 'Deep Teal',
    preview: '#0D9488',
    vars: {
      '--g9': '#134E4A', '--g8': '#0F766E', '--g7': '#0D9488',
      '--g6': '#14B8A6', '--g4': '#2DD4BF', '--g2': '#CCFBF1',
      '--g1': '#F0FDFA', '--g0': '#F8FFFE',
      '--ink': '#042F2E', '--sl': '#115E59', '--sll': '#5EEAD4',
      '--bd': '#99F6E4',
    },
  },
  {
    id: 'purple',
    label: 'Royal Purple',
    preview: '#7C3AED',
    vars: {
      '--g9': '#3B0764', '--g8': '#6D28D9', '--g7': '#7C3AED',
      '--g6': '#8B5CF6', '--g4': '#A78BFA', '--g2': '#EDE9FE',
      '--g1': '#F5F3FF', '--g0': '#FAFAFF',
      '--ink': '#1E1B4B', '--sl': '#4C1D95', '--sll': '#7C3AED',
      '--bd': '#DDD6FE',
    },
  },
  {
    id: 'maroon',
    label: 'Deep Maroon',
    preview: '#9F1239',
    vars: {
      '--g9': '#4C0519', '--g8': '#9F1239', '--g7': '#BE123C',
      '--g6': '#E11D48', '--g4': '#FB7185', '--g2': '#FFE4E6',
      '--g1': '#FFF1F2', '--g0': '#FFF8F9',
      '--ink': '#1F0010', '--sl': '#5C1F2E', '--sll': '#9F1239',
      '--bd': '#FECDD3',
    },
  },
  {
    id: 'slate',
    label: 'Charcoal Slate',
    preview: '#334155',
    vars: {
      '--g9': '#0F172A', '--g8': '#1E293B', '--g7': '#334155',
      '--g6': '#475569', '--g4': '#64748B', '--g2': '#E2E8F0',
      '--g1': '#F1F5F9', '--g0': '#F8FAFC',
      '--ink': '#020617', '--sl': '#334155', '--sll': '#64748B',
      '--bd': '#CBD5E1',
    },
  },
  {
    id: 'amber',
    label: 'Warm Amber',
    preview: '#D97706',
    vars: {
      '--g9': '#451A03', '--g8': '#92400E', '--g7': '#B45309',
      '--g6': '#D97706', '--g4': '#F59E0B', '--g2': '#FEF3C7',
      '--g1': '#FFFBEB', '--g0': '#FEFDF8',
      '--ink': '#1C0A00', '--sl': '#44250D', '--sll': '#78350F',
      '--bd': '#FDE68A',
    },
  },
  {
    id: 'indigo',
    label: 'Indigo Night',
    preview: '#4338CA',
    vars: {
      '--g9': '#1E1B4B', '--g8': '#3730A3', '--g7': '#4338CA',
      '--g6': '#4F46E5', '--g4': '#6366F1', '--g2': '#E0E7FF',
      '--g1': '#EEF2FF', '--g0': '#F8F9FF',
      '--ink': '#0F0E2A', '--sl': '#312E81', '--sll': '#4338CA',
      '--bd': '#C7D2FE',
    },
  },
]

const STORAGE_KEY = 'es-theme'

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(() => localStorage.getItem(STORAGE_KEY) || 'green')

  // Apply theme on mount and change
  useEffect(() => {
    const theme = THEMES.find(t => t.id === active) || THEMES[0]
    Object.entries(theme.vars).forEach(([key, val]) => {
      document.documentElement.style.setProperty(key, val)
    })
    localStorage.setItem(STORAGE_KEY, active)
  }, [active])

  const currentTheme = THEMES.find(t => t.id === active) || THEMES[0]

  return (
    <>
      {/* Float button */}
      <button
        className="theme-btn"
        onClick={() => setOpen(o => !o)}
        title="Change colour theme"
      >
        <span className="theme-btn-dot" style={{ background: currentTheme.preview }} />
        <span className="theme-btn-label">Theme</span>
      </button>

      {/* Panel */}
      {open && (
        <div className="theme-panel">
          <div className="theme-panel-header">
            <span>🎨 Colour Theme</span>
            <button onClick={() => setOpen(false)} className="theme-panel-close">✕</button>
          </div>
          <p className="theme-panel-hint">
            Click any theme to preview instantly. Your choice is saved automatically.
          </p>
          <div className="theme-grid">
            {THEMES.map(t => (
              <button
                key={t.id}
                className={`theme-swatch ${active === t.id ? 'active' : ''}`}
                onClick={() => { setActive(t.id); }}
              >
                <div className="swatch-color" style={{ background: t.preview }} />
                <span className="swatch-label">{t.label}</span>
                {active === t.id && <span className="swatch-check">✓</span>}
              </button>
            ))}
          </div>
          <div className="theme-panel-footer">
            To add a custom colour, edit <code>ThemeSwitcher.jsx</code> → <code>THEMES</code> array
          </div>
        </div>
      )}

      {/* Backdrop */}
      {open && <div className="theme-backdrop" onClick={() => setOpen(false)} />}
    </>
  )
}

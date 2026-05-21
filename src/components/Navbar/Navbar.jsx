import { useState, useEffect } from 'react'
import personal from '../../content/personal.json'
import navItems from '../../content/navItems.json'
import { Arrow } from '../Icons'
import './Navbar.css'

function ThemeToggleButton({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className="theme-toggle-icon">
        {isDark ? (
          <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </g>
        ) : (
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" fill="currentColor" />
        )}
      </svg>
    </button>
  )
}

export default function Navbar({ activeSection, theme, onToggleTheme, onEnterRecruiter }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeAndRun = (fn) => (e) => { if (fn) fn(e); setOpen(false) }

  return (
    <>
      <nav className="nav" aria-label="Primary">
        <a className="nav-brand" href="#top" onClick={() => setOpen(false)}>
          <img src={personal.avatar} alt="" className="nav-avatar" />
          <span className="nav-name">{personal.name}</span>
          <span className="nav-dot" aria-hidden="true" />
          <span className="nav-status">Available for work</span>
        </a>

        <ul className="nav-list">
          {navItems.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link${activeSection === item.id ? ' is-active' : ''}`}
              >
                <span className="nav-num">0{i + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button type="button" className="recruiter-btn" onClick={onEnterRecruiter}>
            <span className="recruiter-btn-dot" aria-hidden="true" />
            <span>Recruiter view</span>
            <Arrow size={12} />
          </button>
          <ThemeToggleButton theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className={`hamburger${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <button
          type="button"
          className="mobile-close"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <span className="mobile-close-label">Close</span>
          <span className="mobile-close-x" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
        </button>

        <ul className="mobile-menu-list">
          {navItems.map((item, i) => (
            <li key={item.id} style={{ '--i': i }}>
              <a
                href={`#${item.id}`}
                className={`mobile-link${activeSection === item.id ? ' is-active' : ''}`}
                onClick={closeAndRun()}
              >
                <span className="mobile-num">0{i + 1}</span>
                <span>{item.label}</span>
                <span className="mobile-arrow"><Arrow /></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-foot">
          <div>
            <span className="mobile-foot-label">Get in touch</span>
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </div>
          <div className="mobile-socials">
            {personal.socials.filter((s) => s.label !== 'Email').map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

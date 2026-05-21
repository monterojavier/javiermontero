import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RecruiterView } from '../components'

function applyStoredTheme() {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') {
      document.documentElement.setAttribute('data-theme', stored)
    }
  } catch (_) {}
}

export default function RecruiterPage() {
  const navigate = useNavigate()

  useEffect(() => {
    applyStoredTheme()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="rv-bar">
        <span className="rv-bar-label">
          <span className="rv-bar-dot" /> Recruiter view
        </span>
        <span className="rv-bar-meta">Condensed for busy hiring teams · ~30 second read</span>
        <button type="button" className="rv-bar-exit" onClick={() => navigate('/')}>
          Switch to full site →
        </button>
      </div>
      <RecruiterView />
    </>
  )
}

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Navbar, Hero, Marquee, About, ExperienceSection, Work, Contact, Footer } from '../components'
import { initSmoothScroll } from '../utils/smoothScroll'

function useActiveSection() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const ids = ['about', 'experience', 'work', 'contact']
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35
      let found = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) found = id
      }
      setActive(found)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}

function useClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const fmt = () => {
      const d = new Date()
      const h = d.getHours()
      const m = String(d.getMinutes()).padStart(2, '0')
      const ampm = h >= 12 ? 'PM' : 'AM'
      const hh = (h + 11) % 12 + 1
      setTime(`${hh}:${m} ${ampm}`)
    }
    fmt()
    const id = setInterval(fmt, 30000)
    return () => clearInterval(id)
  }, [])

  return time
}

function getInitialTheme() {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') return stored
  } catch (_) {}
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

export default function PortfolioPage() {
  const [theme, setTheme] = useState(getInitialTheme)
  const activeSection = useActiveSection()
  const time = useClock()
  const navigate = useNavigate()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch (_) {}
  }, [theme])

  useEffect(() => {
    initSmoothScroll()
  }, [])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
        onEnterRecruiter={() => navigate('/recruiter-view')}
      />
      <main className="main">
        <Hero />
        <Marquee />
        <About />
        <ExperienceSection />
        {/* Work section — hidden until ready
        <Work />
        */}
        <Contact />
      </main>
      <Footer time={time} />
    </>
  )
}

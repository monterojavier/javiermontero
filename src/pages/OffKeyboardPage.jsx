import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import personal from '../content/personal.json'
import ok from '../content/offKeyboard.json'
import { Arrow } from '../components/Icons'
import './OffKeyboardPage.css'

function applyStoredTheme() {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') {
      document.documentElement.setAttribute('data-theme', stored)
    }
  } catch (_) {}
}

export default function OffKeyboardPage() {
  useEffect(() => {
    applyStoredTheme()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <nav className="ok-nav" aria-label="Off the keyboard">
        <Link className="ok-nav-brand" to="/">
          <img src={personal.avatar} alt="" className="ok-nav-avatar" />
          <span>{personal.name}</span>
        </Link>
        <Link className="ok-nav-back" to="/">
          ← Back to portfolio
        </Link>
      </nav>

      <main className="ok-page">

        {/* Hero */}
        <section className="ok-hero">
          <span className="ok-eyebrow">Off the keyboard</span>
          <h1 className="ok-headline">
            The rest of <em>me</em>, when I'm not shipping code.
          </h1>
          <p className="ok-lead">
            I think a good engineer is also a curious human. Here's some of what I'm into when my laptop is closed — the books, the food, the weekends. Most of these I'd happily talk your ear off about over coffee.
          </p>
        </section>

        {/* Now strip */}
        <div className="now-grid">
          {ok.now.map((card) => (
            <div key={card.label} className="now-card">
              <span className="now-label">{card.label}</span>
              <span className="now-value">{card.value}</span>
              <span className="now-meta">{card.meta}</span>
            </div>
          ))}
        </div>

        {/* Things I love bento */}
        <section>
          <header className="things-head">
            <span className="things-head-num">(01)</span>
            <h2 className="things-head-title">Things I love</h2>
          </header>
          <div className="things-grid">
            {ok.things.map((t) => (
              <div key={t.name} className={`thing thing-span-${t.span}`}>
                <span className="thing-tag">{t.tag}</span>
                <h3 className="thing-name">{t.name}</h3>
                <p className="thing-blurb">{t.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <div className="ok-quote">
          <blockquote>{ok.quote.text}</blockquote>
          <span className="quote-attr">{ok.quote.attr}</span>
        </div>

        {/* Reading / listening */}
        <div className="media-lists">
          <div>
            <div className="media-list-head">
              <h3>Reading</h3>
              <p>The pile is taller than I am</p>
            </div>
            <ul className="media-list">
              {ok.reading.map((b, i) => (
                <li key={b.title}>
                  <span className="media-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="media-title">{b.title}</span>
                    <span className="media-by">{b.author}</span>
                  </span>
                  <span className="media-meta">{b.meta}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="media-list-head">
              <h3>Listening</h3>
              <p>Mostly in headphones, mostly while running</p>
            </div>
            <ul className="media-list">
              {ok.listening.map((l, i) => (
                <li key={l.title}>
                  <span className="media-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="media-title">{l.title}</span>
                    <span className="media-by">{l.by}</span>
                  </span>
                  <span className="media-meta">{l.meta}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer CTA */}
        <footer className="ok-foot">
          <span>That's me, briefly</span>
          <Link className="ok-foot-cta" to="/#work">
            See the work <Arrow />
          </Link>
        </footer>

      </main>
    </>
  )
}

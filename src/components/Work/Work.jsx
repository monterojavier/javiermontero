import projectsData from '../../content/projects.json'
import { Arrow } from '../Icons'
import './Work.css'

export default function Work() {
  const { projects } = projectsData
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="work">
      <header className="section-head">
        <span className="section-num">(03)</span>
        <span className="section-title">Selected Work</span>
        <span className="section-meta">{projects.length} projects</span>
      </header>

      <div className="work-featured">
        {featured.map((p, i) => (
          <article key={p.id} className={`work-card${i % 2 !== 0 ? ' work-card-right' : ''}`}>
            <a className="work-thumb" href={p.link} target="_blank" rel="noreferrer">
              <span className="work-thumb-bg" />
              <img src={p.image} alt={p.title} />
              <span className="work-thumb-cta">View project <Arrow /></span>
            </a>
            <div className="work-meta">
              <div className="work-meta-top">
                <span className="work-num">0{projects.indexOf(p) + 1}</span>
                <span className="work-year">{p.year}</span>
                <span className="work-cat">{p.category}</span>
              </div>
              <h3 className="work-title">{p.title}</h3>
              <p className="work-blurb">{p.blurb}</p>
              <ul className="work-stack">
                {p.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="work-list">
          <h4 className="work-list-head">Also shipped</h4>
          <ul>
            {rest.map((p) => (
              <li key={p.id}>
                <a href={p.link} target="_blank" rel="noreferrer">
                  <span className="wl-title">{p.title}</span>
                  <span className="wl-tags">{p.stack.join(' · ')}</span>
                  <span className="wl-year">{p.year}</span>
                  <span className="wl-arrow"><Arrow /></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

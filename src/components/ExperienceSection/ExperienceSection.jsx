import experience from '../../content/experience.json'
import resume from '../../content/resume.json'
import { DownloadIcon, highlightStats } from '../Icons'
import './ExperienceSection.css'

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience">
      <header className="section-head">
        <span className="section-num">(02)</span>
        <span className="section-title">Experience</span>
        <a className="section-resume" href="/resume.pdf" target="_blank" rel="noreferrer">
          <DownloadIcon /> Download resume
        </a>
      </header>

      <div className="exp-grid">
        <div className="exp-col">
          <h4 className="exp-col-head">Where I've worked</h4>
          <ul className="exp-list">
            {experience.jobs.map((e, i) => (
              <li key={i} className="exp-item">
                <div className="exp-item-head">
                  <span className="exp-company">{e.company}</span>
                  <span className="exp-date">{e.date}</span>
                </div>
                <span className="exp-role">{e.role}</span>
                <ul className="exp-bullets">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="exp-bullet">
                      <span className="exp-bullet-marker" aria-hidden="true">
                        <span className="exp-bullet-num">{String(j + 1).padStart(2, '0')}</span>
                        <span className="exp-bullet-line" />
                      </span>
                      <span className="exp-bullet-text">{highlightStats(b)}</span>
                    </li>
                  ))}
                </ul>
                <ul className="exp-tags">
                  {e.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="exp-col exp-col-side">
          <h4 className="exp-col-head">Education</h4>
          <ul className="edu-list">
            {resume.education.map((e, i) => (
              <li key={i} className="edu-item">
                <span className="edu-school">{e.school}</span>
                <span className="edu-field">{e.field}</span>
                <span className="edu-date">{e.date}</span>
              </li>
            ))}
          </ul>

          <h4 className="exp-col-head" style={{ marginTop: 'var(--gap-lg)' }}>Toolkit</h4>
          <div className="skills">
            {Object.entries(resume.skills).map(([group, items]) => (
              <div key={group} className="skill-group">
                <span className="skill-group-name">{group}</span>
                <ul>
                  {items.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {experience.priorRoles.length > 0 && (
            <>
              <h4 className="exp-col-head" style={{ marginTop: 'var(--gap-lg)' }}>Prior roles</h4>
              <ul className="prior-list">
                {experience.priorRoles.map((r, i) => (
                  <li key={i} className="prior-item">
                    <div className="prior-head">
                      <span className="prior-company">{r.company}</span>
                      <span className="prior-date">{r.date}</span>
                    </div>
                    <span className="prior-role">{r.role}</span>
                    <p className="prior-blurb">{r.blurb}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

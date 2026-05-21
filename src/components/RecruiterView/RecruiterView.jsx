import personal from '../../content/personal.json'
import experience from '../../content/experience.json'
import resume from '../../content/resume.json'
import projectsData from '../../content/projects.json'
import stats from '../../content/recruiterStats.json'
import { Arrow, DownloadIcon } from '../Icons'
import './RecruiterView.css'

export default function RecruiterView({ onExit }) {
  const github = personal.socials.find((s) => s.label === 'GitHub')
  const linkedin = personal.socials.find((s) => s.label === 'LinkedIn')

  return (
    <main className='rv'>
      <header className='rv-header'>
        <div className='rv-header-top'>
          <div className='rv-id'>
            <img src={personal.avatar} alt='' className='rv-avatar' />
            <div>
              <h1 className='rv-name'>{personal.name}</h1>
              <p className='rv-tagline'>
                Software Engineer · ex-Google · based in {personal.location} ·{' '}
                <span className='rv-available'>
                  <span className='rv-dot' /> Available for work
                </span>
              </p>
            </div>
          </div>
          <div className='rv-cta-row'>
            <a className='rv-cta rv-cta-primary' href={`mailto:${personal.email}`}>
              <span>Email Me</span>
              <Arrow />
            </a>
            <a className='rv-cta rv-cta-resume' href='/resume.pdf' target='_blank' rel='noreferrer'>
              <DownloadIcon /> Resume
            </a>
            {linkedin && (
              <a className='rv-cta rv-cta-secondary' href={linkedin.href} target='_blank' rel='noreferrer'>
                LinkedIn
              </a>
            )}
            {github && (
              <a className='rv-cta rv-cta-secondary' href={github.href} target='_blank' rel='noreferrer'>
                GitHub
              </a>
            )}
          </div>
        </div>

        <p className='rv-summary'>
          <em>Software engineer</em> · ex-Google · mentor at Fullstack Academy.
        </p>

        <div className='rv-stats'>
          {stats.map((stat, i) => (
            <div key={i} className='rv-stat'>
              <span className='rv-stat-value'>{stat.value}</span>
              <span className='rv-stat-label'>{stat.label}</span>
            </div>
          ))}
        </div>
      </header>

      <section className='rv-block'>
        <div className='rv-block-head'>
          <span className='rv-block-num'>01</span>
          <h2 className='rv-block-title'>Experience</h2>
        </div>
        <ul className='rv-exp'>
          {[...experience.jobs, ...experience.priorRoles].map((position, i) => (
            <li key={i} className='rv-exp-line'>
              <span className='rv-company'>{position.company}</span>
              <span className='rv-sep'>·</span>
              <span className='rv-role'>{position.role}</span>
              <span className='rv-date'>{position.date}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className='rv-block rv-split'>
        <div>
          <div className='rv-block-head'>
            <span className='rv-block-num'>02</span>
            <h2 className='rv-block-title'>Skills</h2>
          </div>
          <p className='rv-skills-flat'>
            <strong>TypeScript</strong> · React · Vue · Node · Express · Rails · PostgreSQL · Ruby · Java · Swift · Code
            review · Mentorship · CI/CD
          </p>
        </div>
        <div>
          <div className='rv-block-head'>
            <span className='rv-block-num'>03</span>
            <h2 className='rv-block-title'>Education</h2>
          </div>
          <ul className='rv-edu'>
            {resume.education.map((e, i) => (
              <li key={i}>
                <span className='rv-edu-school'>{e.school}</span>
                <span className='rv-edu-meta'>
                  {e.field} · {e.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className='rv-block'>
        <div className='rv-block-head'>
          <span className='rv-block-num'>04</span>
          <h2 className='rv-block-title'>Selected projects</h2>
        </div>
        <ul className='rv-projects'>
          {projectsData.projects.map((p, i) => (
            <li key={p.id}>
              <a href={p.link} target='_blank' rel='noreferrer'>
                <span className='rv-proj-num'>0{i + 1}</span>
                <span className='rv-proj-title'>{p.title}</span>
                <span className='rv-proj-stack'>{p.stack.join(' · ')}</span>
                <span className='rv-proj-year'>{p.year}</span>
                <span>
                  <Arrow />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className='rv-block rv-final'>
        <div>
          <h2 className='rv-final-title'>Let's talk.</h2>
          <p className='rv-final-sub'>
            Open to software engineering, frontend, or backend roles. Remote-friendly, NYC-based.
          </p>
        </div>
        <div className='rv-final-actions'>
          <a className='rv-cta rv-cta-primary' href={`mailto:${personal.email}`}>
            {personal.email} <Arrow />
          </a>
          <a className='rv-cta rv-cta-resume' href='/resume.pdf' target='_blank' rel='noreferrer'>
            <DownloadIcon /> Download resume
          </a>
        </div>
      </section>

      <footer className='rv-foot'>
        <span>© 2026 Javier Montero</span>
        <span>Recruiter view · ~30 second read</span>
      </footer>
    </main>
  )
}

import { useState } from 'react'
import personal from '../../content/personal.json'
import { Arrow, DownloadIcon } from '../Icons'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard?.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section id='contact' className='contact'>
      <header className='section-head'>
        <span className='section-num'>(03)</span>
        <span className='section-title'>Get in touch</span>
      </header>

      <div className='contact-headline'>
        <h2>
          <span>Have a project, role, or </span>
          <em className='accent-2'>just want to say hi</em>
          <span>?</span>
        </h2>
        <div className='contact-actions'>
          <a className='contact-email' href={`mailto:${personal.email}`} onClick={copyEmail}>
            {copied ? 'Copied to clipboard ✓' : personal.email}
          </a>
          <a className='contact-resume' href='/resume.pdf' target='_blank' rel='noreferrer'>
            <DownloadIcon /> Download resume
          </a>
        </div>
      </div>

      <div className='contact-grid'>
        {personal.socials.map((s) => (
          <a key={s.label} className='contact-card' href={s.href} target='_blank' rel='noreferrer'>
            <span className='contact-label'>{s.label}</span>
            <span className='contact-handle'>{s.handle}</span>
            <span className='contact-arrow'>
              <Arrow />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

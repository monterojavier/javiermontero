import { Arrow, DownloadIcon } from '../Icons'
import './Hero.css'

export default function Hero() {
  return (
    <section id='top' className='hero'>
      <div className='hero-meta'>
        <span className='meta-dot' />
        <span>Portfolio · 2026</span>
      </div>

      <h1 className='hero-headline'>
        <span className='line'>Hi, I'm Javier —</span>
        <span className='line'>
          a <em className='accent-1'>software engineer</em>
        </span>
        <span className='line'>
          come check me <em className='accent-2'>out!</em>
        </span>
        {/* <span className='line'>
          <span className='underline-wave'></span>.
        </span> */}
      </h1>

      <div className='hero-foot'>
        <div className='hero-foot-col'>
          <span className='label'>Currently</span>
          <span className='value'>At Fullstack Academy</span>
        </div>
        <div className='hero-foot-col'>
          <span className='label'>Based in</span>
          <span className='value'>New York, NY</span>
        </div>
        <div className='hero-foot-col'>
          <span className='label'>Previously</span>
          <span className='value'>Google · New York Life</span>
        </div>
        <div className='hero-cta-group'>
          <a className='hero-cta' href='#work'>
            See selected work <Arrow />
          </a>
          <a className='hero-cta hero-cta-ghost' href='/resume.pdf' target='_blank' rel='noreferrer'>
            <DownloadIcon /> Resume
          </a>
        </div>
      </div>
    </section>
  )
}

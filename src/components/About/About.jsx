import { Link } from 'react-router-dom'
import personal from '../../content/personal.json'
import { Arrow } from '../Icons'
import './About.css'

export default function About() {
  return (
    <section id='about' className='about'>
      <header className='section-head'>
        <span className='section-num'>(01)</span>
        <span className='section-title'>About</span>
      </header>

      <div className='about-grid'>
        <div className='about-portrait'>
          <div className='portrait-frame'>
            <img src={personal.avatar} alt='Javier Montero' />
          </div>
          <ul className='portrait-facts'>
            {personal.facts.map((fact) => (
              <li key={fact}>
                <span>—</span> {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className='about-body'>
          <p className='about-lead'>
            Hello a little bit <em className='accent-1'>about me</em>!
          </p>
          {personal.about.map((p, i) => (
            <p key={i} className='about-p'>
              {p}
            </p>
          ))}
          <div className='about-links'>
            <a className='link-arrow' href='#contact'>
              Get in touch <Arrow />
            </a>
            {/* Off-keyboard button — hidden until ready
            <Link className="link-arrow link-arrow-soft" to="/off-keyboard">
              Me, off the keyboard <Arrow />
            </Link>
            */}
          </div>
        </div>
      </div>
    </section>
  )
}

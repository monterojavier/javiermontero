import { Fragment } from 'react'
import words from '../../content/marqueeWords.json'
import { Asterisk } from '../Icons'
import './Marquee.css'

function MarqueeRow() {
  return (
    <div className="marquee-row">
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="marquee-item">{w}</span>
          <span className="marquee-sep"><Asterisk size={14} /></span>
        </Fragment>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  )
}

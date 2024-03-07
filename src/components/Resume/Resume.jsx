import React from 'react'

import Experience from './Experience'
import Education from './Education'

import './Resume.css'

export default function Resume() {
  return (
    <article className='resume' data-page='resume'>
      <header>
        <h2 className='h2 article-title'>Resume</h2>
      </header>
      <Experience />
      <Education />
    </article>
  )
}

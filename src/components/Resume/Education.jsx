import React from 'react'
import { IoSchoolOutline } from 'react-icons/io5'

import education from '../../import/educationList'

function Education() {
  return (
    <section className='timeline'>
      <div className='title-wrapper'>
        <div className='icon-box'>
          <IoSchoolOutline />
        </div>

        <h3 className='h3'>Education</h3>
      </div>

      <ol className='timeline-list'>
        {education.toReversed().map((school) => {
          return (
            <li className='timeline-item' key={school.id}>
              <h4 className='h4 timeline-item-title'>{school.title}</h4>

              <span>{school.date}</span>

              <p className='timeline-text'>{school.field}</p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default Education

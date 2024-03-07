import React from 'react'
import { IoBookOutline } from 'react-icons/io5'

import experience from '../../import/experienceList'

function Experience() {
  return (
    <section className='timeline'>
      <div className='title-wrapper'>
        <div className='icon-box'>
          <IoBookOutline />
        </div>

        <h3 className='h3'>Experience</h3>
      </div>

      <ol className='timeline-list'>
        {experience.toReversed().map((theJob) => {
          return (
            <li className='timeline-item' key={theJob.id}>
              <h4 className='h4 timeline-item-title'>
                <strong>{theJob.company}</strong> - {theJob.title}
              </h4>

              <span>{theJob.date}</span>

              <ul>
                {theJob.responsibilities.map((responsibility, index) => {
                  return (
                    <li className='list-responsibilities' key={index}>
                      <p className='timeline-text li-p-responsibility'>{responsibility}</p>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default Experience

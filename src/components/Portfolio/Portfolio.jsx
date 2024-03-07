import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'

import projects from '../../import/projectList'
import './Portfolio.css'

function Portfolio() {
  return (
    <article className='portfolio' data-page='portfolio'>
      <header>
        <h2 className='h2 article-title'>Portfolio</h2>
      </header>
      <section className='projects'>
        <ul className='project-list'>
          {projects.map((project) => {
            return (
              <li
                key={project.id}
                className='project-item  active'
                data-filter-item
                data-category={project.dataCategory}
              >
                <a href={project.link} target='_blank'>
                  <figure className='project-img'>
                    <div className='project-item-icon-box'>
                      <IoEyeOutline />
                    </div>

                    <img src={project.src} alt={project.alt} loading='lazy' />
                  </figure>

                  <h3 className='project-title'>{project.title}</h3>

                  <p className='project-category'>{project.category}</p>
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </article>
  )
}

export default Portfolio

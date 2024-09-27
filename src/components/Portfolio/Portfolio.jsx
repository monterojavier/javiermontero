import { IoEyeOutline } from 'react-icons/io5'

import projects from '../../import/projectList'
import { motion } from 'framer-motion'

import { routeVariants, childVariants } from '../Utilities/variantStyle'
import './Portfolio.css'

function Portfolio() {
  return (
    <motion.article
      className='portfolio active'
      data-page='portfolio'
      variants={routeVariants}
      initial='initial'
      animate='animate'
      transtion='final'
    >
      <header>
        <h2 className='h2 article-title'>Portfolio</h2>
      </header>
      <motion.section className='projects' variants={childVariants} initial='initial' animate='final'>
        <ul className='project-list'>
          {projects.map((project) => {
            return (
              <li
                key={project.id}
                className='project-item  active'
                data-filter-item
                data-category={project.dataCategory}
              >
                <a href={project.link} target='_blank' rel='noreferrer'>
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
      </motion.section>
    </motion.article>
  )
}

export default Portfolio

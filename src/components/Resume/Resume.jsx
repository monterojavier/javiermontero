import { motion } from 'framer-motion'

import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'

import { routeVariants, childVariants } from '../Utilities/variantStyle'
import './Resume.css'

export default function Resume() {
  return (
    <motion.article
      className='resume active'
      data-page='resume'
      variants={routeVariants}
      initial='initial'
      animate='animate'
      transtion='final'
    >
      <header>
        <h2 className='h2 article-title'>Resume</h2>
      </header>
      <motion.div variants={childVariants} initial='initial' animate='final'>
        <Experience />
        <Education />
        <Skills />
      </motion.div>
    </motion.article>
  )
}

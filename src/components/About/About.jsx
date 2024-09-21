import { motion } from 'framer-motion'

import Interest from './Interest'

import { routeVariants, childVariants } from '../Utilities/variantStyle'
import './About.css'
import WhoAmI from './WhoAmI'
import Me from './Me'

export default function About() {
  return (
    <motion.article
      className='about active'
      data-page='about'
      variants={routeVariants}
      initial='initial'
      animate='animate'
      transtion='final'
    >
      <motion.header>
        <h2 className='h2 article-title'>About me &#128064;</h2>
      </motion.header>

      <motion.section className='about-section' variants={childVariants} initial='initial' animate='final'>
        <Me />
        <Interest />
        <WhoAmI />
      </motion.section>
    </motion.article>
  )
}

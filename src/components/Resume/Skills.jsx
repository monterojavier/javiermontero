import { HiOutlineSparkles } from 'react-icons/hi'

import skillList from '../../import/skillList.jsx'
import './Skills.css'

function Skills() {
  return (
    <section className='skill timeline'>
      <div className='title-wrapper'>
        <div className='icon-box'>
          <HiOutlineSparkles />
        </div>

        <h3 className='h3'>My skills</h3>
      </div>

      <div className='logos'>
        <div className='logos-slide'>
          {skillList.map((skill) => {
            return (
              <div className='ticker-item' key={skill.id}>
                {skill.icon}
              </div>
            )
          })}
        </div>
        <div className='logos-slide'>
          {skillList.map((skill) => {
            return (
              <div className='ticker-item' key={skill.id}>
                {skill.icon}
              </div>
            )
          })}
        </div>
      </div>
      {/* <div className='ticker-wrap'>
        <div className='ticker'>
          {skillList.map((skill) => {
            return (
              <div className='ticker-item' key={skill.id}>
                {skill.icon}
              </div>
            )
          })}
        </div>
      </div> */}
    </section>
  )
}

export default Skills

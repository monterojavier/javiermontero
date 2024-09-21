import { RiRobot2Fill } from 'react-icons/ri'
import { GiBrain } from 'react-icons/gi'
import { CgWebsite } from 'react-icons/cg'
import { FaNetworkWired } from 'react-icons/fa6'

export default function Interest() {
  return (
    <section className='about-text area-of-interest interest'>
      <header>
        <h3 className='h3 interest-title'>Areas of Interest</h3>
      </header>
      <ul className='interest-list'>
        <li className='interest-topic'>
          <RiRobot2Fill size={25} />
          <div className='interest-content-box'>
            <h4 className='interest-topic-title'>AI</h4>
          </div>
        </li>
        <li className='interest-topic'>
          <GiBrain size={25} />
          <div className='interest-content-box'>
            <h4 className='interest-topic-title'>Machine Learning</h4>
          </div>
        </li>
        <li className='interest-topic'>
          <CgWebsite size={25} />
          <div className='interest-content-box'>
            <h4 className='interest-topic-title'>Frontend</h4>
          </div>
        </li>
        <li className='interest-topic'>
          <FaNetworkWired size={25} />
          <div className='interest-content-box'>
            <h4 className='interest-topic-title'>Backend</h4>
          </div>
        </li>
      </ul>
    </section>
  )
}

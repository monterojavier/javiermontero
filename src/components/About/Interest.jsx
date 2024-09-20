import { RiRobot2Fill } from 'react-icons/ri'
import { GiBrain } from 'react-icons/gi'
import { CgWebsite } from 'react-icons/cg'
import { FaNetworkWired } from 'react-icons/fa6'

export default function Interest() {
  return (
    <section className='about-text area-of-interest service'>
      <header>
        <h3 className='h3 service-title'>Areas of Interest</h3>
      </header>
      <ul className='service-list'>
        <li className='service-item interest-content'>
          <div>
            <RiRobot2Fill size={25} />
          </div>
          <div className='service-content-box'>
            <h4 className='service-item-title'>AI</h4>
          </div>
        </li>
        <li className='service-item interest-content'>
          <div>
            <GiBrain size={25} />
          </div>
          <div className='service-content-box'>
            <h4 className='service-item-title'>Machine Learning</h4>
          </div>
        </li>
        <li className='service-item interest-content'>
          <div>
            <CgWebsite size={25} />
          </div>
          <div className='service-content-box'>
            <h4 className='service-item-title'>Frontend</h4>
          </div>
        </li>
        <li className='service-item interest-content'>
          <div>
            <FaNetworkWired size={25} />
          </div>
          <div className='service-content-box'>
            <h4 className='service-item-title'>Backend</h4>
          </div>
        </li>
      </ul>
    </section>

    // <section class='service'>
    //   <h3 class='h3 service-title'>What i'm doing</h3>

    //   <ul class='service-list'>
    //     <li class='service-item'>
    //       <div class='service-icon-box'>
    //         <img
    //           src='
    //             '
    //           alt='design icon'
    //           width='40'
    //         />
    //       </div>

    //       <div class='service-content-box'>
    //         <h4 class='h4 service-item-title'>Web design</h4>

    //         <p class='service-item-text'>The most modern and high-quality design made at a professional level.</p>
    //       </div>
    //     </li>

    //     <li class='service-item'>
    //       <div class='service-icon-box'>
    //         <img src='./assets/images/icon-dev.svg' alt='Web development icon' width='40' />
    //       </div>

    //       <div class='service-content-box'>
    //         <h4 class='h4 service-item-title'>Web development</h4>

    //         <p class='service-item-text'>High-quality development of sites at the professional level.</p>
    //       </div>
    //     </li>

    //     <li class='service-item'>
    //       <div class='service-icon-box'>
    //         <img src='./assets/images/icon-app.svg' alt='mobile app icon' width='40' />
    //       </div>

    //       <div class='service-content-box'>
    //         <h4 class='h4 service-item-title'>Mobile apps</h4>

    //         <p class='service-item-text'>Professional development of applications for iOS and Android.</p>
    //       </div>
    //     </li>

    //     <li class='service-item'>
    //       <div class='service-icon-box'>
    //         <img src='./assets/images/icon-photo.svg' alt='camera icon' width='40' />
    //       </div>

    //       <div class='service-content-box'>
    //         <h4 class='h4 service-item-title'>Photography</h4>

    //         <p class='service-item-text'>I make high-quality photos of any category at a professional level.</p>
    //       </div>
    //     </li>
    //   </ul>
    // </section>
  )
}

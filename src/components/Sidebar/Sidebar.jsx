import { useEffect, useRef, useCallback, useState } from 'react'
import { motion } from 'framer-motion'

import {
  IoPhonePortraitOutline,
  IoMailOutline,
  IoLocationOutline,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub
} from 'react-icons/io5'

import avatar from '../../images/avatar.png'

import './Sidebar.css'

export default function Sidebar() {
  const sidebarRef = useRef(null)
  const sidebarBtnRef = useRef(null)
  const [showContacts, setShowContacts] = useState(false)

  const handleContactsToggle = () => {
    setShowContacts((prevState) => !prevState)
  }

  const handleSidebarToggle = useCallback(() => {
    if (sidebarRef.current) {
      sidebarRef.current.classList.toggle('active')
    }
  }, [])

  useEffect(() => {
    const sidebarBtn = sidebarBtnRef.current
    if (sidebarBtn) {
      sidebarBtn.addEventListener('click', handleSidebarToggle)
    }
  })

  return (
    <aside ref={sidebarRef} className='sidebar' data-sidebar>
      <div className='sidebar-info'>
        <figure className='avatar-box'>
          <img src={avatar} alt='Javier Montero' width='80' />
        </figure>

        <div className='info-content'>
          <h1 className='name' title='Javier Montero'>
            Javier Montero
          </h1>

          <p className='title'>Software Engineer</p>
        </div>

        <button onClick={handleContactsToggle} ref={sidebarBtnRef} className='info_more-btn' data-sidebar-btn>
          <motion.span
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            {showContacts ? 'Hide Contacts' : 'Show Contacts'}
          </motion.span>
        </button>
      </div>

      <div className='sidebar-info_more'>
        <div className='separator'></div>

        <ul className='contacts-list'>
          <li className='contact-item'>
            <div className='icon-box'>
              <IoMailOutline />
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Email</p>

              <a href='mailto:monterodotjavier@icloud.com' className='contact-link'>
                monterodotjavier@icloud.com
              </a>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <IoPhonePortraitOutline />
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Phone</p>

              <a href='tel:+19165294606' className='contact-link'>
                +1 (916) 529-4606
              </a>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <IoLocationOutline />
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Location</p>

              <address>New York, NY</address>
            </div>
          </li>
        </ul>

        <div className='separator'></div>

        <ul className='social-list'>
          <li className='social-item'>
            <a
              href='https://www.x.com/yonkojav'
              target='_blank'
              rel='noreferrer'
              className='social-link'
              style={{ 'pointer-events': 'none', cursor: 'default' }}
            >
              <IoLogoTwitter />
            </a>
          </li>

          <li className='social-item'>
            <a
              href='https://www.instagram.com/yonkojav'
              target='_blank'
              rel='noreferrer'
              className='social-link'
              style={{ 'pointer-events': 'none', cursor: 'default' }}
            >
              <IoLogoInstagram />
            </a>
          </li>

          <li className='social-item'>
            <a href='https://github.com/monterojavier' target='_blank' rel='noreferrer' className='social-link'>
              <IoLogoGithub />
            </a>
          </li>

          <li className='social-item'>
            <a
              href='https://www.linkedin.com/in/javierlmontero/'
              target='_blank'
              rel='noreferrer'
              className='social-link'
            >
              <IoLogoLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

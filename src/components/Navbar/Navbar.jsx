import './Navbar.css'

import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <NavLink to='/about' className='navbar-link' data-nav-link>
            About
          </NavLink>
        </li>

        <li className='navbar-item'>
          <NavLink to='/resume' className='navbar-link' data-nav-link>
            Resume
          </NavLink>
        </li>

        <li className='navbar-item'>
          <NavLink to='/portfolio' className='navbar-link' data-nav-link>
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

import { NavLink } from 'react-router-dom'

import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <NavLink className='navbar-link ' to='/about' data-nav-link>
            About
          </NavLink>
        </li>

        <li className='navbar-item'>
          <NavLink className='navbar-link' to='/resume' data-nav-link>
            Resume
          </NavLink>
        </li>

        <li className='navbar-item'>
          <NavLink className='navbar-link' to='/portfolio' data-nav-link>
            Portfolio
          </NavLink>
        </li>

        {/* <li className='navbar-item'>
          <NavLink className='navbar-link' to='/blog' data-nav-link>
            Blog
          </NavLink>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navbar

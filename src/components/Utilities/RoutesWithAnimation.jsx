import { useEffect } from 'react'
import { About, Resume, Portfolio } from '../'
import { Routes, Route, useLocation } from 'react-router-dom'

export default function RoutesWithAnimation() {
  const location = useLocation()
  console.log(location)

  useEffect(() => {
    // page navigation variables
    const navigationLinks = document.querySelectorAll('[data-nav-link]')
    const pages = document.querySelectorAll('[data-page]')

    // add event to all nav link
    for (let i = 0; i < navigationLinks.length; i++) {
      navigationLinks[i].addEventListener('click', function () {
        for (let i = 0; i < pages.length; i++) {
          if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
            pages[i].classList.add('active')
            navigationLinks[i].classList.add('active')
            window.scrollTo(0, 0)
          } else {
            pages[i].classList.remove('active')
            navigationLinks[i].classList.remove('active')
          }
        }
      })
    }
  })

  return (
    <Routes location={location} key={location.key}>
      <Route exact path='/' element={<About />} />
      <Route path='about' element={<About />} />
      <Route path='resume' element={<Resume />} />
      <Route path='portfolio' element={<Portfolio />} />
    </Routes>
  )
}

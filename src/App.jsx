import { BrowserRouter } from 'react-router-dom'

import { Navbar, Sidebar } from './components'
import LocationProvider from './components/Utilities/LocationProvider'
import RoutesWithAnimation from './components/Utilities/RoutesWithAnimation'

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className='main-content'>
        <Navbar />
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </div>
    </BrowserRouter>
  )
}

export default App

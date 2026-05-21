import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortfolioPage from './pages/PortfolioPage'
import OffKeyboardPage from './pages/OffKeyboardPage'
import RecruiterPage from './pages/RecruiterPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"               element={<PortfolioPage />} />
        <Route path="/off-keyboard"   element={<OffKeyboardPage />} />
        <Route path="/recruiter-view" element={<RecruiterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

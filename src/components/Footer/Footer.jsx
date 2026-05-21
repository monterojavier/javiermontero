import './Footer.css'

export default function Footer({ time }) {
  return (
    <footer className="footer">
      <div className="footer-row">
        <span>© 2026 Javier Montero</span>
        <span className="footer-time">{time} · New York</span>
        <a href="#top" className="footer-top">Back to top ↑</a>
      </div>
    </footer>
  )
}

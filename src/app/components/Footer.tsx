import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-divider" />
        <div className="footer-row">
          <Link href="/" className="logo footer-logo">Keshava<span className="accent">Games</span></Link>
          <div className="footer-links">
            <Link href="/terms-of-service" className="footer-link">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn">in</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn">IG</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; Keshava Games. All rights reserved.</p>
          <p className="footer-cookie">When you visit or interact with Keshwa Games, our websites, services, or tools, we and our authorized service providers may use cookies and similar technologies to store information.</p>
        </div>
      </div>
    </footer>
  )
}
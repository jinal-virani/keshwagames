'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link href="/" className="logo">keshava<span className="accent">Games</span></Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/games" className="nav-link">Games</Link>
          {/* <Link href="/blog" className="nav-link">Blog</Link> */}
          <Link href="/support" className="nav-link">support</Link>
          <Link href="/#joinus" className="btn btn-orange">Play Now</Link>
        </div>
        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/games" className="nav-link" onClick={() => setMenuOpen(false)}>Games</Link>
        <Link href="/support" className="nav-link" onClick={() => setMenuOpen(false)}>Support</Link>
        {/* <Link href="/press" className="nav-link" onClick={() => setMenuOpen(false)}>Press</Link>
        <Link href="/#joinus" className="btn btn-orange" onClick={() => setMenuOpen(false)}>Join Us</Link> */}
      </div>
    </nav>
  )
}
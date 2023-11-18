import React from 'react'
import "../../globals.css"
import Link from 'next/link'

function Header() {
  return (
    <>
      <header className='page-header' role='banner'>
        <Link href="/" className="logo">Panaverse
          <i className="fab fa-staylinked"></i>DAO
        </Link>
        <div className='nav-links' id='navLinks'>
          
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/youtube">YouTube</Link></li>
            <li><Link href="/vids">Video</Link></li>
            <li><Link href="/img1">Image</Link></li>
            <li><Link href="/table">Table</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <h1 className='project-name'>Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</h1>
        <h2 className='project-tagline'>Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users</h2>
      </header>
    </>
  )
}

export default Header

import React from 'react'
import Link from "next/link"
// import Img from "../../public/logo.png"
function Image() {
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
      </header>
    <div className="imageContainer">
        <h1>Local Image Example</h1>
      <img src="/logo.png" alt="" className="img" />
    </div>
    </>
  )
}

export default Image

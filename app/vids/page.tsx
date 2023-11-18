import React from 'react'
import Link from 'next/link'

function Vids() {
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
    <div className='videoContainer'>
      <h1>Local video Example</h1>
      <video src={"/temp.mp4"} className='vids' controls />
    </div>
    </>
  )
}

export default Vids

import React from 'react'
import Link from 'next/link'
function Contac() {
  return (
    <div>

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

      <h2>Contact Us</h2>
      <form className='contactForm'>
        <div className='formGroup'>
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' name='name' required />
        </div>
        <div className='formGroup'>
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' name='email' required />
        </div>

        <div className='formGroup'>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" rows={4} required></textarea>
        <button type='submit'>Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Contac

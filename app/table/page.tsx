import React from 'react'
import Link from 'next/link'
function Table() {
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

      <h2>Table with dummy data</h2>
      <table className='customTable'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Number</th>
                <th>Institute</th>
                <th>Blood Group</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Awais</td>
                <td>223344</td>
                <td>ABC</td>
                <td>O+</td>
                <td>awez@email.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Abubakar</td>
                <td>112233</td>
                <td>ABC</td>
                <td>A+</td>
                <td>bakar@email.com</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Arslan</td>
                <td>445566</td>
                <td>XYZ</td>
                <td>B-</td>
                <td>arsi@email.com</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table

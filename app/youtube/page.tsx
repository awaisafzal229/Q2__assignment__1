import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function Youtube() {
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
    <Container>
      <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/JHU5jhpsq7g?si=JgCaUSEE6Rbu-C_i" title="YouTube video" allowFullScreen></iframe>
      </div>
    </Container>
    </>
  );
}

export default Youtube;


// {
//     /* <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */
// }
import React from 'react'

export default function Navbar() {
  return (
    <nav style={{ background: '#000' }} className="navbar navbar-expand-lg navbar-dark bg-black">
      <a style={{ marginLeft: '30px' }} className="navbar-brand" href="/">Aniket Chaudhari</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" style={{ marginRight: '30px' }} id="navbarSupportedContent">
        <ul className="navbar-nav fw-bold">
          <li className="nav-item active">
            <a className="nav-link" href="/">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">SERVICES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/resources">BLOG</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
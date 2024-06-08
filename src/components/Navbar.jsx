import React from 'react'
import logo from "../Images/logo.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
  <header className="header" data-header>
    <div className="container">

      <a href="#home" className="logo">
        <img src={logo} width="160" height="50" alt="Grilli - Home" />
      </a>

      <nav className="navbar" data-navbar>

        <button className="close-btn" aria-label="close menu" data-nav-toggler>
          <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
        </button>

        <a href="#home" className="logo">
          <img src={logo} width="160" height="50" alt="Grilli - Home" />
        </a>

        <ul className="navbar-list">

          <li className="navbar-item">
            <a href="#home" className="navbar-link hover-underline active">
              <div className="separator"></div>

              <span className="span">Home</span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#menu" className="navbar-link hover-underline">
              <div className="separator"></div>

              <span className="span">Menus</span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#about" className="navbar-link hover-underline">
              <div className="separator"></div>

              <span className="span">About Us</span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#event" className="navbar-link hover-underline">
              <div className="separator"></div>

              <span className="span">Events</span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#contact" className="navbar-link hover-underline">
              <div className="separator"></div>

              <span className="span">Contact</span>
            </a>
          </li>

        </ul>

        <div className="text-center">
          <p className="headline-1 navbar-title">Visit Us</p>

          <address className="body-4">
            Restaurant St, Delicious City, <br/>
            Nairobi 9578, KE
          </address>

          <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>

          <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">booking@grilli.com</a>

          <div className="separator"></div>

          <p className="contact-label">Booking Request</p>

          <a href="tel:+254123123456" className="body-1 contact-number hover-underline">
            +254-123-123456
          </a>
        </div>

      </nav>

      <a href="#home" className="btn btn-secondary">
        <span className="text text-1">Find A Table</span>

        <span className="text text-2" aria-hidden="true">Find A Table</span>
      </a>

      <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </button>

      <div className="overlay" data-nav-toggler data-overlay></div>

    </div>
  </header>
  )
}

export default Navbar
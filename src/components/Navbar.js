import React from 'react';
import { FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaSearch, FaPhone, FaAirbnb } from 'react-icons/fa';
import '../styles/Navbar.css';
import logo from '../assets/images/spacinfo_logo_modify.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <img src={logo} alt="SpaceInfo Tech Logo" />
        </div>
        <div className="welcome-text">Welcome to SpaceInfo Tech Solution & Service</div>
        <div className="contact-info">
          <span className="email"><FaEnvelope /> info@spacinfo.com</span>
          <div className="social-icons">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="navbar-bottom">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-right">
          <FaSearch />
          <span className="phone"><FaPhone /> +1 (123) 456-7890</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

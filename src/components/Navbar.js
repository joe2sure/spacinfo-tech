import React, { useState } from "react";
import {
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaSearch,
  FaPhone,
  FaBars,
  FaTimes
} from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../assets/images/spacinfo_logo_modify.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="SpaceInfo Tech Logo" />
          </Link>
        </div>
        <div className="welcome-text">
          Welcome to SpaceInfo Tech Solution & Service
        </div>
        <div className="contact-info">
          <span className="email">
            <FaEnvelope /> info@spacinfotech.co.uk
          </span>
          <div className="social-icons">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="menu-icon" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={handleMenuToggle}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleMenuToggle}>About</Link>
          </li>
          <li>
            <Link to="/services" onClick={handleMenuToggle}>Services</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleMenuToggle}>Contact</Link>
          </li>
        </ul>
        <div className="nav-right">
          <FaSearch />
          <span className="phone">
            <FaPhone /> 07482187549
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
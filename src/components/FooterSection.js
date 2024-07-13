import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import '../styles/FooterSection.css';

const FooterSection = () => {
  return (
    <footer>
      <div className="footer-upper">
        <div className="footer-container">
          <div className="footer-column">
            <h2 className="footer-company">Spacinfo Tech</h2>
            <p className="footer-description">
              We work with a passion of taking challenges and creating new ones to upscale new inventions.
            </p>
            <div className="footer-social-icons">
              <FaFacebook className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaLinkedin className="social-icon" />
            </div>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Links</h3>
            <div className="footer-links-border"></div>
            <ul className="footer-links">
              <li>About</li>
              <li>Meet our Team</li>
              <li>News & Media</li>
              <li>Our Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="footer-newsletter-text">
              Signup for our latest news & articles. We won't give you spam mails.
            </p>
            <div className="footer-newsletter-signup">
              <input type="email" placeholder="Enter your email" />
              <button><FaPaperPlane /></button>
            </div>
            <div className="footer-checkbox">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I agree to all terms and policies of the company.</label>
            </div>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <p><FaPhone /> +88(9800) 6802</p>
            <p><FaEnvelope /> spacinfo@co.uk</p>
            <p>88 Brooklyn Golden Road</p>
          </div>
        </div>
      </div>
      <div className="footer-lower">
        <p>@ All Copyright 2024 by Joe</p>
      </div>
    </footer>
  );
};

export default FooterSection;

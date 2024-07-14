import React from 'react';
import '../styles/ContactPage.css';
import contactBanner from '../assets/images/banner_img2.jpg'; // Import the banner image

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-banner" style={{ backgroundImage: `url(${contactBanner})` }}>
        <div className="contact-banner-content">
          <h1 className="contact-banner-title">CONTACT</h1>
          <p className="contact-banner-subtitle">Explore</p>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-text">
          <h3 className="contact-subtitle">-- Contact With Us</h3>
          <h2 className="contact-title">Feel Free to Get in Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-phone"></i></div>
              <div className="contact-details">
                <p>Call anytime</p>
                <p>+88(9800) 6802</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-envelope"></i></div>
              <div className="contact-details">
                <p>Send Email</p>
                <p>needhelp@co.uk</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="contact-details">
                <p>Visit Now</p>
                <p>wolvehampton street uk</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-row">
              <textarea placeholder="Write a Message"></textarea>
            </div>
            <div className="form-row">
              <button type="submit">SEND A MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
      <div className="get-started-section">
        <div className="get-started-container">
          <div className="get-started-overlay">
            <div className="get-started-content">
              <h3>Let's get started</h3>
              <h2>World class IT solutions partner</h2>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="map-section">
        <div className="map-container"></div>
      </div>
    </div>
  );
};

export default Contact;

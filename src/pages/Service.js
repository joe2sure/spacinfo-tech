import React from 'react';
import '../styles/ServicePage.css';
import serviceBanner from '../assets/images/banner_img1.jpg'; // Import the banner image
import serviceImage1 from '../assets/images/banner_img3.jpg'; // Sample image
import serviceImage2 from '../assets/images/AboutUs_img.jpg'; // Sample image
import cardImage1 from '../assets/images/AboutUs_img2.jpg'; // Sample image for cards
import cardImage2 from '../assets/images/banner_img2.jpg'; // Sample image for cards

const Service = () => {
  return (
    <div className="service-page">
      <div className="service-banner" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="service-banner-content">
          <h1 className="service-banner-title">SERVICE</h1>
          <p className="service-banner-subtitle">Explore</p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-container">
          <div className="about-images">
            <img src={serviceImage1} alt="Service 1" className="about-image-1" />
            <img src={serviceImage2} alt="Service 2" className="about-image-2" />
          </div>
          <div className="about-content">
            <h3 className="about-subtitle">- Discover More Now</h3>
            <h2 className="about-title">We're Partner of Your Innovations</h2>
            <p className="about-text">
              At SpaceInfo Tech Services, we are dedicated to revolutionizing the IT landscape by nurturing talent and fostering a skilled workforce. Our mission is to connect ambitious graduates with rewarding career opportunities through hands-on training in essential IT domains such as machine learning, data analysis, cybersecurity, and more.
            </p>
            <div className="about-services">
              <div className="service-item">
                <span>Web Development</span>
              </div>
              <div className="service-item">
                <span>Internal Networking</span>
              </div>
            </div>
            <ul className="about-checklist">
              <li>Bringing new IT solutions to the market</li>
              <li>To be included in the list of the best 100 IT companies</li>
              <li>Our company have senior IT professionals</li>
            </ul>
            <button className="learn-more-btn">LEARN MORE</button>
          </div>
        </div>
      </div>
      <div className="cards-section">
        <div className="cards-row">
          <div className="card">
            <div className="card-image-container">
              <img src={cardImage1} alt="Card 1" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Information Technology</h3>
              <p className="card-text">Building communications networks, safeguarding information, creating and administering databases.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image-container">
              <img src={cardImage2} alt="Card 2" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Software Development</h3>
              <p className="card-text">Developing, deploying, and maintaining software applications for various platforms.</p>
            </div>
          </div>
        </div>
        <div className="cards-row">
          <div className="card">
            <div className="card-image-container">
              <img src={cardImage1} alt="Card 3" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Data Analysis</h3>
              <p className="card-text">Interpreting complex data to help businesses make informed decisions.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image-container">
              <img src={cardImage2} alt="Card 4" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Cybersecurity</h3>
              <p className="card-text">Protecting systems, networks, and programs from digital attacks.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-services-section">
        <div className="more-services-container">
          <div className="more-services-images">
            <img src={serviceImage1} alt="More Service 1" className="more-service-image-1" />
            <img src={serviceImage2} alt="More Service 2" className="more-service-image-2" />
          </div>
          <div className="more-services-content">
            <h3 className="more-services-subtitle">-- Products</h3>
            <h2 className="more-services-title">Cashwyre Payment Service</h2>
            <div className="more-services-columns">
              <div className="more-service-column">
                <div className="more-service-circle">01</div>
                <p className="more-service-text">
                </p>
              </div>
              <div className="more-service-column">
                <div className="more-service-circle">02</div>
                <p className="more-service-text"></p>
              </div>
            </div>
            <button className="learn-more-btn">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

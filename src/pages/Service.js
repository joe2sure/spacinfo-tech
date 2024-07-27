import React, { useState } from "react";
import "../styles/ServicePage.css";
import serviceBanner from "../assets/images/banner_img1.jpg";
import serviceImage1 from "../assets/images/banner_img3.jpg";
import serviceImage2 from "../assets/images/AboutUs_img.jpg";
import cardImage1 from "../assets/images/AboutUs_img2.jpg";
import cardImage2 from "../assets/images/banner_img2.jpg";
import { Link } from "react-router-dom";

const Service = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  const toggleExpand1 = () => setExpanded1(!expanded1);
  const toggleExpand2 = () => setExpanded2(!expanded2);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  const serviceText1 =
    "Cashwyre specializes in cross-border payments and offers various financial services, including global transfers (PaySend), automated Bitcoin and USD savings (BitSave), and cryptocurrency trading. Additional services include crypto transactions, WebPay for receiving global payments, airtime and data purchases, tuition payments, and gift cards.";

  const serviceText2 =
    "Cashwyre was conceived in 2022 to address the significant challenges in Africa's payment infrastructure, particularly the difficulty in value exchange. Launched in mid-2023 on Android and iOS, it utilizes Bitcoin technology for efficient and rapid cross-country transactions. Cashwyre now enables seamless remittances to over 10 African countries and China through a single API call, offering competitive rates and high-speed processing.";

  return (
    <div className="service-page">
      <div
        className="service-banner"
        style={{ backgroundImage: `url(${serviceBanner})` }}
      >
        <div className="service-banner-content">
          <h1 className="service-banner-title">SERVICE</h1>
          <p className="service-banner-subtitle">Explore</p>
        </div>
      </div>
      
      <div className="about-section">
        <div className="about-container">
          <div className="about-images">
            <img
              src={serviceImage1}
              alt="Service 1"
              className="about-image-1"
            />
            <img
              src={serviceImage2}
              alt="Service 2"
              className="about-image-2"
            />
          </div>
          <div className="about-content">
            <h3 className="about-subtitle">- Discover More Now</h3>
            <h2 className="about-title">We're Partner of Your Innovations</h2>
            <p className="about-text">
              At SpaceInfo Tech Services, we are dedicated to revolutionizing
              the IT landscape by nurturing talent and fostering a skilled
              workforce. Our mission is to connect ambitious graduates with
              rewarding career opportunities through hands-on training in
              essential IT domains such as machine learning, data analysis,
              cybersecurity, and more.
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
        <div className="cards-container">
          <div className="card">
            <div className="card-image-container">
              <img src={cardImage1} alt="Card 1" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Information Technology</h3>
              <p className="card-text">
                Building communications networks, safeguarding information,
                creating and administering databases.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image-container">
              <img src={cardImage2} alt="Card 2" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Software Development</h3>
              <p className="card-text">
                Developing, deploying, and maintaining software applications for
                various platforms.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image-container">
              <img src={cardImage1} alt="Card 3" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Data Analysis</h3>
              <p className="card-text">
                Interpreting complex data to help businesses make informed
                decisions.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image-container">
              <img src={cardImage2} alt="Card 4" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Cybersecurity</h3>
              <p className="card-text">
                Protecting systems, networks, and programs from digital attacks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-services-section">
        <div className="more-services-container">
          <div className="more-services-content">
            <h3 className="more-services-subtitle">-- Discover More</h3>
            <h2 className="more-services-title">Cashwyre Payment Service</h2>
            <div className="more-services-columns">
              <div className="more-service-column">
                <div className="more-service-circle">01</div>
                <div className="more-service-text-container">
                  <p className="more-service-text">
                    {expanded1 ? serviceText1 : truncateText(serviceText1, 100)}
                  </p>
                  <button className="read-more-btn" onClick={toggleExpand1}>
                    {expanded1 ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
              <div className="more-service-column">
                <div className="more-service-circle">02</div>
                <div className="more-service-text-container">
                  <p className="more-service-text">
                    {expanded2 ? serviceText2 : truncateText(serviceText2, 100)}
                  </p>
                  <button className="read-more-btn" onClick={toggleExpand2}>
                    {expanded2 ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
            <Link to="/cashwyre" className="learn-more-btn">
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

import React from "react";
import { FaDesktop, FaNetworkWired, FaCheck } from "react-icons/fa";
import "../styles/AboutPage.css";
import CEOSection from "../components/CEOSection.js";
import aboutUsBanner from '../assets/images/banner_img2.jpg' 

const AboutUsPage = () => {
  const aboutImage1 = require("../assets/images/AboutUs_img.jpg");
  const aboutImage2 = require("../assets/images/AboutUs_img2.jpg");
  return (
    <>
      <div
        className="about-banner"
        style={{ backgroundImage: `url(${aboutUsBanner})` }}
      >
        <div className="about-banner-content">
          <h1 className="about-banner-title">ABOUT US</h1>
          <p className="about-banner-subtitle">Explore</p>
        </div>
      </div>
      <CEOSection />
      <section className="about-section">
        <div className="about-container">
          <div className="about-images">
            <img
              src={aboutImage1}
              alt="About SpaceInfo-tech 1"
              className="about-image-1"
            />
            <img
              src={aboutImage2}
              alt="About SpaceInfo-tech 2"
              className="about-image-2"
            />
          </div>
          <div className="about-content">
            <h3 className="about-subtitle">- About SpaceInfo-tech</h3>
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
                <FaDesktop className="service-icon" />
                <span>Azure Systems Administrator</span>
              </div>
              <div className="service-item">
                <FaNetworkWired className="service-icon" />
                <span>Data Scientist</span>
              </div>
            </div>
            <ul className="about-checklist">
              <li>
                <FaCheck className="check-icon" /> Bridging the gap of
                unemployable graduates and the demands of tech market
              </li>
              <li>
                <FaCheck className="check-icon" /> To be included in the list of
                the best 100 IT companies
              </li>
              <li>
                <FaCheck className="check-icon" /> Our company have senior IT
                professionals
              </li>
            </ul>
            <button className="learn-more-btn">LEARN MORE</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;

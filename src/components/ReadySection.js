// src/components/ReadySection.js
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import '../styles/ReadySection.css';
import circular_img from '../assets/images/AboutUs_img.jpg'

const ReadySection = () => {
  const benefits = [
    "IT solutions are created by top experts",
    "Receive free consultation for any kind of IT solution",
    "Support 24/7 for partners during the process"
  ];

  return (
    <section className="ready-section">
      <div className="ready-container">
        <div className="ready-content">
          <div className="ready-image">
            <img src={circular_img} alt="Ready to make you job ready" />
          </div>
          <div className="ready-text">
            <h2>We're Ready To Make YOU! Job READY</h2>
            <ul className="ready-benefits">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <FaCheck className="check-icon" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <button className="ready-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;
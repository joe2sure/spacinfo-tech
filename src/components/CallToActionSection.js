import React from 'react';
import '../styles/CallToActionSection.css';

const CallToActionSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-text">
          <p className="cta-subtitle">We're here to help you grow</p>
          <h1 className="cta-title">Looking for the Best IT masterclass?</h1>
        </div>
        <button className="cta-button">LEARN MORE</button>
      </div>
    </section>
  );
};

export default CallToActionSection;

// src/components/BrandSection.js
import React from 'react';
import '../styles/BrandSection.css';

const BrandSection = () => {
  return (
    <section className="brand-section">
      <div className="brand-container">
        <div className="brand-text-row">
          {[...Array(3)].map((_, index) => (
            <span key={index} className="brand-text">SpacInfo Tech</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
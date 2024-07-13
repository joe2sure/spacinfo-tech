// src/components/OfferingsSection.js
// import './OfferingsSection.css';
import React from 'react';
import { FaCode, FaChartLine, FaShieldAlt, FaPencilRuler, FaDatabase } from 'react-icons/fa';
import '../styles/OfferingsSection.css';


const OfferingBox = ({ icon, title, description }) => (
  <div className="offering-box">
    <div className="offering-icon-circle">
      {icon}
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const OfferingsSection = () => {
  const offerings = [
    {
      icon: <FaCode />,
      title: "Product Development",
      description: "Crafting innovative software solutions tailored to your needs."
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description: "Boosting your online presence and driving growth."
    },
    {
      icon: <FaShieldAlt />,
      title: "Security System",
      description: "Protecting your digital assets with cutting-edge security."
    },
    {
      icon: <FaPencilRuler />,
      title: "UI/UX Designing",
      description: "Creating intuitive and engaging user experiences."
    },
    {
      icon: <FaDatabase />,
      title: "Data Analysis",
      description: "Transforming raw data into actionable insights."
    }
  ];

  return (
    <section className="offerings-section">
      <div className="offerings-container">
        <div className="offerings-header">
          <h2 className="offerings-subtitle">-- What We're Offering</h2>
          <p className="offerings-summary">
            We provide comprehensive IT solutions to help businesses thrive in the digital age.
          </p>
        </div>
        <h1 className="offerings-title">Dealing in all Professional IT Services</h1>
        <div className="offerings-grid">
          {offerings.map((offering, index) => (
            <OfferingBox key={index} {...offering} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
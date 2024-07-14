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
      title: "Data Engineer –AWS",
      description: "Crafting innovative software solutions tailored to your needs."
    },
    {
      icon: <FaChartLine />,
      title: "Machine Learning Engineer",
      description: "Boosting your online presence and driving growth."
    },
    {
      icon: <FaShieldAlt />,
      title: "Business Intelligence Analyst",
      description: "Protecting your digital assets with cutting-edge security."
    },
    {
      icon: <FaPencilRuler />,
      title: "Project Manager",
      description: "Creating intuitive and engaging user experiences."
    },
    {
      icon: <FaDatabase />,
      title: "Database Application Developer",
      description: "Transforming raw data into actionable insights."
    }
  ];

  return (
    <section className="offerings-section">
      <div className="offerings-container">
        <div className="offerings-header">
          <h2 className="offerings-subtitle">-- What We're Offering</h2>
          <p className="offerings-summary">
          At Spacinfo Tech, we harness cutting-edge technologies to not only meet but exceed industry standards, ensuring our graduates are at the forefront of IT innovation and expertise
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
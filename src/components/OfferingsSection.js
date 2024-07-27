import React, { useEffect, useRef } from 'react';
import { FaCode, FaChartLine, FaShieldAlt, FaPencilRuler, FaDatabase, FaAddressBook, FaSuitcase } from 'react-icons/fa';
import '../styles/OfferingsSection.css';
// import { icon } from '@fortawesome/fontawesome-svg-core';


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
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current; // store ref in a variable

    const handleScroll = () => {
      if (sectionElement) {
        const { top } = sectionElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          sectionElement.classList.add('animate');
        } else {
          sectionElement.classList.remove('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRef]);
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
    },
    {
      icon: <FaAddressBook />,
      title: "Data Entry",
      description: "Ensuring accurate and efficient data management for your business."
    },
    {
      icon: <FaSuitcase />,
      title: "Many More",
      description: "Explore a wide range of professional IT services tailored to your needs."
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
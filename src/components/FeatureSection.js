// src/components/FeaturesSection.js
import React from 'react';
import { FaLightbulb, FaCog, FaRocket } from 'react-icons/fa';
import '../styles/FeaturesSection.css';


const FeatureCard = ({ image, icon, title }) => (
  <div className="feature-card">
    <div className="feature-image-container">
      <img src={image} alt={title} className="feature-image" />
      <div className="feature-icon-container">
        {icon}
      </div>
    </div>
    <div className="feature-content">
      <h3>{title}</h3>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      image: require('../assets/images/banner_img1.jpg'),
      icon: <FaLightbulb />,
      title: 'Perfect solutions that business demands'
    },
    {
      image: require('../assets/images/AboutUs_img.jpg'),
      icon: <FaCog />,
      title: 'Providing excellent technology solutions'
    },
    {
      image: require('../assets/images/banner_img3.jpg'),
      icon: <FaRocket />,
      title: 'We eagerly put in use new IT innovations'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
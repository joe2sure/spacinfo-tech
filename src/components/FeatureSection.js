// src/components/FeaturesSection.js
import React, { useEffect, useRef } from 'react';
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
      <p>{title}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
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

  const features = [
    {
      image: require('../assets/images/banner_img1.jpg'),
      icon: <FaLightbulb />,
      title: 'We are dedicated to empowering talent with future-ready skills, integrating the latest IT trends and practices to prepare our trainees for the challenges of tomorrow’s digital landscape'
    },
    {
      image: require('../assets/images/AboutUs_img.jpg'),
      icon: <FaCog />,
      title: 'Through a combination of innovative methodologies and real-world applications, we transform potential into professional mastery, producing highly skilled IT professionals ready to lead in a competitive market'
    },
    {
      image: require('../assets/images/banner_img3.jpg'),
      icon: <FaRocket />,
      title: 'We eagerly put in use new IT innovations to beat market demands in churning the best of the best'
    }
  ];

  return (
    <section className="features-section" ref={sectionRef}>
      <div className="features-container">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

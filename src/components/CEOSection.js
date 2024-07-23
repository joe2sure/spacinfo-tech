import React, { useEffect, useRef } from 'react';
import '../styles/CEOSection.css';
import authorImage from '../assets/trainer/author.jpg';

const CEOSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="ceo-section" ref={sectionRef}>
      <div className="ceo-content">
        <div className="ceo-image-container">
          <img 
            src={authorImage} 
            alt="CEO" 
            className="ceo-image"
          />
          <div className="image-overlay"></div>
        </div>
        <div className="ceo-info">
          <h2 className="ceo-title">Meet Our CEO</h2>
          <p className="ceo-description">
            A seasoned Software Engineer holding a Master's Degree in Data Science, 
            boasting over two decades of extensive expertise in both Technology and 
            Business realms. Renowned for mastery in Payment systems and policies 
            throughout the African continent.
          </p>
          <div className="ceo-stats">
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">MSc</span>
              <span className="stat-label">Data Science</span>
            </div>
            <div className="stat">
              <span className="stat-number">Africa</span>
              <span className="stat-label">Payment Systems Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
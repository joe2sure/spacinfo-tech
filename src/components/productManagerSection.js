import React, { useEffect, useRef } from 'react';
import '../styles/ProductManagerSection.css';
import productManagerImage from '../assets/trainer/product_manager.png'; // Update the path to your image

const ProductManagerSection = () => {
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
    <section className="product-manager-section" ref={sectionRef}>
      <div className="product-manager-content">
        <div className="product-manager-info">
          <h2 className="product-manager-title">Meet Our Product Manager</h2>
          <p className="product-manager-description">
            A dynamic and innovative Product Manager with a proven track record of delivering 
            successful products. With a strong background in Agile methodologies and user-centric 
            design, our Product Manager ensures that our solutions meet the highest standards of 
            quality and usability.
          </p>
          <div className="product-manager-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">Agile</span>
              <span className="stat-label">Methodologies Expert</span>
            </div>
            <div className="stat">
              <span className="stat-number">User-Centric</span>
              <span className="stat-label">Design Advocate</span>
            </div>
          </div>
        </div>
        <div className="product-manager-image-container">
          <img 
            src={productManagerImage} 
            alt="Product Manager" 
            className="product-manager-image"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductManagerSection;
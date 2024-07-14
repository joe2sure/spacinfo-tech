import React, {useRef}from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/Banner.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


// Import images directly
import bannerImage1 from '../assets/images/banner_img1.jpg';
import bannerImage3 from '../assets/images/banner_img3.jpg';

const Banner = () => {
  const bannerImages = [bannerImage1, bannerImage3];

  const carouselRef = useRef(null);

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.decrement();
    }
  };

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.increment();
    }
  };

  return (
    <div className="banner">
      <Carousel
        ref={carouselRef}
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        interval={3000} // Reduce the transition time to 3 seconds
        transitionTime={500} // Smooth transition time
      >
        {bannerImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Banner ${index + 1}`} />
            <div className="banner-content">
              <p className="banner-subtitle">BECOME EMPLOYABLE IN DEMANDING IT SKILL</p>
              <h1 className="banner-title">GET TRAINED BY EXPERIENCED EXPERT</h1>
              <button className="learn-more-btn">LEARN MORE</button>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="banner-buttons">
        <div className="banner-button left" onClick={prevSlide}>
          <FaArrowLeft />
        </div>
        <div className="banner-button right" onClick={nextSlide}>
          <FaArrowRight />
        </div>
      </div>
      <div className="banner-overlay left"></div>
      <div className="banner-overlay right"></div>
    </div>
  );
};

export default Banner;

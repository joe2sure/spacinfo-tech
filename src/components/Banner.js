import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Import images directly
import '../styles/Banner.css';
import bannerImage1 from '../assets/images/banner_img1.jpg';
import bannerImage2 from '../assets/images/banner_img2.jpg';
import bannerImage3 from '../assets/images/banner_img3.jpg';
// import { Link } from 'react-router-dom';

const Banner = () => {
  const bannerContents = [
    {
      image: bannerImage1,
      subtitle: "BECOME EMPLOYABLE IN DEMANDING IT SKILLS",
      title: "GET TRAINED BY EXPERIENCED EXPERTS",
      link: "/services",
    },
    {
      image: bannerImage2,
      subtitle: "ADVANCE YOUR CAREER IN TECHNOLOGY",
      title: "CUTTING-EDGE COURSES FOR PROFESSIONALS",
      link: "/services",
    },
    {
      image: bannerImage3,
      subtitle: "SIMPLIFYING PAYMENTS ACROSS AFRICA",
      title: "WELCOME TO CASHWYRE",
      link: "/cashwyre",
    },
  ];

  const carouselRef = useRef(null);

  const navigate = useNavigate();

  const handleLearnMore = (link) => {
    navigate(link);
  };

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
        interval={2000}
        transitionTime={500}
      >
        {bannerContents.map((content, index) => (
          <div key={index}>
            <img src={content.image} alt={`Banner ${index + 1}`} />
            <div className="banner-content">
              <p className="banner-subtitle">{content.subtitle}</p>
              <h1 className="banner-title">{content.title}</h1>
              <button className="learn-more-btn" onClick={() => handleLearnMore(content.link)}>
                LEARN MORE
              </button>
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
import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/TestimonialSection.css';

import testimonialPic1 from '../assets/images/testimonial_pic.svg';
import testimonialPic2 from '../assets/images/testimonial_pic2.svg';
import testimonialPic3 from '../assets/images/testimonial_pic3.svg';

const TestimonialCard = ({ image, name, role, testimonial, rating }) => (
  <div className="testimonial-card">
    <div className="testimonial-header">
      <div className="testimonial-image-container">
        <img src={image} alt={name} className="testimonial-image" />
      </div>
      <div className="testimonial-info">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
    <div className="testimonial-content">
      <div className="testimonial-rating">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="star-icon" />
        ))}
      </div>
      <p>{testimonial}</p>
    </div>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      image: testimonialPic1,
      name: 'Ugonna Anamekwe',
      role: 'Tech enthusiast',
      testimonial: 'SpacInfo Tech delivered an outstanding IT training sessions that exceeded our expectations. Their team was professional and truly understood our vision as IT enthusiast.',
      rating: 5
    },
    {
      image: testimonialPic2,
      name: 'Peace Onwe ',
      role: 'Tech enthusiast',
      testimonial: 'The data analysis masterclass programme developed by SpacInfo Tech has significantly improved how adept i am in analyzing big data and lead generation. Highly recommended!',
      rating: 5
    },
    {
      image: testimonialPic3,
      name: 'Miera Oke',
      role: 'Tech enthusiast',
      testimonial: 'SpacInfo Tech\'s cybersecurity solution has greatly enhanced our data protection. Their expertise and support have been invaluable to our company.',
      rating: 4
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-subtitle">-- Client Testimonials</h2>
        <h1 className="testimonial-title">What They're Saying?</h1>
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;

// src/components/ProjectsSection.js
import React from 'react';
import Slider from 'react-slick';
import { FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/ProjectsSection.css';

const ProjectCard = ({ image, title }) => (
  <div className="project-card">
    <img src={image} alt={title} />
    <div className="project-overlay">
      <div className="project-content">
        <h3>{title}</h3>
        <p>DESIGN / IDEAS</p>
      </div>
      <button className="project-button">
        <FaArrowRight />
      </button>
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    { image: require('../assets/images/AboutUs_img.jpg'), title: 'Cloud Infrastructure Setup' },
    { image: require('../assets/images/banner_img1.jpg'), title: 'AI-powered Analytics' },
    { image: require('../assets/images/banner_img3.jpg'), title: 'Cybersecurity Solution' },
    { image: require('../assets/images/banner_img2.jpg'), title: 'AI-powered Analytics' },
    { image: require('../assets/images/banner_img1.jpg'), title: 'Cybersecurity Solution' },
    { image: require('../assets/images/AboutUs_img2.jpg'), title: 'Cloud Infrastructure Setup' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-subtitle">- Our Completed Projects</h2>
          <p className="projects-summary">
            There are various successful projects from IT strategy consulting to the end-to-end development of scalable solutions made by our creative and experienced IT professionals.
          </p>
        </div>
        <h1 className="projects-title">Improve & Enhance Our Tech Projects</h1>
        <Slider {...settings} className="projects-slider">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectsSection;
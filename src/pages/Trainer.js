import React, { useEffect, useRef } from 'react';
import '../styles/Trainer.css';

const Trainer = ({ name, role, summary, experience, image }) => {
  const trainerRef = useRef(null);

  useEffect(() => {
    const trainerElement = trainerRef.current; // store ref in a variable

    const handleScroll = () => {
      if (trainerElement) {
        const { top } = trainerElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          trainerElement.classList.add('animate');
        } else {
          trainerElement.classList.remove('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [trainerRef]);

  return (
    <div className="trainer-card" ref={trainerRef}>
      <div className="trainer-image">
        <img
          src={image}
          alt={name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://via.placeholder.com/150?text=${name}`;
          }}
        />
      </div>
      <div className="trainer-info">
        <h3>{name}</h3>
        <h4>{role}</h4>
        <p>{summary}</p>
        <span className="experience">Experience: {experience} years</span>
      </div>
    </div>
  );
};

export default Trainer;

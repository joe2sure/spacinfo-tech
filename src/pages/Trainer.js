import React from "react";
import "../styles/Trainer.css";

const Trainer = ({ name, role, summary, experience, image }) => {
  return (
    <div className="trainer-card">
      <div className="trainer-image">
        {/* We'll use a placeholder image here */}
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

import React from 'react';
// import Trainer from './Trainer';
import '../styles/TrainerSection.css';
import Trainer from '../pages/Trainer';

import imoukhedemeImage from '../assets/trainer/im_paul.png';
import sharhabilImage from '../assets/trainer/sharhabil_tasiu.png';
import muhammadImage from '../assets/trainer/mohamed_isa.png';
import abdulraheemImage from '../assets/trainer/Abdul_bashir.png';
import nwabunweneImage from '../assets/trainer/nwabunwene_Osa.png';
import olanrewajuImage from '../assets/trainer/olanrewaju_amusa.png';
import nisanImage from '../assets/trainer/Nisan_dave.png';
import mercyImage from '../assets/trainer/Mercy_Tijani.png';
import oluwafemiImage from '../assets/trainer/Oluwafemi_Adunmo.png'


const trainers = [
  {
    name: "Imoukhedeme Paul",
    role: "Data Analysis using Python",
    summary: "Experienced data science professional with expertise in data acquisition, cleaning, exploration, and machine learning.",
    experience: 5,
    image: imoukhedemeImage
  },
  {
    name: "Sharhabil Tasiu Abdulrauf",
    role: "Data Analysis using R",
    summary: "Specializes in data science methodologies for examining infectious disease transmission dynamics.",
    experience: 3,
    image: sharhabilImage
  },
  {
    name: "Muhammad Buhari Isa",
    role: "Data Analysis using STATA",
    summary: "Research analyst specializing in policy analysis, health research, and causal inference methodologies.",
    experience: 3,
    image: muhammadImage
  },
  {
    name: "Abdulraheem Bashir",
    role: "Data Visualization using Power BI",
    summary: "Data analyst with expertise in data governance, storytelling, and evidence-based process improvement.",
    experience: 3,
    image: abdulraheemImage
  },
  {
    name: "Nwabunwene Osa-Afiana",
    role: "Data Visualization using Tableau",
    summary: "Seasoned data scientist with experience in research using data-driven methodologies and industry mapping.",
    experience: 5,
    image: nwabunweneImage
  },
  {
    name: "Olanrewaju Amusa",
    role: "Software Testing",
    summary: "Lead Trainer in UI/UX and Web Development with expertise in creating and testing user-centric designs.",
    experience: 4,
    image: olanrewajuImage,
  },
  {
    name: "Nisan Dave",
    role: "Cloud Computing and Database Development",
    summary: "Multi-skilled Software Developer proficient in various platforms, languages, and embedded systems.",
    experience: 8,
    image: nisanImage
  },
  {
    name: "Mercy Tijani",
    role: "Microsoft Office Macros and VBA",
    summary: "Seasoned ICT professional with expertise in computer utilization, data processing, and structured programming.",
    experience: 10,
    image: mercyImage
  },
  {
    name: "Oluwafemi Adunmo",
    role: "Graphic Design Expert and Product Manager",
    experience: 4+'+',
    image: oluwafemiImage,

  }
];

const TrainerSection = () => {
  return (
    <section className="trainer-section">
      <h2>Our Expert Trainers</h2>
      <div className="trainer-grid">
        {trainers.map((trainer, index) => (
          <Trainer key={index} {...trainer} />
        ))}
      </div>
    </section>
  );
};

export default TrainerSection;
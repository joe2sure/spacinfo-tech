import React, { useState } from "react";

import "../styles/CashwyerPaymentService.css";
import sundayImage from '../assets/images/sunday.png';
import victorOlusanyaImage from '../assets/images/victorOlusanya.png';
import heritageImage from '../assets/images/heritageFalogun.png';
import emmaImage from '../assets/images/author.jpg';
import victorNwankweImage from '../assets/images/victorNwankwe.png';


const CashwyrePaymentService = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const [expandedTeamMember, setExpandedTeamMember] = useState(null);
  const [expandedReason, setExpandedReason] = useState(null);

  const services = [
    {
      name: "Cashwyre PaySend",
      description: "Global transfers with Cashwyre. Send money from anywhere in the world directly to mobile telco wallets and bank accounts.",
    },
    {
      name: "Cashwyre BitSave",
      description: "Automated/smart Bitcoin & USD savings. Choose your preferred savings frequency — daily, weekly, or monthly.",
    },
    {
      name: "Buy and Sell Bitcoin & Crypto",
      description: "Conveniently buy and sell Bitcoin directly on the platform. We also provide Over-The-Counter (OTC) trading services.",
    },
    {
      name: "Send and Receive Bitcoin & Crypto",
      description: "Easily send and receive Bitcoin and cryptocurrencies. We support assets like Bitcoin (on-chain and Lightning invoice), USDT, and USDC.",
    },
    {
      name: "Cashwyre Paylink",
      description: "WebPay to receive payments and tips globally. Effortlessly receive payments for your services or gigs, and accept international payments.",
    },
    {
      name: "Cashwyre Dollar Cards",
      description: "Virtual and physical dollar cards for both retail and businesses. Shop on virtually any site where card payments are accepted.",
    },
    {
      name: "Cashwyre Earn",
      description: "Earn by partnering with Cashwyre and providing liquidity in a currency of your choice.",
    },
    {
      name: "CashCollect",
      description: "Easy and convenient way to pay tuition and school fees abroad from the comfort of your home.",
    },
    {
      name: "Utility Payments",
      description: "Pay for utility services using Fiat, including cable TV subscriptions, airtime purchases, and mobile data plans.",
    },
  ];

  const teamMembers = [
    { 
      name: "Sunday Awa Okoro", 
      role: "CEO", 
      image: sundayImage,
      description: "Experienced professional with over a decade in banking, Fintech, and finance.",
    },
    { 
      name: "Heritage Falodun", 
      role: "Lead - Growth & Partnerships", 
      image: heritageImage,
      description: "Expert in business development with a strong background in technology.",
    },
    { 
      name: "Victor Nwankwue", 
      role: "Lead - Engineering & IT Operations", 
      image: victorNwankweImage,
      description: "Skilled engineer with extensive experience in developing financial solutions.",
    },
    { 
      name: "Emmanuel Onwe", 
      role: "CEO (UK)", 
      image: emmaImage,
      description: "Leads Cashwyre's operations in the United Kingdom.",
    },
    { 
      name: "Victor Olusanya", 
      role: "CTO", 
      image: victorOlusanyaImage,
      description: "Technical expert overseeing Cashwyre's technological infrastructure and innovation.",
    },
  ];

  const reasons = [
    {
      title: "Safe and Secure",
      description: "Your financial security is our top priority. Cashwyre is meticulously designed and fortified to safeguard your money through robust security measures.",
    },
    {
      title: "Transparent Transactions",
      description: "We believe in clarity. With Cashwyre, you experience transparency in every transaction – from fees to exchange rates – ensuring a straightforward and honest financial journey.",
    },
    {
      title: "Reliability at Its Core",
      description: "Trust Cashwyre for timely and reliable money transfers. Your funds will reach their destination promptly, giving you peace of mind with every transaction.",
    },
    {
      title: "Global Payment Solutions",
      description: "Seamlessly send money across borders with Cashwyre. Our global payment services enable you to conduct secure transactions worldwide, facilitating financial connectivity on a global scale.",
    },
    {
      title: "Utility Redefined",
      description: "Cashwyre goes beyond traditional transfers. Take advantage of our services to effortlessly pay all your invoices, ensuring you never miss a bill again. Convenience at its best.",
    },
    {
      title: "Cost-Effective Transactions",
      description: "Affordability meets efficiency with Cashwyre, thanks to the utilization of the Bitcoin network. Enjoy low costs while experiencing the ease and speed of our financial solutions.",
    },
  ];

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const toggleTeamMember = (index) => {
    setExpandedTeamMember(expandedTeamMember === index ? null : index);
  };

  const toggleReason = (index) => {
    setExpandedReason(expandedReason === index ? null : index);
  };

  return (
    <div className="cashwyre-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to CASHWYRE</h1>
          <button className="get-started-btn">Get Started</button>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Cashwyre began in 2022 to solve Africa's payment infrastructure
            challenges. We launched in June 2023, leveraging Bitcoin technology
            for efficient cross-border payments.
          </p>
          {showMoreAbout && (
            <div className="more-about">
              <p>
                In our quest for a solution, we discovered Bitcoin and its scalable infrastructure, ideal for global expansion. This led us to build Cashwyre on Bitcoin technology, enabling us to transmit payments across countries efficiently and rapidly. We can now process transactions to 10+ African countries, including China, leveraging Bitcoin's lightning-fast rails.
              </p>
              <p>
                With Cashwyre, sending payments has become remarkably simple and user-friendly through a single API call. Our clients can now send remittances within Nigeria and globally at unprecedented competitive rates and lightning speed, all made possible by leveraging the efficiency of the Bitcoin network/payment rails.
              </p>
            </div>
          )}
          <button className="learn-more-btn" onClick={() => setShowMoreAbout(!showMoreAbout)}>
            {showMoreAbout ? "Show Less" : "Learn More"}
          </button>
        </div>
        <div className="about-image"></div>
      </section>

      <section className="objective-mission-section">
        <div className="card objective-card">
          <h3>Our Objective</h3>
          <p>
            Simplify and demystify payments across the African continent,
            enhancing experiences for individuals and businesses.
          </p>
        </div>
        <div className="card mission-card">
          <h3>Our Mission</h3>
          <p>
            Make it extremely easy and cheap to send money within Africa from
            the comfort of your home, with lightning-fast transactions.
          </p>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Core Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${expandedService === index ? "expanded" : ""}`}
              onClick={() => toggleService(index)}
            >
              <h4>{service.name}</h4>
              {expandedService === index ? (
                <p>{service.description}</p>
              ) : (
                <p>Click to learn more</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`team-member ${expandedTeamMember === index ? "expanded" : ""}`}
              onClick={() => toggleTeamMember(index)}
            >
              <div
                className="member-image"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              {expandedTeamMember === index && (
                <p className="member-description">{member.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="why-use-section">
        <h2>Why Use Cashwyre?</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`reason-card ${expandedReason === index ? "expanded" : ""}`}
              onClick={() => toggleReason(index)}
            >
              <h4>{reason.title}</h4>
              {expandedReason === index ? (
                <p>{reason.description}</p>
              ) : (
                <p>Click to learn more</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="register-section">
        <h2>How to Register</h2>
        <div className="register-steps">
          {[
            "Download the Cashwyre app",
            "Register with valid information",
            "Complete verification process",
            "Start transacting immediately",
          ].map((step, index) => (
            <div key={index} className="register-step">
              <div className="step-number">{index + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CashwyrePaymentService;

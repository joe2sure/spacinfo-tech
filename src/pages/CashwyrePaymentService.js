import React from "react";
import "../styles/CashwyerPaymentService.css";

const CashwyrePaymentService = () => {
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
          {[
            "Cashwyre PaySend",
            "Cashwyre BitSave",
            "Buy and Sell Bitcoin",
            "Cashwyre Paylink",
          ].map((service, index) => (
            <div key={index} className="service-card">
              <h4>{service}</h4>
              <p>Click to learn more</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {[
            { name: "Sunday Awa Okoro", role: "CEO" },
            { name: "Heritage Falodun", role: "Lead - Growth & Partnerships" },
            {
              name: "Victor Nwankwue",
              role: "Lead - Engineering & IT Operations",
            },
            { name: "Emmanuel Onwe", role: "CEO (UK)" },
            { name: "Victor Olusanya", role: "CTO" },
          ].map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image"></div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why-use-section">
        <h2>Why Use Cashwyre?</h2>
        <div className="reasons-grid">
          {[
            "Safe and Secure",
            "Transparent Transactions",
            "Reliability at Its Core",
            "Global Payment Solutions",
            "Utility Redefined",
            "Cost-Effective Transactions",
          ].map((reason, index) => (
            <div key={index} className="reason-card">
              <h4>{reason}</h4>
              <p>Learn more</p>
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

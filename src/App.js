import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import FeaturesSection from "./components/FeatureSection";
import OfferingsSection from "./components/OfferingsSection";
import ReadySection from "./components/ReadySection";
import ProjectsSection from "./components/ProjectsSection";
import BrandSection from "./components/BrandSection";
import TestimonialSection from "./components/TestimonialSection";
import CallToActionSection from "./components/CallToActionSection";
import FooterSection from "./components/FooterSection";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import CashwyrePaymentService from "./pages/CashwyrePaymentService";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <AboutUs />
                <FeaturesSection />
                <div className="offerings-ready-container">
                  <OfferingsSection />
                  <ReadySection />
                </div>
                <ProjectsSection />
                <BrandSection />
                <TestimonialSection />
                <CallToActionSection />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cashwyre" element={<CashwyrePaymentService/>}/>
          {/* Add a default route that redirects to the home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;

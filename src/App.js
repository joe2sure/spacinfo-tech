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

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutUs />
      <FeaturesSection />
      <div className="offerings-ready-container">
        <OfferingsSection />
        <ReadySection />
      </div>
      <ProjectsSection />
      <BrandSection/>
      <TestimonialSection/>
      <CallToActionSection/>
      <FooterSection/>
    </>
  );
}

export default App;

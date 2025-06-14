import WhyChooseUs from "../../Components/About/WhyChooseUs";
import CtaSection from "../../Components/Common/CtaSection";
import ServiceSection2 from "../../Components/Common/ServiceSection2";
import AboutSection from "../../Pages/About/AboutSection";
import Footer from "../../Layouts/Footer3";
import Header from "../../Layouts/Header6";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <AboutSection />
      <WhyChooseUs />
      <ServiceSection2 className="service2-section-area sp1 bg2" />
      <CtaSection />
      <Footer />
    </>
  );
};

export default About;

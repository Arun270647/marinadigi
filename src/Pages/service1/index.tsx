import ServiceSection1 from "../../Components/Service1/ServiceSection1";
import Footer from "../../Layouts/Footer3";
import Header from "../../Layouts/Header6";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import { useEffect } from "react";

const Service1Page = () => {
  useEffect(() => {
    const landingSection = document.getElementById('service');
    if (landingSection) {
      landingSection.scrollIntoView({ behavior: 'auto' });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  return (
    <>
      <MobileHeaderSidebar />
      <Header />
      <ServiceSection1 />

      <Footer />
    </>
  );
};

export default Service1Page;

import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import ServiceSection1 from "../../Components/Service1/ServiceSection1";
import WorksSection1 from "../../Components/Service1/WorksSection1";
import Footer from "../../Layouts/Footer3";
import Header from "../../Layouts/Header6";
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
      <Header />
      <PageHero
        className="about-header-area"
        title={"Our Best Services"}
        breadcrumb={["Home", "Our Best Services"]}
      />
      <ServiceSection1 />
      <WorksSection1 />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Service1Page;

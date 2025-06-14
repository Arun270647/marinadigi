import PageHero from "../../Components/Common/PageHero";
import Header from "../../Layouts/Header6";
import SliderSection from "../../Components/Service2/SliderSection";
import CtaSectionService2 from "../../Components/Service2/CtaSection";
import AnalysisSection from "../../Components/Service2/AnalysisSection";
import ChooseSection from "../../Components/Service2/ChooseSection";
import CtaSection from "../../Components/Common/CtaSection";
import Footer from "../../Layouts/Footer3";
import ServiceInnerHeader from "../../Components/Service4/ServiceInnerHeader";
import WorksSection from "../../Components/Service2/WorksSection";
import { useEffect } from "react";

const Service4Page = () => {
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
        title={"Email Marketing"}
        breadcrumb={["Home", "Services", "Email Marketing"]}
      />
      <ServiceInnerHeader />
      <SliderSection className={"slider-section-area slider-inner sp5"} />
      <WorksSection />
      {/* <CtaSectionService2 /> */}
      {/* <AnalysisSection /> */}
      <ChooseSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Service4Page;

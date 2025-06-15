import PageHero from "../../Components/Common/PageHero";
import Header from "../../Layouts/Header6";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
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
      <MobileHeaderSidebar />
      <Header />
      <PageHero
        className="about-header-area"
        title={"Email Marketing"}
        breadcrumb={[""]}
      />
      <ServiceInnerHeader />
      <WorksSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Service4Page;

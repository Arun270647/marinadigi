
import HistorySection from "../../Components/About/HistorySection";
import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import Footer from "../../Layouts/Footer3";
import Header from "../../Layouts/Header6";
import BenefitsSection from "../../Components/Service3/BenefitsSection";
import ChooseSection from "../../Components/Service2/ChooseSection";
import { useEffect } from "react";

const Service3Page = () => {
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
        title={"Pay Per Click Service"}
        breadcrumb={[""]}
      />
     
      <BenefitsSection />
      <ChooseSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Service3Page;


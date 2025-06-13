import HistorySection from "../../Components/About/HistorySection";
import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import Footer from "../../Layouts/Footer3";
import Header from "../../Layouts/Header6";
import SliderSection from "../../Components/Service2/SliderSection";
import BenefitsSection from "../../Components/Service3/BenefitsSection";
import CtaSectionService2 from "../../Components/Service2/CtaSection";
import AnalysisSection from "../../Components/Service2/AnalysisSection";
import ChooseSection from "../../Components/Service2/ChooseSection";
const Service3Page = () => {
  return (
    <>
      <Header />
      <PageHero
        className="about-header-area"
        title={"Pay Per Click Service"}
        breadcrumb={["Home", "Services", "PPC"]}
      />
      <HistorySection />
      <SliderSection className={"slider-section-area slider-inner sp5"} />
      <BenefitsSection />
      <CtaSectionService2 />
      <AnalysisSection />
      <ChooseSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Service3Page;

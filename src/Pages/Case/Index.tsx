import CaseStudies from "../../Components/Case/CaseStudies";
import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import Footer from "../../Layouts/Footer3";
import Header from "../../Layouts/Header6";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const Case = () => {
  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"Social Media Marketing"}
        breadcrumb={["Home", "Case Study", "Social Media Marketing"]}
      />
      <CaseStudies />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Case;

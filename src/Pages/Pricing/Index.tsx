import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import ComparisonTable from "../../Components/Pricing/ComparisonTable";
import PricingSection from "../../Components/Pricing/PricingSection";
import Footer from "../../Layouts/Footer3";
import Header from "../../Layouts/Header6";

const PricingPage = () => {
  return (
    <>
      <Header />
      <PageHero
        className="about-header-area"
        title={"Pricing Plan"}
        breadcrumb={["Home", "Pricing Plan"]}
      />
      <PricingSection />
      <ComparisonTable />
      <CtaSection />
      <Footer />
    </>
  );
};

export default PricingPage;

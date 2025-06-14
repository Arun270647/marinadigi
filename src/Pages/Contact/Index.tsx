import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import ContactMain from "../../Components/Contact/ContactMain";
import Footer from "../../Layouts/Footer3";
import Header from "../../Layouts/Header6";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const Contact = () => {
  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"Contact Us"}
        breadcrumb={["Home", "Contact Us"]}
      />
      <ContactMain />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Contact;

import ContactMain from "../../Components/Contact/ContactMain.tsx";
import PageHero from "../../Components/Common/PageHero.tsx";
import Header from "../../Layouts/Header6.tsx";
import Footer from "../../Layouts/Footer3.tsx";
import MobileHeaderSidebar from "../../Layouts/MobileHeader.tsx";
import LocationSection from "../../Components/Contact/LocationSection.tsx";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <PageHero
        className="contact-header-area"
        title={"Contact Us"}
        breadcrumb={["Home", "Contact Us"]}
      />
      <ContactMain />
      <LocationSection />
      <Footer />
    </>
  );
};

export default Contact;

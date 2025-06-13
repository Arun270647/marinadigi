import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import BlogSection from "../../Components/Faq/BlogSection";
import ContactForm from "../../Components/Faq/ContactForm";
import FAQAccodian from "../../Components/Faq/FAQAccodian";
import Footer from "../../Layouts/Footer3";
import Header from "../../Layouts/Header6";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const FAQPage = () => {
  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"Frequently Asked Question"}
        breadcrumb={["Home", "FAQ'S"]}
      />
      <FAQAccodian />
      <ContactForm />
      <BlogSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default FAQPage;

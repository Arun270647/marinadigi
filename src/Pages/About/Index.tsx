import HistorySection from "../../Components/About/HistorySection";
import SkillsSection from "../../Components/About/SkillsSection";
import TeamSection from "../../Components/About/TeamSection";
import WhyChooseUs from "../../Components/About/WhyChooseUs";
import CompanySliderSection from "../../Components/Common/CompanySliderSection";
import CtaSection from "../../Components/Common/CtaSection";
import GoogleReviews from "../../Components/Common/GoogleReviews";
import PageHero from "../../Components/Common/PageHero";
import ServiceSection2 from "../../Components/Common/ServiceSection2";
import AboutSection from "../../Pages/About/AboutSection";
import Footer from "../../Layouts/Footer3";
import Header from "../../Layouts/Header6";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const About = () => {
  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"About Us"}
        breadcrumb={["Home", "About Us"]}
      />
      <CompanySliderSection className="slider-section-area slider-inner sp5" />
      <AboutSection />
      <WhyChooseUs />
      <HistorySection />
      <SkillsSection />
      <TeamSection />
      <ServiceSection2 className="service2-section-area sp1 bg2" />
      <GoogleReviews className="testimonial1-section-area sp1 bg2" />
      <CtaSection />
      <Footer />
    </>
  );
};

export default About;

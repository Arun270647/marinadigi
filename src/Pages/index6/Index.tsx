import AboutSection from "../../Components/Common/AboutSection";
import Cta2Section from "../../Components/Common/Cta2Section";
import ServiceSection from "../../Components/Common/ServiceSection";
import WorkProcessSection from "../../Components/Common/WorkProcessSection";
import Hero4Section from "../../Components/HomePage6/Hero4Section";
import Footer3 from "../../Layouts/Footer3";
import Header6 from "../../Layouts/Header6";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import { Helmet } from 'react-helmet-async';

const HomePage6 = () => {
  document.body.className = "homepage4-body";

  return (
    <>
      <Helmet>
                <title>Marina Digitals - Digital Marketing Agency</title>
                <meta name="description" content="Marina Digitals is your trusted digital marketing agency offering expert SEO, PPC, social media marketing, and email marketing services to grow your business online." />
                <meta name="keywords" content="digital marketing agency, SEO, search engine optimization, PPC, pay per click, social media marketing, SMM, email marketing, online advertising, digital strategy, Marina Digitals" />
                <link rel="canonical" href="https://www.marinadigitals.com/" /> 
      </Helmet>
      <Header6 />
      <MobileHeaderSidebar />
      <Hero4Section />
      <AboutSection btnClass="header-btn6" />
      <ServiceSection btnClass="header-btn6" />
      <WorkProcessSection />
      {/*<BlogSection />*/}
      <Cta2Section btnClass="header-btn7" />
      <Footer3 />
    </>
  );
};

export default HomePage6;

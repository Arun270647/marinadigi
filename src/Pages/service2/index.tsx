import WorksSection from "../../Components/Case-Single/WorksSection";
import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import AboutSection from "../../Components/Service2/AboutSection";
import ChooseSection from "../../Components/Service2/ChooseSection";
import Footer from "../../Layouts/Footer3";
import Header from "../../Layouts/Header6";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';

const Service2Page = () => {
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
        <Helmet>
                <title>SEO Services - Marina Digitals | Boost Your Rankings</title>
                <meta name="description" content="Achieve top search engine rankings with Marina Digitals' expert SEO services. We offer comprehensive strategies for organic growth and increased online visibility." />
                <meta name="keywords" content="SEO services, search engine optimization, local SEO, technical SEO, content marketing, keyword research, SEO agency, Marina Digitals SEO" />
                <link rel="canonical" href="https://www.marinadigitals.com/service2" /> 
      </Helmet>
            <MobileHeaderSidebar />
            <Header />
            <PageHero
                className="about-header-area"
                title={"Search Engine Optimization"}
                breadcrumb={[""]}
            />
            <AboutSection />
            <WorksSection/>
            <ChooseSection/>
            <CtaSection />
            <Footer />
        </>
    )
}

export default Service2Page

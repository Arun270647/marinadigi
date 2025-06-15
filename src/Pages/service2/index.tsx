import WorksSection from "../../Components/Case-Single/WorksSection";
import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import AboutSection from "../../Components/Service2/AboutSection";
import ChooseSection from "../../Components/Service2/ChooseSection";
import Footer from "../../Layouts/Footer3";
import Header from "../../Layouts/Header6";
import { useEffect } from "react";

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

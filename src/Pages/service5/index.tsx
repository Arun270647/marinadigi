import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import ChooseSection from "../../Components/Service2/ChooseSection";
import Footer from "../../Layouts/Footer3";
import Header from "../../Layouts/Header6";
import SliderSection from "../../Components/Service2/SliderSection";
import ServiceInner5Header from "../../Components/Service5/ServiceInnerHeader";
// import BenefitsSection from "../../Components/Service3/BenefitsSection";
import ServiceSection from "../../Components/Service5/ServiceSection";
import { useEffect } from "react";

const Service5Page = () => {
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
                title={"Social Media Marketing"}
                breadcrumb={["Home", "Services", "Social Media Marketing"]}
            />
            <ServiceInner5Header/>
            <SliderSection className={'slider-section-area slider-inner sp5'} />
            {/* <BenefitsSection/> */}
            <ServiceSection/>
            <ChooseSection/>
            <CtaSection />
            <Footer />
        </>
    )
}

export default Service5Page
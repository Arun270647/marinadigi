import CtaSection from "../../Components/Common/CtaSection";
import PageHero from "../../Components/Common/PageHero";
import ChooseSection from "../../Components/Service2/ChooseSection";
import Footer from "../../Layouts/Footer3";
import Header from "../../Layouts/Header6";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import ServiceInner5Header from "../../Components/Service5/ServiceInnerHeader";
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
            <MobileHeaderSidebar />
            <Header />
            <PageHero
                className="about-header-area"
                title={"Social Media Marketing"}
                breadcrumb={[""]}
            />
            <ServiceInner5Header/>
            <ServiceSection/>
            <ChooseSection/>
            <CtaSection />
            <Footer />
        </>
    )
}

export default Service5Page
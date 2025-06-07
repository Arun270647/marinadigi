import CtaSection from "../../Components/Common/CtaSection"
import PageHero from "../../Components/Common/PageHero"
import TestimonialSlider from "../../Components/Testimonial/Testimonial"
import Footer from "../../Layouts/Footer3"
import Header from "../../Layouts/Header6"

const TestimonialPage = () => {
    return (
        <>
            <Header />
            <PageHero
                className="about-header-area"
                title={"Testimonials"}
                breadcrumb={["Home", "Testimonials"]}
            />
            <TestimonialSlider />
            <CtaSection />
            <Footer />
        </>
    )
}

export default TestimonialPage

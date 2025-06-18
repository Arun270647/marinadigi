import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
    return (
        <div className="about1-section-area">
            <div className="container">
                <div className="row align-items-center">
                    {/* Mobile: image left, text right, horizontally parallel */}
                    <div className="col-12 d-flex d-lg-none align-items-center mb-3" style={{gap: '16px'}}>
                        <img src="/assets/img/all-images/about-img1.png" alt="About" style={{width: '60%', maxWidth: 170, borderRadius: '50%'}} />
                        <div style={{width: '40%'}}>
                            <h2 className="text-anime-style-3" style={{fontSize: '0.8rem'}}>Comprehensive SEO & Digital Marketing Solutions.</h2>
                            <p style={{fontSize: '0.7rem'}}>Welcome to Marina Digitals your trusted partner for comprehensive SEO and digital marketing solutions. With our proven expertise and innovative strategies the digital landscape.</p>
                            <div className="btn-area">
                                <Link to="/service1" className="header-btn1" style={{fontSize: '0.6rem', padding: '4px 10px', borderRadius: '15px'}}>Learn more about our SEO services<span><i className="fa-solid fa-arrow-right" style={{fontSize: '0.8rem', marginLeft: 4}}></i></span></Link>
                            </div>
                        </div>
                    </div>
                    {/* Desktop: original layout */}
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="about-images">
                            <figure>
                                <img src="/assets/img/all-images/about-img1.png" alt="About" />
                            </figure>
                            <img src="/assets/img/elements/star1.png" alt="Star" className="star1 keyframe5" />
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                        <h2 className="text-anime-style-3">Comprehensive SEO & Digital Marketing Solutions.</h2>
                        <p>Welcome to Marina Digitals your trusted partner for comprehensive SEO and digital marketing solutions. With our proven expertise and innovative strategies the digital landscape.</p>
                        <div className="btn-area">
                            <Link to="/service1" className="header-btn1" style={{fontSize: '0.6rem', padding: '4px 10px', borderRadius: '15px'}}>Learn more about our SEO services<span><i className="fa-solid fa-arrow-right" style={{fontSize: '0.8rem', marginLeft: 4}}></i></span></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                        <div className="about-author-images">
                            <img src="/assets/img/elements/elements5.png" alt="Elements" className="elements5 keyframe5" />
                            <figure>
                                <img src="/assets/img/all-images/about-img2.png" alt="About Author" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;

import React from "react";
import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
  return (
    <div className="about1-section-area sp6" id="about">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Mobile: image left, text right, horizontally parallel (match SEO page) */}
          <div className="col-12 d-flex d-lg-none align-items-center" style={{gap: '16px', marginBottom: '0px !important', marginTop: '88px !important'}}>
            <img src="/assets/img/all-images/about-img1.png" alt="About" style={{width: '60%', maxWidth: 170, borderRadius: '50%'}} />
            <div style={{width: '40%'}}>
              <h2 className="text-anime-style-3" style={{fontSize: '0.8rem'}}>Comprehensive SEO & Digital Marketing Solutions.</h2>
              <p style={{fontSize: '0.7rem'}}>Welcome to Marina Digitals, your trusted partner for comprehensive SEO and digital marketing solutions. With our proven expertise and innovative strategies the digital landscape.</p>
              <div className="btn-area">
                <Link to="/service1" className="header-btn1" style={{fontSize: '0.6rem', padding: '4px 10px', borderRadius: '15px'}}>Learn More<span><i className="fa-solid fa-arrow-right" style={{fontSize: '0.8rem', marginLeft: 4}}></i></span></Link>
              </div>
            </div>
          </div>
          {/* Desktop: new layout with left image, center text, right image */}
          <div className="d-none d-lg-flex align-items-center justify-content-center" style={{gap: '40px'}}>
            <div style={{flex: '0 0 320px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <img
                src="/assets/img/all-images/about-img1.png"
                alt="About"
                className="img-fluid"
                style={{ maxWidth: '320px', borderRadius: '50%' }}
              />
            </div>
            <div style={{flex: '1 1 0', maxWidth: '500px'}}>
              <h2 className="title-2 fw-bold mb-3 fs-2 text-lg-start">Comprehensive SEO & Digital Marketing Solutions.</h2>
              <p className="fs-5 mb-4">Welcome to Marina Digitals, your trusted partner for comprehensive SEO and digital marketing solutions. With our proven expertise and innovative strategies the digital landscape.</p>
              <div className="btn-area">
                <Link to="/service1" className="header-btn1 fs-5">
                  Learn More
                  <span className="ms-2">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div style={{flex: '0 0 320px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <img
                src="/assets/img/all-images/about-img2.png"
                alt="About Author"
                className="img-fluid"
                style={{ maxWidth: '320px', borderRadius: '50%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

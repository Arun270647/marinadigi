import React from "react";
import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
  return (
    <div className="about1-section-area sp6" id="about">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-4 col-md-6">
            <div className="about-images">
              <figure
                className="image-anime"
                data-aos="fade-zoom-in"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <div className="about-content-area heading2 mb-4">
                  <h2 className="title-2 fw-bold mb-3 fs-2 text-lg-start"
                  >
                    Comprehensive SEO & Digital Marketing Solutions.
                  </h2>
                </div>
                <img
                  src="/assets/img/all-images/about-img1.png"
                  alt="About"
                  className="img-fluid"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </figure>
              <img
                src="/assets/img/elements/star1.png"
                alt="Star"
                className="star1 keyframe5"
                style={{ maxWidth: '50px', height: 'auto' }}
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="about-content">
              <p 
                className="fs-5 mb-4" 
                data-aos="fade-left" 
                data-aos-duration="1000"
              >
                Welcome to Marina Digitals, your trusted partner for comprehensive SEO and
                digital marketing solutions. With our proven expertise and
                innovative strategies the digital landscape.
              </p>
              <div
                className="btn-area"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <Link to="/service1" className="header-btn1 fs-5">
                  Learn More
                  <span className="ms-2">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="about-auhtor-images">
              <img
                src="/assets/img/elements/elements5.png"
                alt="Element"
                className="elements5 keyframe5"
                style={{ maxWidth: '100px', height: 'auto' }}
              />
              <figure
                className="image-anime"
                data-aos="fade-zoom-in"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <img
                  src="/assets/img/all-images/about-img2.png"
                  alt="About Author"
                  className="img-fluid"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

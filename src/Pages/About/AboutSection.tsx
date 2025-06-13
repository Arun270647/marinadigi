import React from "react";
import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
  return (
    <div className="about1-section-area sp6" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="about-images">
              <figure
                className="image-anime"
                data-aos="fade-zoom-in"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <img
                  src="/assets/img/all-images/about-img1.png"
                  alt="About"
                />
              </figure>
              <img
                src="/assets/img/elements/star1.png"
                alt="Star"
                className="star1 keyframe5"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-content-area heading2">
              <div className="arrow-circle">
                <Link to="/about">
                  <img
                    src="/assets/img/elements/elements4.png"
                    alt="Element"
                    className="elements4 keyframe5"
                  />
                  <img
                    src="/assets/img/icons/arrow.svg"
                    alt="Arrow"
                    className="arrow"
                  />
                </Link>
              </div>
              <h2 className="text-anime-style-3">
                Comprehensive SEO & Digital Marketing Solutions.
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000">
                Welcome to Marina Digitals, your trusted partner for comprehensive SEO and
                digital marketing solutions. With our proven expertise and
                innovative strategies the digital landscape.
              </p>
              <div
                className="btn-area"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <Link to="/about" className="header-btn1">
                  Learn More
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="about-auhtor-images">
              <img
                src="/assets/img/elements/elements5.png"
                alt="Element"
                className="elements5 keyframe5"
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

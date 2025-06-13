import React from "react";
import { Link } from "react-router-dom";

const ServiceSection2: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={className || ""} id="work">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="service2-header heading2 text-center">
              <img
                src="/assets/img/elements/star2.png"
                alt=""
                className="star2 keyframe5"
              />
              <img
                src="/assets/img/elements/star2.png"
                alt=""
                className="star3 keyframe5"
              />
              <h2 className="text-anime-style-3">
                Tailored Solutions, Proven Results,
                <br className="d-md-block d-none" />
                And Exceptional Service
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                We pride ourselves on delivering a value proposition that goes
                beyond expectations. Our <br className="d-md-block d-none" />
                approach is centered on understanding your business inside.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div
              className="images-content-area"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="img1">
                <img src="/assets/img/all-images/service-img1.png" alt="" />
              </div>
              <div className="content-area">
                <h5>Our Value</h5>
                <Link to="/service1" className="text text-anime-style-3">
                  Explore Our Unique Value Proposition & How We Drive Business
                  Growth
                </Link>
                <p data-aos="fade-up" data-aos-duration="1000">
                  We're committed to delivering exceptional value to our
                  clients. We understand that every business is unique, and we
                  take a personalized approach to every project we undertake.
                </p>
                <div
                  className="btn-area"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Link to="/service1" className="header-btn1">
                    Learn More
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="arrow-area">
                <Link to="/service1">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="service-all-boxes">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div
                    className="service2-author-boxarea"
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                  >
                    <div className="arrow">
                      <Link to="/service1">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="content-area">
                      <h5>Our Mission</h5>
                      <Link to="/service1">
                        We strive to be more than just a service provider; we
                        aim to be a trusted Marina Digitals partner.
                      </Link>
                      <p>
                        By staying true to our mission and values, we are
                        committed to helping businesses of all sizes achieve
                        their goals and realize their potential.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div
                    className="service2-author2-boxarea"
                    data-aos="zoom-out"
                    data-aos-duration="1200"
                  >
                    <div className="arrow">
                      <Link to="/service1">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="content-area">
                      <h5>Our Vision</h5>
                      <Link to="/service1">
                        We aspire to create a world where every business owner
                        feels empowered.
                      </Link>
                      <p>
                        By staying true to our vision and values, we are
                        committed to driving positive change and shaping a
                        brighter future for businesses and communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection2;

import React from "react";
import { Link } from "react-router-dom";

const CtaSection: React.FC = () => {
  return (
    <div className="cta-section-area overflow-hidden">
      <img
        src="/assets/img/bg/cta-bg1.png"
        alt=""
        className="cta-bg1 aniamtion-key-2"
      />
      <img
        src="/assets/img/bg/cta-bg2.png"
        alt=""
        className="cta-bg2 aniamtion-key-1"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="cta-header-area text-center sp4 heading2">
              <h2 className="text-anime-style-3">
                Ready To Take Your SEO To <br className="d-md-block d-none" />
                The Next Level
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Effective SEO strategies not only elevate a website's
                visibility but also drive <br className="d-md-block d-none" />
                targeted traffic, enhance user experience,
              </p>
              <div
                className="btn-area text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <Link to="/contact" className="header-btn1">
                  Free Consultation
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;

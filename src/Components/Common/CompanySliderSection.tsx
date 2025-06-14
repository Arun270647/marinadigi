import React from "react";
import Slider from "react-slick";

const brandImages = [
  "/assets/img/elements/brand-img1.png",
  "/assets/img/elements/brand-img2.png",
  "/assets/img/elements/brand-img3.png",
  "/assets/img/elements/brand-img4.png",
  "/assets/img/elements/brand-img5.png",
];

const CompanySliderSection: React.FC<{ className: string }> = ({
  className,
}) => {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  return (
    <div className={className}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="slider-head">
              <p>
                Our Clients
              </p>
            </div>
          </div>
          <div className="col-lg-10 d-flex justify-content-center align-items-center" style={{minHeight: '120px'}}>
            <img src="/assets/img/logo/cp_new_logo.png" alt="Client Logo" style={{height: '100px', width: 'auto'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySliderSection;

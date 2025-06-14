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
    responsive: [ // Added for better mobile view
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={className}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="slider-head">
                <p>Our Clients</p>
              </div>
            </div>
            <div className="col-lg-10">
              <Slider {...settings}>
                {brandImages.map((logo, index) => (
                  <div key={index} className="brand-img text-center">
                    <img src={logo} alt={`Brand Logo ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanySliderSection;
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const GoogleReviews: React.FC<{ className: string }> = ({ className }) => {
  const settings = {
    arrows: false,
    infinite: true,
    centerMode: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    dots: true,
  };

  return (
    <div className={className || ""} id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="testimonial-header heading2 text-center">
              <img
                src="src/assets/img/elements/star2.png"
                alt=""
                className="star2 keyframe5"
              />
              <img
                src="src/assets/img/elements/star2.png"
                alt=""
                className="star3 keyframe5"
              />
              <h2 className="text-anime-style-3">
                What Our Client Say <br className="d-md-block d-none" />
                On Google Reviews
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Don't just take our word for it. Hear what our satisfied clients{" "}
                <br className="d-md-block d-none" />
                have to say about their experience partnering with Marina Digitals.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-11 m-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Slider
              className="testimonials-slider-area owl-carousel"
              {...settings}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-boxarea">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="pera">
                        <p>{testimonial.text}</p>
                        <div className="space100"></div>
                        <div className="space30"></div>
                        <div className="list-area">
                          <div className="list">
                            <ul>
                              {Array.from({ length: 5 }, (_, i) => (
                                <li key={i}>
                                  <i className="fa-solid fa-star"></i>
                                </li>
                              ))}
                            </ul>
                            <Link to="/team">{testimonial.name}</Link>
                          </div>
                          <img
                            src="src/assets/img/icons/google.svg"
                            alt="Google"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="images">
                        <img
                          src={testimonial.image}
                          alt={`Testimonial from ${testimonial.name}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    text: "Working with Marina Digitals has been a game-changer for our business. Their expertise in SEO and digital marketing has helped us achieve remarkable results and significantly increase our online visibility.",
    name: "John Doe",
    image: "src/assets/img/all-images/testimonial-img1.png",
  },
  {
    text: "Working with Marina Digitals has been a game-changer for our business. Their expertise in SEO and digital marketing has helped us achieve remarkable results and significantly increase our online visibility.",
    name: "John Doe",
    image: "src/assets/img/all-images/testimonial-img2.png",
  },
  {
    text: "Working with Marina Digitals has been a game-changer for our business. Their expertise in SEO and digital marketing has helped us achieve remarkable results and significantly increase our online visibility.",
    name: "John Doe",
    image: "src/assets/img/all-images/testimonial-img2.png",
  },
];

export default GoogleReviews;

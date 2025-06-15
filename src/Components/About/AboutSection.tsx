import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="about-section-area sp6">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-content-area-2">
              <div className="heading-area">
                <span className="sub-title-2 fs-5 mb-2 d-block">About Us</span>
                <h2 
                  className="title-2 fw-bold mb-3 fs-2 text-lg-center"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Comprehensive SEO & Digital Marketing Solutions
                </h2>
                <p className="p-2 fs-5 mb-4">
                  Welcome to Marina Digitals, your trusted partner for comprehensive SEO and digital marketing solutions. With our proven expertise and innovative strategies the digital landscape.
                </p>
              </div>
              <Link to="/service1" className="header-btn-2 fs-5">
                Learn More
                <span className="ms-2"><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img-area-2 position-relative">
              <div className="about-img-2">
                <img
                  src="/assets/img/all-images/about-img-2.png" 
                  alt="About Marina Digitals" 
                  className="img-fluid"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <div className="about-img-3">
                <img 
                  src="/assets/img/all-images/about-img-3.png" 
                  alt="Digital Marketing Solutions" 
                  className="img-fluid"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <div className="about-circle-1"></div>
              <div className="about-circle-2"></div>
              <div className="about-circle-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// Define the Footer component
const Footer3: React.FC = () => {
  // The socialLinks array has been updated to remove Facebook and YouTube
  const socialLinks = [
    { href: "https://www.instagram.com/marina_digitals/", src: "/assets/img/icons/instagram4.svg", alt: "Instagram" },
    { href: "https://www.linkedin.com/company/marina-digitals/?viewAsMember=true", src: "/assets/img/icons/linkedin4.svg", alt: "LinkedIn" },
  ];

  const aboutLinks = [
    { to: "/about", text: "About Us" },
    { to: "/service1", text: "Services" },
    { to: "/case", text: "Marketing" },
    { to: "/contact", text: "Contact Us" },
  ];

  return (
    <footer className="footer4-section-area">
      <Container>
        {/* Mobile-optimized layout */}
        <div className="footer-mobile-center d-block d-md-none text-center">
          <img src="/assets/img/logo/footer-logo.png" alt="Logo" className="img-fluid footer-logo mb-2" style={{ maxWidth: '120px', width: '100%' }} />
          <p className="fs-6 mb-2">By optimizing content, leveraging relevant keywords, and adhering to best practices, businesses can secure a prominent position (SEO)</p>
          <ul className="list-inline mb-3">
            {socialLinks.map((link, index) => (
              <li key={index} className="list-inline-item">
                <Link to={link.href}>
                  <img src={link.src} alt={link.alt} style={{ width: '24px', height: '24px' }} />
                </Link>
              </li>
            ))}
          </ul>
          <div className="footer-mobile-bottom d-flex justify-content-between mt-3" style={{gap: '16px'}}>
            <div className="footer-mobile-about text-start w-50" style={{paddingLeft: '16px'}}>
              <h3 className="fs-6 mb-2">About Link</h3>
              <ul className="list-unstyled mb-0">
                {aboutLinks.map((link, index) => (
                  <li key={index} className="mb-1">
                    <Link to={link.to} className="text-decoration-none fs-6">{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-mobile-contact text-start w-50" style={{paddingRight: '16px'}}>
              <h3 className="fs-6 mb-2">Get in touch</h3>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="mailto:admin@marinadigi.com" className="d-inline-flex align-items-center text-decoration-none" style={{ fontSize: '13px' }}>
                    <img src="/assets/img/icons/email.svg" alt="Email" className="me-2" style={{ width: '18px', height: '18px' }} />
                    <span>admin@marinadigi.com</span>
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="d-inline-flex align-items-center text-decoration-none" style={{ fontSize: '13px' }}>
                    <img src="/assets/img/icons/location.svg" alt="Location" className="me-2" style={{ width: '18px', height: '18px' }} />
                    <span>No38/68a palayakara street, Chennai-600023</span>
                  </a>
                </li>
                <li className="mb-1">
                  <a href="tel:91 97899 03547" className="d-inline-flex align-items-center text-decoration-none fs-6">
                    <img src="/assets/img/icons/phone.svg" alt="Phone" className="me-2" style={{ width: '18px', height: '18px' }} />
                    <span>+91 97899 03547</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Desktop layout remains unchanged */}
        <Row className="g-4 d-none d-md-flex">
          <Col lg={4} md={6}>
            <div className="footer-logo-area text-start">
              <img src="/assets/img/logo/footer-logo.png" alt="Logo" className="img-fluid footer-logo" style={{ maxWidth: '200px', width: '100%' }} />
              <p className="mt-3 fs-5">
                By optimizing content, leveraging relevant keywords, and
                adhering to best practices, businesses can secure a prominent
                position (SEO)
              </p>
              <ul className="list-inline mt-3">
                {socialLinks.map((link, index) => (
                  <li key={index} className="list-inline-item">
                    <Link to={link.href}>
                      <img src={link.src} alt={link.alt} style={{ width: '24px', height: '24px' }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer-logo-area1 text-start">
              <h3 className="fs-4 mb-3">About Link</h3>
              <ul className="list-unstyled">
                {aboutLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <Link to={link.to} className="text-decoration-none fs-5">{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={5} md={12}>
            <div className="footer-logo-area2 text-start">
              <h3 className="fs-4 mb-3">Get in touch</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a href="mailto:admin@marinadigi.com" className="d-inline-flex align-items-center text-decoration-none">
                    <img src="/assets/img/icons/email.svg" alt="Email" className="me-2" style={{ width: '20px', height: '20px' }} />
                    <span className="fs-5">admin@marinadigi.com</span>
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="d-inline-flex align-items-center text-decoration-none">
                    <img
                      src="/assets/img/icons/location.svg"
                      alt="Location"
                      className="me-2"
                      style={{ width: '20px', height: '20px' }}
                    />
                    <span className="fs-5">
                      No38/68a palayakara street,
                      <br className="d-lg-block d-none" />
                      Ayanavaram,Chennai-600023
                    </span>
                  </a>
                </li>
                <li className="mb-3">
                  <a href="tel:91 97899 03547" className="d-inline-flex align-items-center text-decoration-none">
                    <img src="/assets/img/icons/phone.svg" alt="Phone" className="me-2" style={{ width: '20px', height: '20px' }} />
                    <span className="fs-5">+91 97899 03547</span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="space80 d-lg-block d-none"></div>
        <div className="space40 d-lg-none d-block"></div>
        <Row>
          <Col lg={12}>
            <div className="copyright-area text-center">
              <div className="pera">
                <p className="fs-5">ⓒ2025 Marina Digitals<br/><span style={{display: 'inline-block', marginTop: '6px'}}>All rights reserved</span></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer3;

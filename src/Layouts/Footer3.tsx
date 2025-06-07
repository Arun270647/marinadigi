import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// Define the Footer component
const Footer3: React.FC = () => {
  const socialLinks = [
    { href: "#", src: "src/assets/img/icons/facebook4.svg", alt: "Facebook" },
    { href: "#",src: "src/assets/img/icons/instagram4.svg", alt: "Instagram" },
    { href: "#", src: "src/assets/img/icons/linkedin4.svg", alt: "LinkedIn" },
    { href: "#", src: "src/assets/img/icons/twitter3.svg", alt: "YouTube" },
  ];

  const aboutLinks = [
    { to: "/blog-left", text: "Our Blog" },
    { to: "/about", text: "About Us" },
    { to: "/service1", text: "Services" },
    { to: "/case", text: "Marketing" },
    { to: "/testimonials", text: "Testimonials" },
    { to: "/contact", text: "Contact Us" },
  ];

  return (
    <footer className="footer4-section-area d-flex justify-content-center align-items-center" >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={3} md={6}>
            <div className="footer-logo-area">
              <img src="src/assets/img/logo/footer-logo.png" alt="Logo" />
              <p>
                By optimizing content, leveraging relevant keywords, and
                adhering to best practices, businesses can secure a prominent
                position (SEO)
              </p>
              <ul className="list-inline">
                {socialLinks.map((link, index) => (
                  <li key={index} className="list-inline-item">
                    <Link to={link.href}>
                      <img src={link.src} alt={link.alt} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <div className="footer-logo-area1">
              <h3>About Link</h3>
              <ul className="list-unstyled">
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="footer-logo-area2">
              <h3>Get in touch</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="mailto:info@marinadigitals.com" className="d-inline-flex align-items-center">
                    <img src="src/assets/img/icons/email.svg" alt="Email" className="me-2" />
                    <span>info@marinadigitals.com</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-inline-flex align-items-center">
                    <img
                      src="src/assets/img/icons/location.svg"
                      alt="Location"
                      className="me-2"
                    />
                    <span>
                      8708 Technology Forest
                      <br className="d-lg-block d-none" />
                      Pl Suite 125 -G, The
                      <br className="d-lg-block d-none" />
                      Woodlands, TX 773
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:123-456-7890" className="d-inline-flex align-items-center">
                    <img src="src/assets/img/icons/phone.svg" alt="Phone" className="me-2" />
                    <span>123-456-7890</span>
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
            <div className="copyright-area d-flex flex-column align-items-center">
              <div className="pera">
                <p>ⓒCopyright 2024 Marina Digitals . All rights reserved</p>
              </div>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="m-0">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer3;
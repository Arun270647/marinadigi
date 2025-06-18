import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import singlePageNavLinks from "../assets/helpers/SinglePageNavLinks";

type NavItem = {
  title: string;
  to?: string;
  target?: string;
  subMenu?: NavItem[];
};


type ContactInfoItem = {
  icon: string;
  text: string;
  link?: string;
};

type SocialLink = {
  icon: string;
  link: string;
};

const homeItems: NavItem[] = [
    { title: "Home", to: "/" },
];

const navItems: NavItem[] = [
  { title: "About Us", to: "/about" },
  {
    title: "Our Services",
    to: "#",
    subMenu: [
      { title: "All Digital Services", to: "/service1" },
      { title: "Search Engine Optimization (SEO)", to: "/service2" },
      // { title: "Pay Per Click", to: "/service3" },
      { title: "Email Marketing Solutions", to: "/service4" },
      { title: "Social Media Marketing (SMM)", to: "/service5" }
    ],
  },
  // Removed "Case Studies" and "Blog" sections from mobile navigation
  { title: "Our Team", to: "/team" },
  { title: "FAQ", to: "/faq" },
  { title: "Contact Us", to: "/contact" },
];

const contactInfo: ContactInfoItem[] = [
  { icon: "fa-phone-volume", text: "+91 97899 03547", link: "tel:+91 97899 03547" },
  { icon: "fa-envelope", text: "admin@marinadigi.com", link: "mailto:admin@marinadigi.com" },
  { icon: "fa-location-dot", text: "No38/68a palayakara street, Ayanavaram,Chennai-600023 " }
];

const socialLinks: SocialLink[] = [
  { icon: "fa-instagram", link: "https://www.instagram.com/marina_digitals/" },
  { icon: "fa-linkedin-in", link: "https://www.linkedin.com/company/marina-digitals/?viewAsMember=true" },
];

// Navigation List Component
const NavigationList: React.FC<{ items: NavItem[] }> = ({ items }) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  return (
    <ul className="mobile-nav-list nav-list1 mt-1 p-0">
      {items.map((item, index) => (
        <li key={index} className={item.subMenu ? "has-sub" : ""}>
          <Link to={item.to || "#"}>
            {item.title}
          </Link>
          {item.subMenu && (
            <>
              <span
                className={`submenu-button ${
                  openSubMenuIndex === index ? "submenu-opened" : ""
                }`}
                onClick={() => toggleSubMenu(index)}
              >
                <em></em>
              </span>
              <ul
                className={`sub-menu ${
                  openSubMenuIndex === index ? "open-sub" : ""
                }`}
                style={{
                  display: openSubMenuIndex === index ? "block" : "none",
                }}
              >
                <NavigationList items={item.subMenu} />
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

// Contact Info Component
const ContactInfo: React.FC<{ info: ContactInfoItem[] }> = ({ info }) => (
  <div className="single-footer">
    <h3>Contact Info</h3>
    <div className="footer1-contact-info">
      {info.map((item, index) => (
        <div
          className="contact-info-single"
          key={index}
          style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}
        >
          <div className="contact-info-icon" style={{ flexShrink: 0, marginTop: '5px' }}>
            <i className={`fa-solid ${item.icon}`}></i>
          </div>
          <div className="contact-info-text">
            {item.link ? (<a href={item.link}>{item.text}</a>) : (<span>{item.text}</span>)}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Social Links Component with new styling
const SocialLinks: React.FC<{ links: SocialLink[] }> = ({ links }) => (
  <div className="single-footer">
    <h3>Social Links</h3>
    <div className="social-links-mobile-menu">
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, gap: '10px' }}>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.link}
              className="hash-nav"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                border: '1px solid #E0E0E0',
                borderRadius: '50%',
                color: '#1C2045',
                textDecoration: 'none'
              }}
            >
              <i className={`fa-brands ${link.icon}`}></i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const MobileHeader: React.FC<{
  onToggleSidebar: () => void;
  logoUrl: string;
  headerClass: string;
}> = ({ onToggleSidebar, logoUrl, headerClass }) => {
  return (
    <div className={`mobile-header ${headerClass} d-block d-lg-none`}>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link to="/">
                  <img src={logoUrl} alt="Marina Digitals Mobile Logo" />
                </Link>
              </div>
              <div
                className="mobile-nav-icon dots-menu"
                onClick={onToggleSidebar}
              >
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const MobileSidebar: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  logoUrl: string;
  sidebarClass: string;
}> = ({ isOpen, onClose, logoUrl, sidebarClass }) => {
  const { pathname } = useLocation();

  return (
    <div
      className={`mobile-sidebar ${sidebarClass} ${
        isOpen ? "mobile-menu-active" : ""
      }`}
    style={{ backgroundColor: '#fff' }}
    >
      <div className="logosicon-area">
        <div className="logos">
          <img src={logoUrl} alt="Marina Digitals Sidebar Logo" />
        </div>
        <div className="menu-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="mobile-nav mobile-nav1">
        <NavigationList
          items={
            pathname.includes("single-index")
              ? homeItems
              : [...homeItems, ...navItems]
          }
        />
        {pathname.includes("single-index") && (
          // singlePageNavLinks should be adjusted if it contains 'case' or 'blog' links
          <NavigationList items={singlePageNavLinks().map((item: any) => ({ title: item.name, to: item.link }))} />
        )}
        <div className="allmobilesection">
          <Link
            to="/contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0052FF',
              color: 'white',
              padding: '12px 20px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 500,
              border: 'none',
              width: '100%',
              textAlign: 'center',
              marginBottom: '25px'
            }}
          >
            Get a Free Consultation{" "}
            <span style={{ marginLeft: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%'}}>
              <i className="fa-solid fa-arrow-right" style={{ fontSize: '12px' }}></i>
            </span>
          </Link>
          <ContactInfo info={contactInfo} />
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </div>
  );
};

const MobileHeaderSidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");
  const [headerClass, setHeaderClass] = useState("");
  const [sidebarClass, setSidebarClass] = useState("");

  useEffect(() => {
    setLogoUrl("/assets/img/logo/header-logo.png");
    setHeaderClass("mobile-header-default");
    setSidebarClass("mobile-sidebar-default");
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <MobileHeader
        onToggleSidebar={toggleSidebar}
        logoUrl={logoUrl}
        headerClass={headerClass}
      />
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        logoUrl={logoUrl}
        sidebarClass={sidebarClass}
      />
    </>
  );
};

export default MobileHeaderSidebar;
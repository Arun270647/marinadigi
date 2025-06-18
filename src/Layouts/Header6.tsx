import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


interface MenuItem {
  label: string;
  to: string;
  dropdown?: { label: string; to: string }[];
}

const menuItems: MenuItem[] = [
  { label: "About Us", to: "/about" }, // Improved: "About" -> "About Us"
  {
    label: "Our Services", // This is the main dropdown label, which is fine
    to: "#",
    dropdown: [
      { label: "All Digital Services", to: "/service1" }, // Improved: "Our Best Servieces" -> "All Digital Services"
      { label: "Search Engine Optimization (SEO)", to: "/service2" }, // Improved: "SEO" -> "Search Engine Optimization (SEO)"
      // { label: "Pay Per Click", to: "/service3" }, // PPC commented out - if uncommented, make descriptive
      { label: "Email Marketing Solutions", to: "/service4" }, // Improved: "Email Marketing" -> "Email Marketing Solutions"
      { label: "Social Media Marketing (SMM)", to: "/service5" } // Improved: "Social Media Marketing" -> "Social Media Marketing (SMM)"
      // ...
    ],
  },
  // Removed "Case Studies" and "Blog" sections
  { label: "Our Team", to: "/team" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact Us", to: "/contact" }, // Improved: If not already in the main menu
];

const Header6: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 1) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header-area homepage4 header header-sticky d-none d-lg-block ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-elements">
              <div className="site-logo">
                <Link to="/"> {/* Logo also links to the homepage */}
                  <img src="/assets/img/logo/header-logo.png" alt="Marina Digitals Logo" /> {/* Added alt text for SEO */}
                </Link>
              </div>
              <div className="main-menu d-flex align-items-center gap-3">
                <ul className="m-0">
                  {/* Simplified Home Link */}
                  <li>
                    <Link to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Home</Link>
                  </li>

                  {/* Render other menu items */}
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link to={item.to}>
                        {item.label}{" "}
                        {item.dropdown && (
                          <i className="fa-solid fa-angle-down"></i>
                        )}
                      </Link>
                      {item.dropdown && (
                        <ul className="dropdown-padding">
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link to={subItem.to}>{subItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="header-btn6">
                Get In Touch With Us
              </Link> {/* Improved: "Get In Touch" -> "Get In Touch With Us" */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header6;
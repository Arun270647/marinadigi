import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


interface MenuItem {
  label: string;
  to: string;
  dropdown?: { label: string; to: string }[];
}

const menuItems: MenuItem[] = [
  { label: "About", to: "/about" }, 
  {
    label: " Our Services",
    to: "#", 
    dropdown: [
     
      { label: "Our Best Servieces", to: "/service1" }, 
      { label: "SEO", to: "/service2" },
      { label: "Pay Per Click", to: "/service3" },
      { label: "Email Marketing", to: "/service4" },
      { label: "Social Media Marketing", to: "/service5" }
      // ...
    ],
  },
  { label: "Pricing", to: "/pricing" },
  
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
                  <img src="src/assets/img/logo/header-logo.png" alt="Logo" /> {/* [cite: marina-digi-gemini/src/Layouts/Header6.tsx] */}
                </Link>
              </div>
              <div className="main-menu d-flex align-items-center gap-3">
                <ul className="m-0">
                  {/* Simplified Home Link */}
                  <li>
                    <Link to="/">Home</Link> {/* Direct link to the landing page */}
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
              <Link to="/contact" className="header-btn6"> {/* [cite: marina-digi-gemini/src/Layouts/Header6.tsx] */}
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header6;

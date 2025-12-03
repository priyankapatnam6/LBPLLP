// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import llplogo from "../Assets/logo.png";
// import {FaChevronDown,FaCar,FaBuilding,FaStar,FaHandshake,FaHardHat,} from "react-icons/fa";
// import "./Nav.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 80) setScrolled(true);
//       else setScrolled(false);};
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);}, []);
    
//   const handleLinkClick = () => {setIsOpen(false); setActiveMenu(null);};

//   const getLinkStyle = (isActive) => ({
//     color: isActive ? "#F06707" : scrolled ? "#2e3a59" : "white", 
//     fontWeight: isActive ? 700 : 600,
//     borderBottom: isActive ? "2px solid #A3210C" : "none",
//     paddingBottom: isActive ? 4 : 0,
//     transition: "all 0.3s ease",
//   });

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="navbar-left"><NavLink to="/" onClick={handleLinkClick}><img src={llplogo} alt="Logo" className="navbar-logo" /></NavLink></div>

//       <div className={`hamburger ${isOpen ? "active" : ""}`}onClick={() => setIsOpen(!isOpen)}>   <span></span> <span></span><span></span></div>

//       <ul className={`navbar-right ${isOpen ? "open" : ""}`}>
//         <li><NavLink to="/"  style={({ isActive }) => getLinkStyle(isActive)} onClick={handleLinkClick}>Home</NavLink></li>
//         <li><NavLink to="/aboutUs"  style={({ isActive }) => getLinkStyle(isActive)} onClick={handleLinkClick}>About Us</NavLink></li>


//         <li className="has-submenu"
//           onMouseEnter={() => !isOpen && setActiveMenu("offerings")}
//           // onMouseLeave={() => !isOpen && setActiveMenu(null)}
//            onClick={() =>isOpen? setActiveMenu(activeMenu === "offerings" ? null : "offerings"): null}>
//           <span>Offerings<FaChevronDown className={`arrow ${activeMenu === "offerings" ? "open" : ""}`}/></span>
//           {activeMenu === "offerings" && (<div className="mega-menu bordered"><h3>Our Offerings</h3><ul>
//            <li><NavLink to="/guidewireservices&solutions" onClick={handleLinkClick}>Core P&C Solutions</NavLink>
//                        <p className="menu-description"> Seamless, optimized Guidewire implementation services.</p></li>
//                 <li> <NavLink to="/quality-assurance" onClick={handleLinkClick}>  Quality Assurance</NavLink>
//       <p className="menu-description">Intelligent testing for reliable Guidewire delivery.</p></li>
//       <li><NavLink to="/bereauIntegration" onClick={handleLinkClick}>Bureau & Proprietary Services </NavLink>
//       <p className="menu-description">Efficient compliance and rate management solutions.</p></li>
//                 <li> <NavLink to="/ccmwithsmartcomm" onClick={handleLinkClick}>Customer Communication Management  </NavLink>
//           <p className="menu-description">Automated, personalized customer communication integration.</p></li>
//           <li><NavLink to="/mulesoftintegration" onClick={handleLinkClick}> Integration & API Services</NavLink>
//           <p className="menu-description">Secure and scalable Guidewire connectivity. with simple words</p></li> </ul></div>)} </li>



//         <li className="has-submenu" onMouseEnter={() => !isOpen && setActiveMenu("sectors")} onMouseLeave={() => !isOpen && setActiveMenu(null)}
//           onClick={() => isOpen ? setActiveMenu(activeMenu === "sectors" ? null : "sectors") : null}>
//             <span>Sectors We Serve<FaChevronDown className={`arrow ${activeMenu === "sectors" ? "open" : ""}`} /></span>
//           {activeMenu === "sectors" && (<div className="mega-menu bordered">
//      <h3>Sectors We Serve</h3><ul className="sectors-icons">
//  <li><NavLink to="/personal-lines" onClick={handleLinkClick}><FaCar className="menu-icon" /> Personal Lines </NavLink>
//  <p className="menu-description">Insurance for individuals and families.</p></li>
//    <li><NavLink to="/commercial-lines" onClick={handleLinkClick}><FaBuilding className="menu-icon" /> Commercial Lines </NavLink>
//    <p className="menu-description">Coverage for businesses and organizations.</p></li>
// <li><NavLink to="/specialty-lines" onClick={handleLinkClick}><FaStar className="menu-icon" /> Specialty Lines </NavLink>
// <p className="menu-description">Protection for unique or complex risks.</p></li>
//   <li><NavLink to="/reinsurers" onClick={handleLinkClick}> <FaHandshake className="menu-icon" /> Reinsurers </NavLink>
//   <p className="menu-description">Insurance providers for insurance companies.</p></li>
//   <li><NavLink to="/workers-compensation" onClick={handleLinkClick}><FaHardHat className="menu-icon" /> Workers Compensation</NavLink>
//   <p className="menu-description">Coverage for employee injury and recovery.</p></li> </ul></div>)}</li>


//         <li><NavLink to="/career" style={({ isActive }) => getLinkStyle(isActive)} onClick={handleLinkClick}> Careers</NavLink></li>
//         <li><NavLink to="/contactUs" style={({ isActive }) => getLinkStyle(isActive)} onClick={handleLinkClick}>Contact Us</NavLink></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import llplogo from "../Assets/logo.png";
import {
  FaChevronDown,
  FaCar,
  FaBuilding,
  FaStar,
  FaHandshake,
  FaHardHat,
} from "react-icons/fa";
import "./Nav.css";

const OFFERING_ROUTES = [
  "/guidewireservices",
  "/quality-assurance",
  "/bereauIntegration",
  "/ccmwithsmartcomm",
  "/mulesoftintegration",
];

const SECTOR_ROUTES = [
  "/personal-lines",
  "/commercial-lines",
  "/specialty-lines",
  "/reinsurers",
  "/workers-compensation",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  /* ----------------------------------------------------------------------------
     AUTO DETECT WHEN USER IS INSIDE OFFERINGS OR SECTORS
  -----------------------------------------------------------------------------*/
  const isOfferingsActive = OFFERING_ROUTES.some((r) =>
    location.pathname.startsWith(r)
  );

  const isSectorsActive = SECTOR_ROUTES.some((r) =>
    location.pathname.startsWith(r)
  );

  /* ----------------------------------------------------------------------------
     AUTO OPEN THE SUBMENU ON INNER PAGES
  -----------------------------------------------------------------------------*/
  useEffect(() => {
    if (isOfferingsActive) setActiveMenu("offerings");
    else if (isSectorsActive) setActiveMenu("sectors");
    else setActiveMenu(null);
  }, [location.pathname]);

  /* ----------------------------------------------------------------------------
     NAVBAR SCROLL COLOR CHANGE
  -----------------------------------------------------------------------------*/
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ----------------------------------------------------------------------------
     CLOSE MOBILE MENU AFTER CLICK
  -----------------------------------------------------------------------------*/
  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  /* ----------------------------------------------------------------------------
     ACTIVE LINK STYLES
  -----------------------------------------------------------------------------*/
  const activeColor = "#F06707";
  const defaultColor = scrolled ? "#2e3a59" : "white";

  const getLinkStyle = (isActive) => ({
    color: isActive ? activeColor : defaultColor,
    fontWeight: isActive ? 700 : 600,
    borderBottom: isActive ? "2px solid #A3210C" : "none",
    paddingBottom: isActive ? "4px" : "0px",
    transition: "0.25s ease",
  });

  const getParentStyle = (active) => ({
    color: active ? activeColor : defaultColor,
    fontWeight: active ? 700 : 600,
    borderBottom: active ? "2px solid #A3210C" : "none",
    paddingBottom: active ? "4px" : "0px",
    cursor: "pointer",
    transition: "0.25s ease",
  });

  /* ----------------------------------------------------------------------------
     RENDER COMPONENT
  -----------------------------------------------------------------------------*/
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <NavLink to="/" onClick={handleLinkClick}>
          <img src={llplogo} alt="Logo" className="navbar-logo" />
        </NavLink>
      </div>

      {/* MOBILE HAMBURGER */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAVIGATION LIST */}
      <ul className={`navbar-right ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            onClick={handleLinkClick}
            style={({ isActive }) => getLinkStyle(isActive)}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/aboutUs"
            onClick={handleLinkClick}
            style={({ isActive }) => getLinkStyle(isActive)}
          >
            About Us
          </NavLink>
        </li>

        {/* --------------------- OFFERINGS MENU --------------------- */}
        <li
          className="has-submenu"
          onMouseEnter={() => !isOpen && setActiveMenu("offerings")}
          onMouseLeave={() => !isOpen && setActiveMenu(null)}
          onClick={() =>
            isOpen &&
            setActiveMenu(activeMenu === "offerings" ? null : "offerings")
          }
        >
          <span style={getParentStyle(isOfferingsActive || activeMenu === "offerings")}>
            Offerings
            <FaChevronDown
              className={`arrow ${
                isOfferingsActive || activeMenu === "offerings" ? "open" : ""
              }`}
            />
          </span>

          {(activeMenu === "offerings" || isOfferingsActive) && (
            <div className="mega-menu bordered">
              <h3>Our Offerings</h3>
              <ul>
                <li>
                  <NavLink
                    to="/guidewireservices&solutions"
                    onClick={handleLinkClick}
                  >
                    Core P&C Solutions
                  </NavLink>
                  <p className="menu-description">
                    Seamless, optimized Guidewire implementation services.
                  </p>
                </li>

                <li>
                  <NavLink
                    to="/quality-assurance"
                    onClick={handleLinkClick}
                  >
                    Quality Assurance
                  </NavLink>
                  <p className="menu-description">
                    Intelligent testing for reliable Guidewire delivery.
                  </p>
                </li>

                <li>
                  <NavLink
                    to="/bereauIntegration"
                    onClick={handleLinkClick}
                  >
                    Bureau & Proprietary Services
                  </NavLink>
                  <p className="menu-description">
                    Efficient compliance and rate management solutions.
                  </p>
                </li>

                <li>
                  <NavLink
                    to="/ccmwithsmartcomm"
                    onClick={handleLinkClick}
                  >
                    Customer Communication Management
                  </NavLink>
                  <p className="menu-description">
                    Automated, personalized communication.
                  </p>
                </li>

                <li>
                  <NavLink
                    to="/mulesoftintegration"
                    onClick={handleLinkClick}
                  >
                    Integration & API Services
                  </NavLink>
                  <p className="menu-description">
                    Secure and scalable Guidewire connectivity.
                  </p>
                </li>
              </ul>
            </div>
          )}
        </li>

        {/* --------------------- SECTORS MENU --------------------- */}
        <li
          className="has-submenu"
          onMouseEnter={() => !isOpen && setActiveMenu("sectors")}
          onMouseLeave={() => !isOpen && setActiveMenu(null)}
          onClick={() =>
            isOpen &&
            setActiveMenu(activeMenu === "sectors" ? null : "sectors")
          }
        >
          <span style={getParentStyle(isSectorsActive || activeMenu === "sectors")}>
            Sectors We Serve
            <FaChevronDown
              className={`arrow ${
                isSectorsActive || activeMenu === "sectors" ? "open" : ""
              }`}
            />
          </span>

          {(activeMenu === "sectors" || isSectorsActive) && (
            <div className="mega-menu bordered">
              <h3>Sectors We Serve</h3>
              <ul className="sectors-icons">
                <li>
                  <NavLink to="/personal-lines" onClick={handleLinkClick}>
                    <FaCar className="menu-icon" /> Personal Lines
                  </NavLink>
                  <p className="menu-description">Insurance for individuals.</p>
                </li>

                <li>
                  <NavLink to="/commercial-lines" onClick={handleLinkClick}>
                    <FaBuilding className="menu-icon" /> Commercial Lines
                  </NavLink>
                  <p className="menu-description">Coverage for businesses.</p>
                </li>

                <li>
                  <NavLink to="/specialty-lines" onClick={handleLinkClick}>
                    <FaStar className="menu-icon" /> Specialty Lines
                  </NavLink>
                  <p className="menu-description">Protection for complex risks.</p>
                </li>

                <li>
                  <NavLink to="/reinsurers" onClick={handleLinkClick}>
                    <FaHandshake className="menu-icon" /> Reinsurers
                  </NavLink>
                  <p className="menu-description">
                    Insurance for insurance companies.
                  </p>
                </li>

                <li>
                  <NavLink to="/workers-compensation" onClick={handleLinkClick}>
                    <FaHardHat className="menu-icon" /> Workers Compensation
                  </NavLink>
                  <p className="menu-description">
                    Protection for workplace injuries.
                  </p>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li>
          <NavLink
            to="/career"
            onClick={handleLinkClick}
            style={({ isActive }) => getLinkStyle(isActive)}
          >
            Careers
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contactUs"
            onClick={handleLinkClick}
            style={({ isActive }) => getLinkStyle(isActive)}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


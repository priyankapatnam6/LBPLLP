import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import llplogo from "../Assets/logo.png";
import {FaChevronDown,FaCar,FaBuilding,FaStar,FaHandshake,FaHardHat,} from "react-icons/fa";
import "./Nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);}, []);
    
  const handleLinkClick = () => {setIsOpen(false); setActiveMenu(null);};

  const getLinkStyle = (isActive) => ({
    color: isActive ? "#F06707" : scrolled ? "#2e3a59" : "white", 
    fontWeight: isActive ? 700 : 600,
    borderBottom: isActive ? "2px solid #A3210C" : "none",
    paddingBottom: isActive ? 4 : 0,
    transition: "all 0.3s ease",
  });

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left"><NavLink to="/" onClick={handleLinkClick}><img src={llplogo} alt="Logo" className="navbar-logo" /></NavLink></div>

      <div className={`hamburger ${isOpen ? "active" : ""}`}onClick={() => setIsOpen(!isOpen)}>   <span></span> <span></span><span></span></div>

      <ul className={`navbar-right ${isOpen ? "open" : ""}`}>
        <li><NavLink to="/"  style={({ isActive }) => getLinkStyle(isActive)} onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to="/aboutUs"  style={({ isActive }) => getLinkStyle(isActive)} onClick={handleLinkClick}>About Us</NavLink></li>


        <li className="has-submenu"
          onMouseEnter={() => !isOpen && setActiveMenu("offerings")}
          // onMouseLeave={() => !isOpen && setActiveMenu(null)}
           onClick={() =>isOpen? setActiveMenu(activeMenu === "offerings" ? null : "offerings"): null}>
          <span>Offerings<FaChevronDown className={`arrow ${activeMenu === "offerings" ? "open" : ""}`}/></span>
          {activeMenu === "offerings" && (<div className="mega-menu bordered"><h3>Our Offerings</h3><ul>
           <li><NavLink to="/guidewireservices&solutions" onClick={handleLinkClick}>Core P&C Solutions</NavLink>
                       <p className="menu-description"> Seamless, optimized Guidewire implementation services.</p></li>
                <li> <NavLink to="/quality-assurance" onClick={handleLinkClick}>  Quality Assurance</NavLink>
      <p className="menu-description">Intelligent testing for reliable Guidewire delivery.</p></li>
      <li><NavLink to="/bereauIntegration" onClick={handleLinkClick}>Bureau & Proprietary Services </NavLink>
      <p className="menu-description">Efficient compliance and rate management solutions.</p></li>
                <li> <NavLink to="/ccmwithsmartcomm" onClick={handleLinkClick}>Customer Communication Management  </NavLink>
          <p className="menu-description">Automated, personalized customer communication integration.</p></li>
          <li><NavLink to="/mulesoftintegration" onClick={handleLinkClick}> Integration & API Services</NavLink>
          <p className="menu-description">Secure and scalable Guidewire connectivity. with simple words</p></li> </ul></div>)} </li>



        <li className="has-submenu" onMouseEnter={() => !isOpen && setActiveMenu("sectors")} onMouseLeave={() => !isOpen && setActiveMenu(null)}
          onClick={() => isOpen ? setActiveMenu(activeMenu === "sectors" ? null : "sectors") : null}>
            <span>Sectors We Serve<FaChevronDown className={`arrow ${activeMenu === "sectors" ? "open" : ""}`} /></span>
          {activeMenu === "sectors" && (<div className="mega-menu bordered">
     <h3>Sectors We Serve</h3><ul className="sectors-icons">
 <li><NavLink to="/personal-lines" onClick={handleLinkClick}><FaCar className="menu-icon" /> Personal Lines </NavLink>
 <p className="menu-description">Insurance for individuals and families.</p></li>
   <li><NavLink to="/commercial-lines" onClick={handleLinkClick}><FaBuilding className="menu-icon" /> Commercial Lines </NavLink>
   <p className="menu-description">Coverage for businesses and organizations.</p></li>
<li><NavLink to="/specialty-lines" onClick={handleLinkClick}><FaStar className="menu-icon" /> Specialty Lines </NavLink>
<p className="menu-description">Protection for unique or complex risks.</p></li>
  <li><NavLink to="/reinsurers" onClick={handleLinkClick}> <FaHandshake className="menu-icon" /> Reinsurers </NavLink>
  <p className="menu-description">Insurance providers for insurance companies.</p></li>
  <li><NavLink to="/workers-compensation" onClick={handleLinkClick}><FaHardHat className="menu-icon" /> Workers Compensation</NavLink>
  <p className="menu-description">Coverage for employee injury and recovery.</p></li> </ul></div>)}</li>


        <li><NavLink to="/career" style={({ isActive }) => getLinkStyle(isActive)} onClick={handleLinkClick}> Careers</NavLink></li>
        <li><NavLink to="/contactUs" style={({ isActive }) => getLinkStyle(isActive)} onClick={handleLinkClick}>Contact Us</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;

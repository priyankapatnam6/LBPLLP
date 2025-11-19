import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${hidden ? "hidden" : ""}`}>
      <div className="navbar-left">
        <NavLink to="/">
          <img src="/llplogo.png" alt="Logo" className="navbar-logo" />
        </NavLink>
      </div>

      <ul className="navbar-right">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/aboutUs">About Us</NavLink></li>
        <li><NavLink to="/career">Careers</NavLink></li>
        <li><NavLink to="/contactUs">Contact Us</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;

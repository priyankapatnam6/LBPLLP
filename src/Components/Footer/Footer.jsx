import React, { useState } from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaArrowUp } from "react-icons/fa";
import Location from "./Location";
import { NavLink } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color:#C0C0C0;
  // background-color:rgba(154, 211, 234, 0.55);
  color: black;
  padding: 40px 20px 40px;
  position: relative;
  font-family: "Eurostile Extended Oblique", sans-serif;`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1800px;
  margin: 0 auto;
  align-items: flex-start;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    gap: 40px;}
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 50px; }`;

const Section = styled.div`
  min-width: 200px;
  /* Remove manual margins and center on small devices */
  @media (max-width: 1024px) {
    margin-left: 0 !important;}`;

const Title = styled.h4`
  margin-bottom: 15px;
  color: #2e3a59;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  @media (max-width: 600px) {white-space: normal;}`;

const Address = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: black;
  p {margin: 6px 0;}`;

const List = styled.ul`
  list-style: none;
  max-width: 5000px;
  padding: 0;
  margin: 0 auto;
  /* Center list for small screens */
  @media (max-width: 600px) {
    max-width: 100%;
    padding-left: 0;}`;

const ListItem = styled.li`
  margin-bottom: 8px;
  a {color: black;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {color: #2e3a59;}
    &.active {color: #cc5c24;font-weight: 600;}}`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  justify-content: flex-start;
  svg {
    margin-right: 10px;
    color: #2e3a59;
    min-width: 18px;}
  @media (max-width: 1024px) {
    justify-content: center;}`;

const ToggleMapButton = styled.button`
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  color: #2e3a59;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  padding: 0;
  svg {
    margin-right: 6px;}
  &:hover {
    text-decoration: underline;}`;

const UpButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #2e3a59;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 999;
  &:hover {background-color: #1c2845;}
  @media (max-width: 600px) {
    bottom: 15px;
    right: 15px;
    padding: 10px;}`;

const Footer = () => {
  const [mapVisible, setMapVisible] = useState(false);

//  const scrollToTop = () => {
//   const container = document.querySelector(".main-content");
//   if (container) {
//     container.scrollTo({ top: 0, behavior: "smooth" });
//   } else {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }
// };

// const scrollToTop = () => {
//   const root = document.documentElement || document.body;
//   root.scrollTo({ top: 0, behavior: "smooth" });
// };

// const scrollToTop = () => {console.log(document.querySelector(".main-content").scrollTop);
// document.querySelector(".main-content").scrollTop;
//   // document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
// };
// const scrollToTop = () => {
//   const container = document.querySelector(".main-content");

//   if (container) {
//     console.log("Current scrollTop:", container.scrollTop); // just for debugging
//     container.scrollTo({ top: 0, behavior: "smooth" }); // ✅ scrolls to top smoothly
//   } else {
//     window.scrollTo({ top: 0, behavior: "smooth" }); // fallback
//   }
// };

const scrollToTop = () => {
  const container = document.querySelector(".main-content");
  if (container && container.scrollHeight > container.clientHeight) {
    container.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// const scrollToTop = () => {
//   const root = document.documentElement;
//   const body = document.body;

//   (root.scrollTo || body.scrollTo).call(root, { top: 0, behavior: "smooth" });
// };




  const toggleMap = () => {
    setMapVisible((prev) => !prev);
  };

  return (
    <FooterContainer>
      <Content>
        <Section> <Title>LeftBrain Path LLP – Development Center</Title>
          <Address>
            <p>3rd & 4th Floor, Plot #13, Shilpi Layout,<br/> Vittal Rao Nagar,<br />
              Image Hospital Rd, Madhapur, Gafoornagar,<br />
              Hyderabad, Telangana 500081 </p><p>Telangana, India</p>
            <ToggleMapButton onClick={toggleMap} title="Toggle Map" aria-expanded={mapVisible}>
              <FaMapMarkerAlt /> {mapVisible ? "Hide Map" : "Show Map"}
            </ToggleMapButton>
            {mapVisible && <div style={{ marginTop: "20px" }}><Location /></div>}</Address></Section>

        <Section style={{ marginLeft: "60px" }}><Title>Offerings</Title><List>
            <ListItem><NavLink to="/guidewireservices&solutions">Core P&C Solutions</NavLink></ListItem>
            <ListItem><NavLink to="/quality-assurance">Quality Assurance</NavLink></ListItem>
            <ListItem><NavLink to="/bereauIntegration" >Bureau & Proprietary Services</NavLink></ListItem>
            <ListItem><NavLink to="/ccmwithsmartcomm">Customer Communication Management</NavLink></ListItem>
            <ListItem><NavLink to="/mulesoftintegration">Integration & API Services</NavLink></ListItem></List></Section>

        <Section style={{ marginLeft: "90px" }}> <Title>Sectors We Serve</Title>

          <List><ListItem><NavLink to="/personal-lines">Personal Lines</NavLink> </ListItem>
            <ListItem><NavLink to="/commercial-lines">Commercial Lines</NavLink></ListItem>
           <ListItem><NavLink to="/workers-compensation">Workers Compensation</NavLink></ListItem> 

            <ListItem><NavLink to="/specialty-lines">Specialty Lines</NavLink></ListItem>
            <ListItem><NavLink to="/reinsurers">ReInsurers</NavLink></ListItem></List></Section>

        <Section style={{ marginLeft: "60px" }}><Title>Contact</Title>
          <ContactItem><FaEnvelope /> <a href="mailto:solutions@leftbrainpath.com">solutions@leftbrainpath.com</a></ContactItem>
          <ContactItem><FaClock /> Mon – Fri </ContactItem>
          <ContactItem><FaPhone /> <a href="tel:+914045130116">040 – 45130116</a></ContactItem>
          <ContactItem><FaMapMarkerAlt /> Hyderabad,Telangana</ContactItem> </Section></Content>

      <p style={{textAlign: "center",marginTop: "25px",fontWeight:"bold",fontSize: "16px",color: "#555",}}>
        &copy; LeftBrain Path LLP – Catalyst for Success – 2025. All Rights Reserved.</p>

      <UpButton onClick={scrollToTop} title="Scroll to top" aria-label="Scroll to top"><FaArrowUp /></UpButton></FooterContainer>);};

export default Footer;



import React from "react";
import styled, { keyframes } from "styled-components";
import heroImage from "../Assets/CoreP&CSol.png";
import {FaBalanceScale, FaCogs, FaExchangeAlt,FaFileInvoiceDollar, FaMedkit, FaMobileAlt, FaTools} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }`;

const Wrapper = styled.div`
  // font-family: "Inter", "Poppins", sans-serif;
  color: #1e293b;
  background: #fff;
  overflow-x: hidden;
  margin-top: -130px;`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 50vh;
  background: url(${heroImage})center center / contain no-repeat, #0f172a;
  background-size: cover;
  color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: -120px;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(15,23,42,0.6), rgba(30,64,175,0.5));
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 140px 2% 0; 
  max-width: 690px;
  animation: ${fadeIn} 1.1s ease-out;

  h1 { font-size: 3.5rem;
    font-weight: 850;
 font-family: "Outfit", sans-serif;    // font-family:  serif;
    display: flex;
    flex-wrap: wrap;     
    transform: skew(-6deg); 
    background: linear-gradient(90deg, #93c5fd, #ffffff);
    -webkit-background-clip: text;
    color: transparent;
  }
  p { font-size: 1.1rem; opacity: 0.95; line-height: 1.6; margin-bottom: 24px; }
`;

const HeroButton = styled.button`
  background: #fff;
  color: #1e3a8a;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover { background: #f1f5f9; transform: translateY(-3px); }
`;

const Section = styled.section`
  padding: 30px 20px;
  max-width: 1350px;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
   h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #2e3a59;
    margin-bottom: 15px;

    &::after {
      content: "";
      width: 120px;
      height: 3px;
      background: #A3210C;
      display: block;
      margin: 8px auto 0;
      border-radius: 2px;
    }
  }
  h3 {color: #444; max-width: 950px; margin: 0 auto 25px;  font-size: 1.5rem;}

     ul {
    list-style: none;
    padding: 0;
    margin: 10px auto 0;
    max-width: 800px;
    text-align: left;
    columns: 2;
    column-gap: 40px;

    li {
      position: relative;
      padding-left: 16px;
      margin-bottom: 6px;
      color:#000;
      font-size: 1rem;
      line-height: 1.4;

      &::before {
        content: "▹";
        position: absolute;
        left: 0;
        color:#2e3a59;
        font-weight: bold;
      }
    }
  // ul {
  //   list-style: none; padding: 0; max-width: 650px; margin: 0 auto; text-align: left;
  //   li {
  //     position: relative; padding-left: 20px; margin-bottom: 6px;
  //     color: #475569; font-size: 0.95rem;
  //     &::before { content: "▹"; position: absolute; left: 0; color: #2563eb; font-weight: bold; }
  //   }
  }
`;

// const CardGrid = styled.div`
//   display: flex;
//   justify-content: 2px;
//   align-items: stretch;
//   flex-wrap: nowrap;
//   // gap: 18px;
//   margin-top: 10px;
//   flex: 1;
// `;

const CardGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: nowrap;
  gap: 10px; 
  margin-top: 20px;
  overflow-x: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }
`;

const Card = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 10px;
  border-top: 3px solid #2e3a59;
  box-shadow: 0 3px 12px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  min-width: 140px;
  &:hover { transform: translateY(-4px); box-shadow: 0 8px 20px rgba(37,99,235,0.15); }
  
  .icon {
    text-align: center;
    padding-top: 16px;
  }
  
  div {
    padding: 12px 16px;
    h4 { color: #2e3a59; font-size: 1rem; margin-bottom: 4px; font-weight: 700; text-align: center; }
    p { font-size: 0.9rem; color: #475569; line-height: 1.5; text-align: center; }
  }
`;

const CTA = styled.section`
  text-align: center;
background: linear-gradient(135deg,rgba(255, 165, 0, 1) 0%,
  rgba(240, 103, 7, 1) 50%,     rgba(163, 33, 12, 1) 120% );
    color: #fff;
  padding: 30px 20px;
  border-radius: 20px 20px 0 0;
  animation: ${fadeIn} 1s ease-out;
  h2 { font-size: 1.9rem; font-weight: 800; margin-bottom: 10px; }
  p { max-width: 700px; margin: 0 auto 20px; font-size: 1rem; opacity: 0.95; }
  button {
    background: #fff; color: #1e3a8a; border: none; padding: 12px 28px;
    border-radius: 8px; font-weight: 600; transition: 0.3s;
    &:hover { background: #e2e8f0; transform: scale(1.04); }
  }
`;

const ComprehensiveSolutions = () =>{
      const navigate = useNavigate();

  return(
<Wrapper>
    <HeroSection>
      <HeroContent>
        <h1>Guidewire Solutions</h1>
        <p>Seamless, optimized implementation for modern insurers.</p>
        {/* <HeroButton>Learn More</HeroButton> */}
      </HeroContent>
    </HeroSection>

    <Section>
      <h2>Empowering Property & Casualty Insurers</h2>
      <p>We deliver tailored Guidewire solutions helping insurers modernize operations, streamline processes, and accelerate digital transformation with reliable, scalable implementations.</p>
    </Section>

    <Section>
      <h2>Our Core Expertise</h2>
      <CardGrid>
        <Card><div className="icon"><FaCogs size={40} color="#2e3a59" /></div><div><h4>PolicyCenter (PC)</h4><p>Automate underwriting and policy lifecycle management.</p></div></Card>
        <Card><div className="icon"><FaFileInvoiceDollar size={40} color="#2e3a59" /></div><div><h4>BillingCenter (BC)</h4><p>Optimize billing and commission operations.</p></div></Card>
        <Card><div className="icon"><FaMedkit size={40} color="#2e3a59" /></div><div><h4>ClaimCenter (CC)</h4><p>Streamline claims handling with intelligent automation.</p></div></Card>
        <Card><div className="icon"><FaBalanceScale size={40} color="#2e3a59" /></div><div><h4>Rating Management</h4><p>Rule configuration, rate tables, compliance, and modernization.</p></div></Card>
        <Card><div className="icon"><FaTools size={40} color="#2e3a59" /></div><div><h4>Configuration</h4><p>Workflow, UI enhancements, migration, and plugins.</p></div></Card>
        <Card><div className="icon"><FaExchangeAlt size={40} color="#2e3a59" /></div><div><h4>Integration</h4><p>APIs, legacy systems, real-time & batch connectivity.</p></div></Card>
        <Card><div className="icon"><FaMobileAlt size={40} color="#2e3a59" /></div><div><h4>Jutro Digital</h4><p>Custom portals and mobile apps with optimized UX.</p></div></Card>
      </CardGrid>
    </Section>

    <Section>
      <h2>End-to-End Solution Delivery</h2>
      <ul>
        <li><strong>Assessment & Strategy</strong> – Define roadmap and objectives.</li>
        <li><strong>Design & Architecture</strong> – Build scalable, future-ready solutions.</li>
        <li><strong>Implementation & Configuration</strong> – Deploy with minimal disruption.</li>
        <li><strong>Testing & QA</strong> – Ensure reliable and compliant releases.</li>
        <li><strong>Training & Enablement</strong> – Empower internal teams.</li>
        <li><strong>Support & Optimization</strong> – Continuous improvement and tuning.</li>
      </ul>
    </Section>

    <Section>
      <h2>Why Partner with Us</h2>
      <h3>Collaborate with certified experts focused on measurable outcomes, faster adoption, and long-term success.</h3>
      <ul>
        <li><strong>Deep Expertise</strong> – Certified Guidewire specialists.</li>
        <li><strong>Faster Delivery</strong> – Agile methods reduce time-to-market.</li>
        <li><strong>Full Ownership</strong> – From strategy to optimization.</li>
        <li><strong>Cost Efficiency</strong> – Maximized ROI and smart scaling.</li>
        <li><strong>Trusted Partnership</strong> – Built on transparency and trust.</li>
      </ul>
    </Section>

    <CTA>
      <h2>Ready to Transform Your Data Strategy?</h2>
      <p>Discover how our frameworks modernize operations and unlock measurable business value.</p>
      <button onClick={() => {window.scrollTo(0, 0); navigate("/contactUs");}} >Contact Us</button>
    </CTA>
  </Wrapper>
)};

export default ComprehensiveSolutions;

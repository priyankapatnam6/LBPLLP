import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TeamSection from "./TeamSection";
import CertificationSection from "./CertificationSection";
import AnimatedInfo from "./AnimatedInfo";
import BenefitsSection from "./BenefitSection";
import ValueProposition from "./ValueProposition";
import Services from "./Services";
import BureauIntegration from "../Offerings/BureauIntegration";


const Wrapper = styled.div`
  width: 100%;
    margin-top: -130px; 
  // font-family: "Inter", sans-serif;
  color: #333;
`;

const WelcomeSection = styled.section`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;


  h2 {
    font-size: 2rem;
    font-weight: 800;
    color:  #2e3a59;
    position: relative;

    &::after {
      content: "";
       width: 250px;
      height: 4px;
      background: #A3210C;
      display: block;
     margin: 8px auto 0;
      border-radius: 2px;
    }
  }

  .content {
    width: 100%;
    max-width: 900px; /* keeps text comfortably readable */
    text-align: center;
  }

  .text {
    width: 100%;
    h3 {
    margin-top:-5px;
      font-size: 1.5rem;
      margin-bottom: 12px;
      color: #444;
    }

    h5 {
      font-size: 1.1rem;
      margin-bottom: 15px;
      font-style: italic;
      color: #666;
    }

    p {
      line-height: 1.8;
      color: #555;
      font-size: 1.05rem;
    }
  }

  @media (max-width: 768px) {
    padding: 80px 16px;

    h2 {
      font-size: 1.7rem;
    }

    .text h3 {
      font-size: 1.5rem;
    }

    .text p {
      font-size: 1rem;
    }
  }
`;


const ServicesSection = styled.section`
  padding: 100px 20px;
  background: #f8f9fa;
  text-align: center;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 16px;
    color: #1d3557;
    font-weight: 700;

    span {
      color: #ffb400;
      font-style: italic;
    }
  }

  p {
    max-width: 750px;
    margin: 0 auto 50px;
    color: #555;
    font-size: 1.05rem;
    line-height: 1.6;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .service-card {
    background: #fff;
    border-radius: 14px;
    padding: 40px 25px;
    box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    transform: translateY(0);

    &:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.12);
    }

    h3 {
      margin-top: 18px;
      font-size: 1.3rem;
      color: #1d3557;
      font-weight: 600;
    }

    p {
      font-size: 0.95rem;
      color: #666;
      margin-top: 12px;
      line-height: 1.6;
    }
  }
`;

const Home = () => {



  return (
    <Wrapper><AnimatedInfo />

   {/* <div>
   
<h6 style={{fontFamily:'Bank Gothic, sans-serif'}}>Welcome to LeftBrain Path LLP</h6>
<h6 style={{fontFamily:'Microgramma, sans-serif'}}>Welcome to LeftBrain Path LLP</h6>
<h6 style={{fontFamily:'Eurostile, sans-serif'}}>Welcome to LeftBrain Path LLP</h6>
<h6 style={{fontFamily:'Orbitron, sans-serif'}}>Welcome to LeftBrain Path LLP</h6>  </div>   */}
{/* 
<div>
  <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "48px" }}>
        LeftBrainPath
      </div>
      <h6   style={{  fontFamily: "'Orbitron', sans-serif",fontSize: "18px", margin: "10px 0"}}>Welcome to LeftBrain Path LLP</h6>
      <h6 style={{fontFamily: "Arial, Helvetica, sans-serif",fontSize: "18px",margin: "10px 0"}}>Welcome to LeftBrain Path LLP</h6>
      <h6 style={{ fontFamily: "Verdana, Geneva, sans-serif",fontSize: "18px", margin: "10px 0" }}> Welcome to LeftBrain Path LLP</h6>
      <h6 tyle={{ fontFamily: "'Courier New', Courier, monospace",fontSize: "18px",margin: "10px 0"}} > Welcome to LeftBrain Path LLP</h6>
      <h6 style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "18px", margin: "10px 0" }}> Welcome to LeftBrain Path LLP</h6>
<h6 style={{ fontFamily: "Georgia, serif", fontSize: "18px", margin: "10px 0" }}>Welcome to LeftBrain Path LLP</h6>
<h6 style={{ fontFamily: "Tahoma, Geneva, sans-serif", fontSize: "18px", margin: "10px 0" }}>Welcome to LeftBrain Path LLP</h6>
<h6 style={{ fontFamily: "Trebuchet MS, Helvetica, sans-serif", fontSize: "18px", margin: "10px 0" }}>Welcome to LeftBrain Path LLP</h6>
<h6 style={{ fontFamily: "Impact, Charcoal, sans-serif", fontSize: "18px", margin: "10px 0" }}> Welcome to LeftBrain Path LLP</h6>
<h6 style={{ fontFamily: "'Lucida Console', Monaco, monospace", fontSize: "18px", margin: "10px 0" }}>Welcome to LeftBrain Path LLP</h6>
<h6 style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif", fontSize: "18px", margin: "10px 0" }}>Welcome to LeftBrain Path LLP</h6>

    </div> */}

      <WelcomeSection>
        
  <h2>Welcome to LeftBrain Path LLP</h2> 
  <div className="content"><div className="text">
      <h3>Empowering Insurance with Smart Technology</h3>
      <h5>"Driving the Future of Insurance Through Innovation."</h5>
      <p>
        At <strong>LeftBrain Path LLP</strong>, we specialize in delivering
        technology-driven solutions for the insurance industry. Our
        expertise spans policy management, claims automation, customer
        communication, and cloud-based integrations. We help insurers
        streamline operations, enhance user experience, and stay ahead in
        a rapidly evolving digital landscape. Whether it's optimizing
        workflows or implementing secure and scalable solutions, we are
        committed to guiding your business into the future.
      </p>
    </div>
  </div>
</WelcomeSection>

{/*       <ServicesSection>
        <h2> Our <span>Expert Services</span></h2>
        <p> We specialize in end-to-end Guidewire® solutions, QA testing, and
          seamless MuleSoft integrations... </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Guidewire® Implementation</h3>
            <p>
              Optimize workflows, system integrations, and cloud coding
              standards.
            </p>
          </div>
          <div className="service-card">
            <h3>Quality Assurance</h3>
            <p>
              Comprehensive testing services, including automation and
              performance testing.
            </p>
          </div>
          <div className="service-card">
            <h3>CCM Services</h3>
            <p>
              Enhance document generation with SmartCoMM® and OpenText® for
              business agility.
            </p>
          </div>
          <div className="service-card">
            <h3>Integration Services</h3>
            <p>
              Streamline API management and automation with MuleSoft AnyPoint®
              platform.
            </p>
          </div>
            <div className="service-card">
            <h3>Bureau & Proprietary Services</h3>
            <p>We work with actuaries to simplify bureau rules and integrate proprietary rate development, delivering accurate, compliant, and adaptable rating solutions for P&C insurance.
           
            </p>
          </div>
        </div>
      </ServicesSection> */}



      <Services />
<BenefitsSection />
      <CertificationSection />
            <TeamSection />
    </Wrapper>
  );
};

export default Home;


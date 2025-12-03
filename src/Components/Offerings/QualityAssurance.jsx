import React from "react";
import styled, { keyframes } from "styled-components";
import heroImage from "../Assets/QualityAssurance.jpg";
import {FaClipboardCheck,FaCogs,FaChartLine,FaShieldAlt, FaProjectDiagram,FaDatabase,FaBug,FaExchangeAlt,} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div`
  // font-family: "Inter", sans-serif;
  color: #1e293b;
  background: #fff;
  overflow-x: hidden;
  margin-top: -130px;`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 50vh;
 background: url(${heroImage}) center center / contain no-repeat, #0f172a; 
  color: #fff;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.7), rgba(30, 64, 175, 0.5));
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 140px 2% 0; 
  max-width: 600px; 
  animation: ${fadeIn} 1s ease-out;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(90deg, #93c5fd, #ffffff);
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    opacity: 0.95;
    line-height: 1.5;
  }
`;

const Section = styled.section`
  padding: 50px 6%;
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color:#2e3a59; 
    margin-bottom: 12px;
  }

  h3 {
    font-size: 1.4rem;
    color: #2e3a59; 
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    color: #475569;
    max-width: 800px;
    margin: 0 auto 24px;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  ul {
    list-style: none;
    padding: 0;
    max-width: 700px;
    margin: 0 auto;
    text-align: left;

    li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 8px;
      color: #475569;
      font-size: 0.95rem;
      line-height: 1.5;
      &::before {
        content: "▹";
        position: absolute;
        left: 0;
        color:#2e3a59; 
        font-weight: bold;
      }
    }
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  margin-top: 24px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  border-top: 3px solid #2e3a59; 
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  padding: 20px 12px;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 18px rgba(37, 99, 235, 0.15);
  }

  .icon {
    margin-bottom: 10px;
    // color: #2e3a59 !important;
  }

  h4 {
    color:#2e3a59; 
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 6px;
  }

  p {
    font-size: 0.9rem;
    color: #475569;
    line-height: 1.5;
  }
`;

const CTA = styled.section`
  text-align: center;
background: linear-gradient(135deg,rgba(255, 165, 0, 1) 0%,
  rgba(240, 103, 7, 1) 50%,     rgba(163, 33, 12, 1) 120% );  color: #fff;
  padding: 50px 20px;
  border-radius: 20px 20px 0 0;
  animation: ${fadeIn} 1s ease-out;

  h2 {
    font-size: 1.9rem;
    font-weight: 800;
    margin-bottom: 12px;
  }

  p {
    max-width: 850px;
    margin: 0 auto 20px;
    font-size: 1rem;
    opacity: 0.95;
  }

  button {
    background: #fff;
    color: #2e3a59; 
    border: none;
    padding: 12px 30px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background: #e2e8f0;
      transform: scale(1.04);
    }
  }
`;

const QualityAssurance = () => {
        const navigate = useNavigate();

  return(
  <Wrapper>
    <HeroSection>
      <HeroContent>
        <h1>Quality Assurance</h1>
        <p>
          Ensuring flawless Guidewire implementations through intelligent, automated testing.
        </p>
      </HeroContent>
    </HeroSection>

    <Section>
      <h3>Accelerating Quality Delivery with Intelligent Testing Solutions</h3>
      <p>
        In the complex world of insurance technology, quality cannot be an afterthought.
        Our Quality Analysis and Testing services ensure flawless Guidewire implementations
        with intelligent automation, reduced time-to-market, and built-in compliance.
      </p>
    </Section>

    <Section>
      <h2>Our Approach: Quality by Design</h2>
      <CardGrid>
        <Card>
          <div className="icon"><FaClipboardCheck size={38} color="#2563eb" /></div>
          <h4>Early Quality Integration</h4>
          <p>Embedding QA at every phase of implementation.</p>
        </Card>
        <Card>
          <div className="icon"><FaCogs size={38} color="#2563eb" /></div>
          <h4>Intelligent Automation</h4>
          <p>Accelerated validation with AI-driven automation tools.</p>
        </Card>
        <Card>
          <div className="icon"><FaShieldAlt size={38} color="#2563eb" /></div>
          <h4>Risk-Based Testing</h4>
          <p>Targeted coverage to ensure optimal business assurance.</p>
        </Card>
        <Card>
          <div className="icon"><FaChartLine size={38} color="#2563eb" /></div>
          <h4>Continuous Improvement</h4>
          <p>Data-driven insights to enhance quality over time.</p>
        </Card>
      </CardGrid>
    </Section>

    <Section>
      <h2>Comprehensive Testing Services</h2>
      <CardGrid>
        <Card><div className="icon"><FaProjectDiagram size={36} color="#2e3a59" /></div><h4>Functional Testing</h4><p>End-to-end validation of business and regulatory workflows.</p></Card>
        <Card><div className="icon"><FaExchangeAlt size={36} color="#2e3a59" /></div><h4>Integration Testing</h4><p>Seamless interoperability across APIs and external systems.</p></Card>
        <Card><div className="icon"><FaChartLine size={36} color="#2e3a59" /></div><h4>Performance Testing</h4><p>Real-world simulation to ensure scalability and reliability.</p></Card>
        <Card><div className="icon"><FaBug size={36} color="#2e3a59" /></div><h4>Regression Testing</h4><p>Automated regression ensures consistency across releases.</p></Card>
        <Card><div className="icon"><FaDatabase size={36} color="#2e3a59" /></div><h4>Data & Migration Testing</h4><p>Guarantee data integrity, accuracy, and reconciliation.</p></Card>
        <Card><div className="icon"><FaShieldAlt size={36} color="#2e3a59" /></div><h4>Security & Compliance</h4><p>Protect systems while validating regulatory readiness.</p></Card>
      </CardGrid>
    </Section>

    <Section>
      <h2>Why Choose Us</h2>
      <ul>
        <li><strong>Accelerator Advantage</strong> – Leverage ready-to-use accelerators for faster QA delivery.</li>
        <li><strong>Guidewire Specialization</strong> – Certified experts with deep P&C Guidewire experience.</li>
        <li><strong>Insurance Domain Expertise</strong> – Decades of experience across underwriting and claims.</li>
        <li><strong>Proven Methodologies</strong> – Agile, automated, and scalable QA frameworks.</li>
        <li><strong>Continuous Innovation</strong> – Harness AI and analytics for smarter quality outcomes.</li>
      </ul>
    </Section>

    <CTA>
      <h2>Achieve Quality at Speed</h2>
      <p>Transform your QA practice into a strategic enabler.<br/> Partner with us to ensure zero-defect delivery and accelerated releases.</p>
      <button onClick={navigate("/contactUs")}>Contact Us</button>
    </CTA>
  </Wrapper>
)};

export default QualityAssurance;

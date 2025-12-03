import React from "react";
import styled, { keyframes } from "styled-components";
import heroImage from "../Assets/Home3.png";
import { FaCogs, FaCode, FaExchangeAlt, FaFileAlt, FaDatabase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div`
  color: #1e293b;
  background: #fff;
  overflow-x: hidden;
  margin-top: -130px;
  // font-family: "Inter", sans-serif;
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(30, 64, 175, 0.65)),
    url(${heroImage}) center center / cover no-repeat;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const HeroContent = styled.div`
  max-width: 690px;
  position: relative;
  z-index: 1;
  padding: 140px 2% 0; 
  animation: ${fadeIn} 1.1s ease-out;

  h1 {
    font-size: 3rem;
    font-weight: 800;

    background: linear-gradient(90deg, #93c5fd, #ffffff);
    -webkit-background-clip: text;
    color: transparent;
    transform: skew(-4deg);
    line-height: 1.1;
    margin-bottom: 18px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.7;
    color: #e2e8f0;
    opacity: 0.95;
  }
`;

const Section = styled.section`
  padding: 20px 20px;
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
  border-bottom: 1px solid #f1f5f9;

  &:last-of-type {
    border-bottom: none;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 20px;

    &::after {
      content: "";
      width: 100px;
      height: 3px;
      background:#A3210C;
      display: block;
      margin: 10px auto 0;
      border-radius: 2px;
    }
  }

  p {
    color: #475569;
    max-width: 950px;
    margin: 0 auto 30px;
    font-size: 1.05rem;
    line-height: 1.7;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 20px auto 0;
    max-width: 850px;
    text-align: left;
    columns: 2;
    column-gap: 40px;

    li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 10px;
      color: #0f172a;
      font-size: 1rem;
      line-height: 1.5;

      &::before {
        content: "▹";
        position: absolute;
        left: 0;
        color: #A3210C;
        font-weight: bold;
      }
    }

    @media (max-width: 768px) {
      columns: 1;
    }
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 24px;
  margin-top: 30px;
`;

const Card = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  padding: 24px 20px;
  text-align: center;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 22px rgba(30, 64, 175, 0.15);
  }

  .icon {
    margin-bottom: 14px;
  }

  h4 {
    font-size: 1.05rem;
    color: #1e293b;
    margin-bottom: 8px;
    font-weight: 700;
  }

  p {
    font-size: 0.95rem;
    color: #475569;
    line-height: 1.5;
  }
`;

const CTA = styled.section`
  text-align: center;
  background: linear-gradient(135deg, rgba(255,165,0,1) 0%, rgba(240,103,7,1) 50%, rgba(163,33,12,1) 120%);
  color: #fff;
  padding: 40px 20px;
  border-radius: 30px 30px 0 0;
  animation: ${fadeIn} 1s ease-out;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 15px;
  }

  p {
    max-width: 700px;
    margin: 0 auto 30px;
    font-size: 1.05rem;
    line-height: 1.7;
    opacity: 0.95;
  }

  button {
    background: #fff;
    color: #1e3a8a;
    border: none;
    padding: 14px 32px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background: #e2e8f0;
      transform: scale(1.05);
    }
  }
`;

const BureauIntegration = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <HeroSection>
        <HeroContent>
          <h1>Bureau & Proprietary Services</h1>
          <p>Streamlining compliance through intelligent, automated Guidewire bureau solutions.</p>
        </HeroContent>
      </HeroSection>

      <Section>
        <h2>Bridging Compliance and Innovation</h2>
        <p>
          In the complex P&amp;C landscape, maintaining compliance with regulatory bureaus is mission-critical.
          Our Bureau Integration services ensure your Guidewire ecosystem stays up-to-date, compliant,
          and audit-ready through intelligent automation and deep domain expertise.
        </p>
      </Section>

      <Section>
        <h2>Core Service Capabilities</h2>
        <CardGrid>
          <Card>
            <div className="icon"><FaCogs size={36} color="#2e3a59" /></div>
            <h4>Business Rule Extraction & Analysis</h4>
            <p>Transform bureau manuals into actionable business logic.</p>
          </Card>
          <Card>
            <div className="icon"><FaCode size={36} color="#2e3a59" /></div>
            <h4>Rule Authoring & Configuration</h4>
            <p>Translate bureau content into Guidewire-native configurations.</p>
          </Card>
          <Card>
            <div className="icon"><FaExchangeAlt size={36} color="#2e3a59" /></div>
            <h4>Change Management & Versioning</h4>
            <p>Maintain control through audit-ready change management.</p>
          </Card>
          <Card>
            <div className="icon"><FaFileAlt size={36} color="#2e3a59" /></div>
            <h4>Implementation of Circulars</h4>
            <p>Automate circular updates with compliance tracking.</p>
          </Card>
          <Card>
            <div className="icon"><FaDatabase size={36} color="#2e3a59" /></div>
            <h4>Data Extraction & Management</h4>
            <p>Maintain critical bureau data for rating accuracy.</p>
          </Card>
        </CardGrid>
      </Section>

      <Section>
        <h2>Our Proven Methodology</h2>
        <ul>
          <li><strong>Assessment & Discovery</strong> – Review current integration and define goals.</li>
          <li><strong>Content Analysis</strong> – Extract, validate, and document bureau data.</li>
          <li><strong>Design & Mapping</strong> – Create mapping specs and version strategies.</li>
          <li><strong>Implementation</strong> – Configure data, author rules, and test.</li>
          <li><strong>Ongoing Support</strong> – Manage circulars and ensure compliance continuity.</li>
        </ul>
      </Section>

      <Section>
        <h2>Business Benefits</h2>
        <ul>
          <li>Regulatory Compliance with Reduced Risk</li>
          <li>Faster Time-to-Market for Rate Filings</li>
          <li>Accurate and Consistent Rating</li>
          <li>Operational Efficiency and Automation</li>
          <li>Enhanced Audit Readiness</li>
          <li>Competitive Agility</li>
        </ul>
      </Section>

      <Section>
        <h2>Key Differentiators</h2>
        <ul>
          <li>Deep Bureau Expertise – ISO, NCCI, AAIS mastery</li>
          <li>Guidewire-Native Integration – PolicyCenter & Rating Management</li>
          <li>Accelerated Delivery – Up to 50% faster implementations</li>
          <li>Continuous Compliance – Real-time tracking & updates</li>
          <li>Quality Assurance Built-In – Automated testing for every change</li>
        </ul>
      </Section>

      <CTA>
        <h2>Stay Compliant, Stay Ahead</h2>
        <p>Let us help you simplify your bureau integration with always-compliant, efficient Guidewire systems.</p>
        <button onClick={() => navigate("/contactUs")}>Contact Us</button>
      </CTA>
    </Wrapper>
  );
};

export default BureauIntegration;

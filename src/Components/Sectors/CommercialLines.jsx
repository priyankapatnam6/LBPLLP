import React from "react";
import styled, { keyframes } from "styled-components";
import { FaBuilding, FaCarCrash, FaShieldAlt, FaChartLine, FaCogs, FaUsers } from "react-icons/fa";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroInfoSection = styled.section`
  background: linear-gradient(rgba(159, 158, 158, 1));
  color: #191818ff;
  padding: 40px 20px 60px;
  text-align: center;
  margin-top: -140px;
  border-radius: 0 0 40px 40px;
  animation: ${fadeInUp} 0.8s ease forwards;

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-top: 120px;
    margin-bottom: 12px;
  }

  p {
    font-size: 1.05rem;
    margin-bottom: 24px;
    font-weight: 400;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 16px auto 0;
    max-width: 700px;
    text-align: left;
  }

  li {
    font-size: 0.95rem;
    color: #191818ff;
    padding-left: 22px;
    position: relative;
    margin-bottom: 8px;
  }

  li::before {
    content: "▹";
    color: #191818ff;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;

const SectionWrapper = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 40px 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #2e3a59;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    width: 250px;
    height: 4px;
    background: #A3210C;
    display: block;
    margin: 8px auto 0;
    border-radius: 2px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: nowrap;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Card = styled.div`
  flex: 1;
  max-width: 220px;
  min-width: 180px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  animation: ${fadeInUp} 0.5s forwards;
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  }

  svg {
    color: #2e3a59;
    font-size: 1.8rem;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 1rem;
    color: #2e3a59;
    margin-bottom: 6px;
    font-weight: 600;
  }

  p {
    font-size: 0.85rem;
    color: #475569;
    line-height: 1.4;
    margin-bottom: 8px;
  }
`;

const cardData = [
  { icon: <FaShieldAlt />, title: "General Liability", description: "Comprehensive coverage for business liabilities and risk management." },
  { icon: <FaBuilding />, title: "Commercial Property", description: "Protects business properties, assets, and buildings against damage or loss." },
  { icon: <FaUsers />, title: "Workers Compensation", description: "Ensures compliance and support for employee injury and health claims." },
  { icon: <FaCarCrash />, title: "Commercial Auto", description: "Coverage for company-owned vehicles and fleet management." },
  { icon: <FaCogs />, title: "Solutions Implemented", description: "Policy systems, claims management, underwriting automation, and integrations." },
  { icon: <FaChartLine />, title: "Technology & Clients", description: "Guidewire expertise serving regional carriers, national insurers, and MGAs." },
];

const CommercialLines = () => (
  <>
    <HeroInfoSection>
      <h1>Commercial Lines Expertise</h1>
      <p>
        We specialize in delivering scalable and compliant commercial insurance solutions — 
        from policy administration to rating, claims, and integrations.
      </p>
      <ul>
        <li><strong>Experienced In:</strong> General Liability, Commercial Property, Workers’ Compensation, and Commercial Auto.</li>
        <li><strong>Solutions:</strong> Policy admin, claims management, underwriting automation, rating engines, data analytics, and third-party integrations.</li>
        <li><strong>Clients:</strong> Regional carriers, national insurers, MGAs.</li>
        <li><strong>Technology:</strong> Specialized in Guidewire.</li>
      </ul>
    </HeroInfoSection>

    <SectionWrapper id="commercial-lines">
      <Title>Our Commercial Lines Focus</Title>
      <Row>
        {cardData.map((card, index) => (
          <Card key={index} delay={index * 0.1}>
            {card.icon}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </Card>
        ))}
      </Row>
    </SectionWrapper>
  </>
);

export default CommercialLines;

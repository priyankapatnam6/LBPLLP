import React from "react";
import styled, { keyframes } from "styled-components";
import {FaChartLine,FaFileAlt,FaSyncAlt,} from "react-icons/fa";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }`;

const HeroInfoSection = styled.section`
  background:linear-gradient(rgba(159, 158, 158, 1));
  color: #191818ff;
  padding: 50px 20px 70px;
  text-align: center;
  margin-top: -140px;
  border-radius: 0 0 40px 40px;
  animation: ${fadeInUp} 0.8s ease forwards;

  h1 {
    font-size: 2.3rem;
    font-weight: 800;
    margin-top: 120px;
    margin-bottom: 14px;
    color: #1e293b;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 24px;
    font-weight: 400;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    color: #334155;
  }
`;

const SectionWrapper = styled.section`
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #2e3a59;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    width: 220px;
    height: 4px;
    background: #a3210c;
    display: block;
    margin: 8px auto 0;
    border-radius: 2px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 40px;
`;

const Card = styled.div`
  flex: 1;
  max-width: 340px;
  min-width: 260px;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  text-align: left;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.25s ease-in-out;
  animation: ${fadeInUp} 0.5s forwards;
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
  }

  .icon {
    color: #2e3a59;
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.2rem;
    color: #1e293b;
    margin-bottom: 8px;
    font-weight: 700;
  }

  ul {
    padding-left: 18px;
    list-style: none;

    li {
      position: relative;
      font-size: 0.95rem;
      color: #475569;
      margin-bottom: 8px;
      line-height: 1.5;

      &::before {
        content: "▹";
        color:  #A3210C;
        position: absolute;
        left: -14px;
        font-weight: bold;
      }
    }
  }
`;

const cardData = [
  {
    icon: <FaChartLine />,
    title: "Rating Systems",
    points: [
      "Maintain and enhance Workers’ Compensation rating engines for accuracy.",
      "Implement and update ratebooks based on approved filings.",
      "Configure modifiers for underwriting adjustments.",
      "Ensure compliance with NCCI and state bureau rules.",
      "Achieve consistent premium calculations and results.",
    ],
  },
  {
    icon: <FaSyncAlt />,
    title: "Retrospective Rating",
    points: [
      "Provide end-to-end support for retrospective rating programs.",
      "Enhance JSON-based mock claim processing for accurate evaluations.",
      "Optimize retro plan performance and scalability.",
      "Ensure compliance across policy periods.",
      "Continuously streamline rating workflows.",
    ],
  },
  {
    icon: <FaFileAlt />,
    title: "Forms & Regulatory Compliance",
    points: [
      "Maintain jurisdiction-specific Workers’ Compensation forms.",
      "Trigger form patterns for all policy transactions.",
      "Replace outdated forms with latest compliant versions.",
      "Automate consistent and accurate form generation.",
      "Adapt quickly to changing regulatory updates.",
    ],
  },
];

const WorkersCompensation = () => {
  return (
    <>
      <HeroInfoSection>
        <h1>Worker's Compensation</h1>
        <p>
          We deliver efficient, scalable, and compliant Workers’ Compensation
          support end-to-end — ensuring regulatory accuracy, optimized rating,
          and continuous system performance.
        </p>
      </HeroInfoSection>

      <SectionWrapper>
        <Title>Our Expertise Areas</Title>
        <Row>
          {cardData.map((card, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <ul>
                {card.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </Card>
          ))}
        </Row>
      </SectionWrapper>
    </>
  );
};

export default WorkersCompensation;

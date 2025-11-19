import React from "react";
import styled from "styled-components";
import { FaShieldAlt, FaIndustry, FaLightbulb, FaGlobe, FaHandshake } from "react-icons/fa";

const SpecialtyWrapper = styled.section`
  background: #edededff;
  padding: 70px 8%;
  text-align: center;
  color: #1f2937;
  font-family: "Inter", sans-serif;

  h2 {
    font-size: 2.2rem;
    font-weight: 800;
    color: #2e3a59;
    margin-bottom: 15px;

    &::after {
      content: "";
      width: 120px;
      height: 3px;
      background: #a3210c;
      display: block;
      margin: 10px auto 0;
      border-radius: 2px;
    }
  }

  p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: #2e3a59;
    max-width: 900px;
    margin: 0 auto 40px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 10px;
    margin-top: 30px;
  }

  .card {
    background: #ffffff;
    border-radius: 12px;
    padding: 30px 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
    }

    .icon {
      font-size: 2rem;
      color: #2e3a59;
      margin-bottom: 12px;
    }

    h4 {
      font-size: 1.15rem;
      font-weight: 700;
      color:#2e3a59;
      margin-bottom: 8px;
    }

    p {
      font-size: 0.95rem;
      color: #555;
      line-height: 1.5;
    }
  }
`;

const SpecialtyLines = () => {
  return (
    <SpecialtyWrapper>
      <h2>Specialty Lines Insurance</h2>
      <p>
        <strong>Comprehensive Protection for Complex and Emerging Risks</strong>
        <br />
        Specialty Lines insurance addresses the sophisticated coverage needs of
        businesses facing unique, complex, or high-severity risks that standard
        commercial insurance policies cannot adequately cover. With rapidly
        evolving business landscapes, emerging technologies, and increasingly
        complex regulatory environments, specialty insurance has become
        essential for organizations seeking comprehensive risk transfer
        solutions.
      </p>
      <p>
        Our specialty lines division combines deep industry expertise,
        innovative coverage solutions, and relationships with premier specialty
        carriers to deliver tailored protection for your most challenging
        exposures.
      </p>

      <div className="grid">
        <div className="card">
          <FaShieldAlt className="icon" />
          <h4>Tailored Risk Solutions</h4>
          <p>
            We design insurance programs specific to complex risks that don’t fit
            standard policy structures.
          </p>
        </div>

        <div className="card">
          <FaIndustry className="icon" />
          <h4>Sector Expertise</h4>
          <p>
            Deep understanding of specialized industries including energy,
            cyber, marine, and professional liability.
          </p>
        </div>

        <div className="card">
          <FaLightbulb className="icon" />
          <h4>Innovative Coverage</h4>
          <p>
            We stay ahead of market trends to offer emerging risk protections
            aligned with new business models.
          </p>
        </div>

        <div className="card">
          <FaGlobe className="icon" />
          <h4>Global Reach</h4>
          <p>
            Access to international specialty markets and carriers for complex
            cross-border risk coverage.
          </p>
        </div>

        <div className="card">
          <FaHandshake className="icon" />
          <h4>Collaborative Approach</h4>
          <p>
            We work closely with brokers and underwriters to craft the best
            protection for your organization.
          </p>
        </div>
      </div>
    </SpecialtyWrapper>
  );
};

export default SpecialtyLines;

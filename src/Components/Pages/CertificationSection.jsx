import React from "react";
import styled from "styled-components";
import jutro from "../Assets/Jutro Developer Associate .png";
import associate from "../Assets/Associate.png";
import tableau from "../Assets/Tableau.png";
import databricks from "../Assets/databricks.jpg";
import AINS from "../Assets/AINS.png";
import Scrum from "../Assets/Scrum.png";

const CertWrapper = styled.section`
  padding: 30px 20px;
  background: #edededff;
  text-align: center;
  // font-family: "Inter", sans-serif;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 16px;
    color: #2e3a59;
    display: inline-block;
    position: relative;

    &::after {
      content: "";
      display: block;
      width: 60%;
      height: 4px;
      background: #A3210C;
      margin: 8px auto 0;
      border-radius: 2px;
    }
  }
    h3 {
      font-size: 1.3rem;
      margin-bottom: 12px;
      color: #444;
    }


  p {
    max-width: 700px;
    margin: 0 auto 50px;
    color: #555;
    font-size: 1rem;
  }

  .certs-grid {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: nowrap;
  }

  .cert-group {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
    padding: 30px 25px 40px;
    width: 100%;
    max-width: 360px;
    transition: all 0.3s ease;
    flex: 1;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.12);
    }

    h3 {
      font-size: 1.3rem;
      color: #1d3557;
      font-weight: 700;
      margin-bottom: 25px;
      position: relative;

      &::after {
        content: "";
        display: block;
        width: 50px;
        height: 3px;
        background: #A3210C;
        margin: 8px auto 0;
        border-radius: 2px;
      }
    }

    .cards {
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      gap: 20px;
    }
  }

  .cert-card {
    background: #fdfdfd;
    border-radius: 14px;
    padding: 20px 15px;
    width: 160px;
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    height: 170px;
    text-align: center;

    &:hover {
      transform: translateY(-6px) scale(1.03);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.12);
    }

    .badge {
      width: 60px;
      height: 60px;
      margin: 0 auto 12px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 50%;
      }
    }

    h4 {
      font-size: 0.95rem;
      font-weight: 600;
      color: #1d3557;
      margin-bottom: 4px;
    }

    span {
      font-size: 0.85rem;
      color: #777;
      display: block;
    }
  }

  @media (max-width: 950px) {
    .certs-grid {
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }

    .cert-group {
      max-width: 400px;
    }
  }
`;

const CertificationSection = () => {
  return (
    <CertWrapper>
      <h2>🎖️ Our Team's Expertise and Certifications</h2>
      <h3>
        Our strength lies in our certified expertise across core technology and
        industry practices.
      </h3>

      <div className="certs-grid">
        <div className="cert-group">
          <h3>Guidewire Certified</h3>
          <div className="cards">
            <div className="cert-card">
              <div className="badge">
                <img src={associate} alt="Guidewire" />
              </div>
              <h4>PC Configuration Developer</h4>
              <span>Guidewire expertise in PolicyCenter configuration.</span>
            </div>

            <div className="cert-card">
              <div className="badge">
                <img src={jutro} alt="Jutro" />
              </div>
              <h4>Jutro Developer</h4>
              <span>
                Certified for building dynamic and intuitive UI experiences.
              </span>
            </div>
          </div>
        </div>

        <div className="cert-group">
          <h3>Data & Analytics Certified</h3>
          <div className="cards">
            <div className="cert-card">
              <div className="badge">
                <img src={tableau} alt="Tableau" />
              </div>
              <h4>Tableau Data Analyst</h4>
              <span>Certified in data visualization and insights generation.</span>
            </div>

            <div className="cert-card">
              <div className="badge">
                <img src={databricks} alt="Databricks" />
              </div>
              <h4>Databricks Certified Analyst</h4>
              <span>Expert in data analysis and AI-driven insights.</span>
            </div>
          </div>
        </div>

        <div className="cert-group">
          <h3>Industry & Methodology Certified</h3>
          <div className="cards">
            <div className="cert-card">
              <div className="badge">
                <img src={AINS} alt="AINS" />
              </div>
              <h4>Associate in Insurance (AINS)</h4>
              <span>Comprehensive understanding of insurance principles.</span>
            </div>

            <div className="cert-card">
              <div className="badge">
                <img src={Scrum} alt="ScrumMaster" />
              </div>
              <h4>Certified ScrumMaster (CSM)</h4>
              <span>Proficiency in agile methodologies and delivery.</span>
            </div>
          </div>
        </div>
      </div>
    </CertWrapper>
  );
};

export default CertificationSection;

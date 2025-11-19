import React, { useState } from "react";
import styled from "styled-components";
import satya from "../Assets/satya.png";
import guru from "../Assets/guru.png";
import sravanthi from "../Assets/sravanthi.png";

const TeamWrapper = styled.section`
  padding: 30px 20px;
background:#fff;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 20px;
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
    }}

   h3{
    max-width: 1000px;
    margin: 0 auto 60px;
    color: #444;
    font-size: 1.3rem;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .team-card {
    background: #fff;
    border-radius: 20px;
    padding: 10px 20px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      transform: translateY(-10px) scale(1.03);
      box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 15px;
      // border : 4px solid #ff6b6b;
      // border: 4px solid #ffb400;
      //  border: 4px solid #2e3a59;
    }

    h4 {
      font-size: 1.3rem;
      font-weight: 600;
      color: #1d3557;
      margin-bottom: 6px;
    }

    span {
      font-size: 0.95rem;
      color: #777;
      margin-bottom: 12px;
      display: block;
    }

    p {
      font-size: 0.95rem;
      color: #555;
      line-height: 1.5;
      margin-bottom: 10px;
    }

    button {
      background: none;
      border: none;
      color: #2e3a59;
      font-weight: 600;
      cursor: pointer;
      font-size: 0.9rem;
      transition: color 0.3s ease;

      &:hover {
        color: #e09a00;
      }
    }
  }
`;

const TeamCard = ({ img, name, role, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="team-card">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <span>{role}</span>
      <p>
        {expanded
          ? description
          : description.split(". ").slice(0, 1).join(". ") + "..."}
      </p>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

const TeamSectionn = () => {
  return (
    <TeamWrapper>
      <h2> Meet our Awesome Team</h2>
      <h3>We would love the opportunity to discuss how our capabilities can helpachieve your business goals.</h3>

      <div className="team-grid">
        <TeamCard
          img={satya}
          name="Satya Sakhinetipalli"
          role="Founder and Chief Strategist"
          description="20+ Years of experience in P&C Insurance Core Transformation Programs as an Enterprise Architect. Previously served PwC, CSAA, Capgemini, NTT Data, and Satyam. GW ACE Certified."
        />
        <TeamCard
          img={guru}
          name="Guru Srinivas BMV"
          role="Chief Operations Officer"
          description="20+ Years of experience in Agile Project Management, Mechanical Engineering Design, and IT Operations. Previously served Cyient, CDG, and Tech Mahindra. Certified Scrum Master and Agile Practitioner."
        />
        {/* <TeamCard
          img={sravanthi}
          name="Sravanthi Kristipati"
          role="People Partner"
          description="10+ Years of experience in P&C Insurance and Aerospace domains at Infosys and EY. Holds an M.Tech in Thermal Power Engg and PGDM from Welingkar University. ISTQB Certified."
        /> */}
      </div>
    </TeamWrapper>
  );
};

export default TeamSectionn;



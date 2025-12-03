// import React from "react";
// import styled from "styled-components";
// import { FaShieldAlt, FaIndustry, FaLightbulb, FaGlobe, FaHandshake } from "react-icons/fa";

// const SpecialtyWrapper = styled.section`
//   background: #edededff;
//   padding: 70px 8%;
//   text-align: center;
//   color: #1f2937;
//   font-family: "Inter", sans-serif;

//   h2 {
//     font-size: 2.2rem;
//     font-weight: 800;
//     color: #2e3a59;
//     margin-bottom: 15px;

//     &::after {
//       content: "";
//       width: 120px;
//       height: 3px;
//       background: #a3210c;
//       display: block;
//       margin: 10px auto 0;
//       border-radius: 2px;
//     }
//   }

//   p {
//     font-size: 1.05rem;
//     line-height: 1.7;
//     color: #2e3a59;
//     max-width: 900px;
//     margin: 0 auto 40px;
//   }

//   .grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
//     gap: 10px;
//     margin-top: 30px;
//   }

//   .card {
//     background: #ffffff;
//     border-radius: 12px;
//     padding: 30px 20px;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
//     transition: all 0.3s ease;

//     &:hover {
//       transform: translateY(-5px);
//       box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
//     }

//     .icon {
//       font-size: 2rem;
//       color: #2e3a59;
//       margin-bottom: 12px;
//     }

//     h4 {
//       font-size: 1.15rem;
//       font-weight: 700;
//       color:#2e3a59;
//       margin-bottom: 8px;
//     }

//     p {
//       font-size: 0.95rem;
//       color: #555;
//       line-height: 1.5;
//     }
//   }
// `;

// const SpecialtyLines = () => {
//   return (
//     <SpecialtyWrapper>
//       <h2>Specialty Lines Insurance</h2>
//       <p>
//         <strong>Comprehensive Protection for Complex and Emerging Risks</strong>
//         <br />
//         Specialty Lines insurance addresses the sophisticated coverage needs of
//         businesses facing unique, complex, or high-severity risks that standard
//         commercial insurance policies cannot adequately cover. With rapidly
//         evolving business landscapes, emerging technologies, and increasingly
//         complex regulatory environments, specialty insurance has become
//         essential for organizations seeking comprehensive risk transfer
//         solutions.
//       </p>
//       <p>
//         Our specialty lines division combines deep industry expertise,
//         innovative coverage solutions, and relationships with premier specialty
//         carriers to deliver tailored protection for your most challenging
//         exposures.
//       </p>

//       <div className="grid">
//         <div className="card">
//           <FaShieldAlt className="icon" />
//           <h4>Tailored Risk Solutions</h4>
//           <p>
//             We design insurance programs specific to complex risks that don’t fit
//             standard policy structures.
//           </p>
//         </div>

//         <div className="card">
//           <FaIndustry className="icon" />
//           <h4>Sector Expertise</h4>
//           <p>
//             Deep understanding of specialized industries including energy,
//             cyber, marine, and professional liability.
//           </p>
//         </div>

//         <div className="card">
//           <FaLightbulb className="icon" />
//           <h4>Innovative Coverage</h4>
//           <p>
//             We stay ahead of market trends to offer emerging risk protections
//             aligned with new business models.
//           </p>
//         </div>

//         <div className="card">
//           <FaGlobe className="icon" />
//           <h4>Global Reach</h4>
//           <p>
//             Access to international specialty markets and carriers for complex
//             cross-border risk coverage.
//           </p>
//         </div>

//         <div className="card">
//           <FaHandshake className="icon" />
//           <h4>Collaborative Approach</h4>
//           <p>
//             We work closely with brokers and underwriters to craft the best
//             protection for your organization.
//           </p>
//         </div>
//       </div>
//     </SpecialtyWrapper>
//   );
// };

// export default SpecialtyLines;


import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaShieldAlt,
  FaIndustry,
  FaLightbulb,
  FaGlobe,
  FaHandshake,
} from "react-icons/fa";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ------------------ HERO SECTION ------------------ */
const HeroInfoSection = styled.section`
  background: linear-gradient(rgba(159, 158, 158, 1));
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

/* ------------------ SECTION WRAPPER ------------------ */
const SectionWrapper = styled.section`
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 20px;
`;

/* ------------------ TITLE ------------------ */
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

/* ------------------ CARD ROW ------------------ */
const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 40px;
`;

/* ------------------ CARD ------------------ */
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
        color: #A3210C;
        position: absolute;
        left: -14px;
        font-weight: bold;
      }
    }
  }
`;

/* ------------------ SPECIALTY LINES DATA ------------------ */
const specialtyData = [
  {
    icon: <FaShieldAlt />,
    title: "Tailored Risk Solutions",
    points: [
      "Custom solutions for non-standard and complex risks.",
      "Design programs for unique exposures not covered by standard lines.",
      "Provide high-severity / high-complexity risk coverage.",
      "Enhance risk transfer strategies for specialized industries.",
    ],
  },
  {
    icon: <FaIndustry />,
    title: "Industry-Specific Expertise",
    points: [
      "Deep coverage insights for marine, aviation, energy, and cyber.",
      "Support underwriting for niche markets.",
      "Enable better pricing accuracy for specialized sectors.",
      "Optimize policy structures for unique risk categories.",
    ],
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Coverage Structures",
    points: [
      "Introduce modern solutions for emerging risks.",
      "Design scalable and flexible policy structures.",
      "Customize endorsements and policy forms.",
      "Support rapid adaptation to new market demands.",
    ],
  },
  {
    icon: <FaGlobe />,
    title: "Global Risk Placement",
    points: [
      "Access international specialty carriers.",
      "Support cross-border compliance and coverage.",
      "Enable multinational risk programs.",
      "Facilitate complex global policy coordination.",
    ],
  },
  {
    icon: <FaHandshake />,
    title: "Collaborative Carrier Approach",
    points: [
      "Partner with brokers and underwriters effectively.",
      "Deliver optimized submissions for specialty markets.",
      "Strengthen relationships for better risk outcomes.",
      "Improve speed and quality of risk decisions.",
    ],
  },
];

/* ------------------ COMPONENT ------------------ */
const SpecialtyLines = () => {
  return (
    <>
      <HeroInfoSection>
        <h1>Specialty Lines Insurance</h1>
        <p>
          Comprehensive protection for complex, high-severity, or emerging risks
          that require advanced coverage beyond standard insurance lines.
        </p>
      </HeroInfoSection>

      <SectionWrapper>
        <Title>Our Expertise Areas</Title>

        <Row>
          {specialtyData.map((card, index) => (
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

export default SpecialtyLines;

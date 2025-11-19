// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { FaHome, FaCar, FaUserShield, FaUmbrella } from "react-icons/fa";

// const fadeInUp = keyframes`
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const HeroInfoSection = styled.section`
//   background: linear-gradient(rgba(159, 158, 158, 1));
//   color: #191818ff;
//   padding: 40px 20px 60px;
//   text-align: center;
//   margin-top: -140px;
//   border-radius: 0 0 40px 40px;
//   animation: ${fadeInUp} 0.8s ease forwards;

//   h1 {
//     font-size: 2.2rem;
//     font-weight: 700;
//     margin-top:120px;
//     margin-bottom: 12px;
//   }

//   p {
//     font-size: 1.05rem;
//     margin-bottom: 24px;
//     font-weight: 400;
//     max-width: 700px;
//     margin-left: auto;
//     margin-right: auto;
//     line-height: 1.6;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//     margin: 16px auto 0;
//     max-width: 600px;
//     text-align: left;
//   }

//   li {
//     font-size: 0.95rem;
//     color: #191818ff;
//     padding-left: 22px;
//     position: relative;
//     margin-bottom: 8px;
//   }

//   li::before {
//     content: "▹";
//     color: #191818ff;
//     font-weight: bold;
//     position: absolute;
//     left: 0;
//   }

//   a {
//     display: inline-block;
//     background: #fff;
//     color: #A3210C;
//     padding: 10px 24px;
//     border-radius: 8px;
//     font-weight: 600;
//     font-size: 0.9rem;
//     text-decoration: none;
//     transition: all 0.2s ease;
//     margin-top: 20px;
//     &:hover {
//       background: rgba(255,255,255,0.85);
//       transform: scale(1.03);
//     }
//   }
// `;

// const SectionWrapper = styled.section`
//   max-width: 1000px;
//   margin: 40px auto;
//   padding: 40px 20px;
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   font-weight: 800;
//   color: #2e3a59;
//   position: relative;
//   text-align: center; /* keep if you still want it centered */

//   &::after {
//     content: "";
//     width: 250px;
//     height: 4px;
//     background:#A3210C;
//     display: block;
//     margin: 8px auto 0;
//     border-radius: 2px;
//   }
// `;


// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
//   gap: 16px;
// `;

// const Card = styled.div`
//   background: #fff;
//   border-radius: 10px;
//   padding: 16px;
//   text-align: center;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
//   transition: all 0.2s ease-in-out;
//   cursor: pointer;
//   animation: ${fadeInUp} 0.5s forwards;
//   animation-delay: ${({ delay }) => delay}s;
//   opacity: 0;

//   &:hover {
//     transform: translateY(-4px) scale(1.02);
//     box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
//   }

//   svg {
//     color: #2e3a59;
//     font-size: 1.8rem;
//     margin-bottom: 8px;
//   }

//   h3 {
//     font-size: 1rem;
//     color:#2e3a59;
//     margin-bottom: 6px;
//     font-weight: 600;
//   }

//   p {
//     font-size: 0.85rem;
//     color: #475569;
//     line-height: 1.4;
//     margin-bottom: 8px;
//   }
// `;

// const cardData = [
//   { icon: <FaHome />, title: "Home Insurance", description: "Manage home policies, quotes, and claims easily." },
//   { icon: <FaCar />, title: "Auto Insurance", description: "Handle car policies quickly with smart automation." },
//   { icon: <FaUmbrella />, title: "Umbrella Coverage", description: "Extra protection for your policies effortlessly." },
//   { icon: <FaUserShield />, title: "Special Coverages", description: "Support for renters, travel, and more." },
// ];

// const PersonalLines = () => (
//   <>
//     <HeroInfoSection>
//       <h1>Personal Lines Insurance Solutions</h1>
//       <p>Protect individuals and families from everyday risks through tailored coverage plans.</p>
//       <ul>
//         <li><strong>Covers:</strong> Home, auto, renters, travel, and personal liability insurance.</li>
//         <li><strong>Purpose:</strong> Safeguard your personal property, income, and lifestyle from accidents, loss, or damage.</li>
//       </ul>
//       {/* <a href="#personal-lines">Explore More</a> */}
//     </HeroInfoSection>

//     <SectionWrapper id="personal-lines">
//       <Title>Personal Lines Made Simple</Title>
//       <Grid>
//         {cardData.map((card, index) => (
//           <Card key={index} delay={index * 0.1}>
//             {card.icon}
//             <h3>{card.title}</h3>
//             <p>{card.description}</p>
//           </Card>
//         ))}
//       </Grid>
//     </SectionWrapper>
//   </>
// );

// export default PersonalLines;

import React from "react";
import styled, { keyframes } from "styled-components";
import { FaHome, FaCar, FaUmbrella, FaUserShield } from "react-icons/fa";

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
  { icon: <FaHome />, title: "Home Insurance", description: "Manage home policies, quotes, and claims easily." },
  { icon: <FaCar />, title: "Auto Insurance", description: "Handle car policies quickly with smart automation." },
  { icon: <FaUmbrella />, title: "Umbrella Coverage", description: "Extra protection for your policies effortlessly." },
  { icon: <FaUserShield />, title: "Special Coverages", description: "Support for renters, travel, and more." },
];

const PersonalLines = () => (
  <>
    <HeroInfoSection>
      <h1>Personal Lines Insurance Solutions</h1>
      <p>
        Protect individuals and families from everyday risks through tailored coverage plans that ensure financial peace of mind.
      </p>
      <ul>
        <li><strong>Covers:</strong> Home, auto, renters, travel, and personal liability insurance.</li>
        <li><strong>Purpose:</strong> Safeguard your personal property, income, and lifestyle from accidents, loss, or damage.</li>
        <li><strong>Approach:</strong> Deliver seamless policy administration and personalized customer experiences.</li>
      </ul>
    </HeroInfoSection>

    <SectionWrapper id="personal-lines">
      <Title>Our Personal Lines Focus</Title>
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

export default PersonalLines;


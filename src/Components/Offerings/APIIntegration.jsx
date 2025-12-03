// import React from "react";
// import styled, { keyframes } from "styled-components";
// import heroImage from "../Assets/APIIntegration.png"; 
// import {
//   FaNetworkWired,
//   FaCogs,
//   FaLock,
//   FaChartLine,
//   FaHandsHelping,
//   FaSyncAlt,
//   FaServer,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(15px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const Wrapper = styled.div`
//   color: #1e293b;
//   background: #fff;
//   overflow-x: hidden;
//   margin-top: -130px;
//   font-family: "Poppins", "Inter", sans-serif;
// `;

// const HeroSection = styled.section`
//   position: relative;
//   width: 100%;
//   height: 50vh;
//   background: url(${heroImage}) center center / cover no-repeat, #0f172a;
//   color: #fff;
//   display: flex;
//   align-items: flex-end;
//   justify-content: flex-start;

//   &::after {
//     content: "";
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(
//       135deg,
//       rgba(15, 23, 42, 0.7),
//       rgba(30, 64, 175, 0.5)
//     );
//   }
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 1;
//   padding: 60px 5%;
//   max-width: 600px;
//   animation: ${fadeIn} 1s ease-out;

//   h1 {
//     font-size: 2.8rem;
//     font-weight: 800;
//     background: linear-gradient(90deg, #60a5fa, #f8fafc);
//     -webkit-background-clip: text;
//     color: transparent;
//     margin-bottom: 10px;
//   }

//   p {
//     font-size: 1.05rem;
//     opacity: 0.95;
//     line-height: 1.5;
//   }
// `;

// const Section = styled.section`
//   padding: 50px 6%;
//   max-width: 1300px;
//   margin: 0 auto;
//   text-align: center;
//   animation: ${fadeIn} 1s ease-out;

//   h2 {
//     font-size: 1.9rem;
//     font-weight: 700;
//     color:#2e3a59
//     margin-bottom: 14px;
//   }

//   h3 {
//     font-size: 1.4rem;
//     color: #2e3a59
//     font-weight: 600;
//     margin-bottom: 8px;
//   }

//   p {
//     color: #475569;
//     max-width: 850px;
//     margin: 0 auto 24px;
//     line-height: 1.6;
//     font-size: 0.95rem;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//     max-width: 750px;
//     margin: 0 auto;
//     text-align: left;

//     li {
//       position: relative;
//       padding-left: 18px;
//       margin-bottom: 8px;
//       color: #475569;
//       font-size: 0.95rem;
//       line-height: 1.5;
//       &::before {
//         content: "▹";
//         position: absolute;
//         left: 0;
//         color: #2563eb;
//         font-weight: bold;
//       }
//     }
//   }
// `;

// const CardGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//   gap: 16px;
//   margin-top: 24px;
// `;

// const Card = styled.div`
//   background: #fff;
//   border-radius: 10px;
//   border-top: 3px solid #2e3a59
//   box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
//   transition: all 0.3s ease;
//   padding: 20px 12px;
//   text-align: center;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 18px rgba(37, 99, 235, 0.15);
//   }

//   .icon {
//     margin-bottom: 10px;
//   }

//   h4 {
//     color: #2e3a59
//     font-size: 1rem;
//     font-weight: 700;
//     margin-bottom: 6px;
//   }

//   p {
//     font-size: 0.9rem;
//     color: #475569;
//     line-height: 1.5;
//   }
// `;

// const CTA = styled.section`
//   text-align: center;
//   background: linear-gradient(
//     135deg,
//     rgba(255, 165, 0, 1) 0%,
//     rgba(240, 103, 7, 1) 50%,
//     rgba(163, 33, 12, 1) 120%
//   );
//   color: #fff;
//   padding: 50px 20px;
//   border-radius: 20px 20px 0 0;
//   animation: ${fadeIn} 1s ease-out;

//   h2 {
//     font-size: 1.9rem;
//     font-weight: 800;
//     margin-bottom: 12px;
//   }

//   p {
//     max-width: 850px;
//     margin: 0 auto 20px;
//     font-size: 1rem;
//     opacity: 0.95;
//   }

//   button {
//     background: #fff;
//     color:#2e3a59
//     border: none;
//     padding: 12px 30px;
//     border-radius: 8px;
//     font-weight: 600;
//     font-size: 0.95rem;
//     transition: 0.3s;
//     cursor: pointer;
//     &:hover {
//       background: #e2e8f0;
//       transform: scale(1.04);
//     }
//   }
// `;

// const APIIntegration = () => {
//   const navigate = useNavigate();

//   return (
//     <Wrapper>
//       <HeroSection>
//         <HeroContent>
//           <h1>Insurance API Integration Services</h1>
//           <p>Connect. Automate. Accelerate.</p>
//         </HeroContent>
//       </HeroSection>

//       <Section>
//         <h3>Unlock Seamless Connectivity and Automation</h3>
//         <p>
//           Build a secure, scalable, and future-ready digital backbone for your
//           business. Our advanced API integration services simplify complex
//           insurance ecosystems, enabling real-time data flow and faster
//           innovation.
//         </p>
//       </Section>

//       <Section>
//         <h2>Why Choose Our Integration Services?</h2>
//         <CardGrid>
//           <Card>
//             <div className="icon">
//               <FaNetworkWired size={36} color="#2e3a59" />
//             </div>
//             <h4>Seamless Connectivity</h4>
//             <p>
//               Effortlessly connect systems, platforms, and third-party services.
//             </p>
//           </Card>
//           <Card>
//             <div className="icon">
//               <FaCogs size={36} color="#2e3a59" />
//             </div>
//             <h4>Automation at Scale</h4>
//             <p>
//               Eliminate manual work and achieve consistent operational accuracy.
//             </p>
//           </Card>
//           <Card>
//             <div className="icon">
//               <FaLock size={36} color="#2e3a59" />
//             </div>
//             <h4>Future-Ready Architecture</h4>
//             <p>Built for security, scalability, and high-speed performance.</p>
//           </Card>
//           <Card>
//             <div className="icon">
//               <FaHandsHelping size={36} color="#2e3a59" />
//             </div>
//             <h4>End-to-End Expertise</h4>
//             <p>From design to deployment, we ensure seamless delivery.</p>
//           </Card>
//         </CardGrid>
//       </Section>

//       <Section>
//         <h2>How We Deliver Value</h2>
//         <CardGrid>
//           <Card>
//             <div className="icon">
//               <FaChartLine size={36} color="#2e3a59" />
//             </div>
//             <h4>Consultation & Strategy</h4>
//             <p>
//               Analyze business needs, define integration goals, and plan
//               execution.
//             </p>
//           </Card>
//           <Card>
//             <div className="icon">
//               <FaServer size={36} color="#2e3a59" />
//             </div>
//             <h4>Architecture Design</h4>
//             <p>
//               Create a robust, scalable, and adaptable integration framework.
//             </p>
//           </Card>
//           <Card>
//             <div className="icon">
//               <FaLock size={36} color="#2e3a59" />
//             </div>
//             <h4>Secure Deployment</h4>
//             <p>Maintain compliance and protect sensitive insurance data.</p>
//           </Card>
//           <Card>
//             <div className="icon">
//               <FaSyncAlt size={36} color="#2e3a59" />
//             </div>
//             <h4>Ongoing Support</h4>
//             <p>
//               Continuous monitoring, optimization, and seamless version control.
//             </p>
//           </Card>
//         </CardGrid>
//       </Section>

//       <Section>
//         <h2>Business Benefits</h2>
//         <ul>
//           <li>Faster time-to-market for new insurance products</li>
//           <li>Reduced operational and integration costs</li>
//           <li>Enhanced real-time customer experience</li>
//           <li>Improved data accuracy and synchronization</li>
//         </ul>
//       </Section>

//       <CTA>
//         <h2>Transform Connectivity into Capability</h2>
//         <p>
//           Build an ecosystem that connects insurers, partners, and customers
//           securely and intelligently. Let’s redefine your digital integration
//           strategy.
//         </p>
//         <button onClick={() => navigate("/contactUs")}>Contact Us</button>
//       </CTA>
//     </Wrapper>
//   );
// };

// export default APIIntegration;


import React from "react";
import styled, { keyframes } from "styled-components";
import heroImage from "../Assets/APIIntegration.png"; 
import {
  FaNetworkWired,
  FaCogs,
  FaLock,
  FaChartLine,
  FaHandsHelping,
  FaSyncAlt,
  FaServer,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* --- Animations --- */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* --- Wrapper --- */
const Wrapper = styled.div`
  color: #1e293b;
  background: #fff;
  overflow-x: hidden;
  margin-top: -130px;
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 50vh;
  //  background: linear-gradient(
  //   rgba(255, 255, 255, 0.4),
  //   rgba(255, 255, 255, 0.4)
  // ),
  // background: url(${heroImage}) center center / contain no-repeat, #0f172a;



  background:
  linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.85) 0%,     /* bright whitish at top-left */
    rgba(255, 255, 255, 0.35) 20%,    /* smooth fade */
    rgba(80, 120, 255, 0.20) 55%,     /* soft blush blue tone */
    rgba(30, 60, 150, 0.25) 100%      /* deeper bluish */
  ),
  url(${heroImage}) center/cover no-repeat;






  background-size: cover;
  display: flex;
  align-items: flex-start;
  color: #fff;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(15,23,42,0.6), rgba(30,64,175,0.5));
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 140px 2% 0;
  max-width: 690px;
  animation: ${fadeIn} 1.1s ease-out;

  h1 {
    font-size: 3.5rem;
    font-weight: 850;
    font-family: "Outfit", sans-serif;
    display: flex;
    flex-wrap: wrap;
    transform: skew(-6deg);
    background: linear-gradient(90deg, #93c5fd, #ffffff);
    -webkit-background-clip: text;
    color: transparent;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.95;
    line-height: 1.6;
    margin-bottom: 24px;
  }
`;

/* --- Sections --- */
const Section = styled.section`
  padding: 30px 20px;
  max-width: 1350px;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #2e3a59;
    margin-bottom: 15px;

    &::after {
      content: "";
      width: 120px;
      height: 3px;
      background: #A3210C;
      display: block;
      margin: 8px auto 0;
      border-radius: 2px;
    }
  }

  h3 {
    color: #444;
    max-width: 950px;
    margin: 0 auto 25px;
    font-size: 1.5rem;
  }

  p {
    color: #475569;
    max-width: 850px;
    margin: 0 auto 20px;
    line-height: 1.6;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 10px auto 0;
    max-width: 800px;
    text-align: left;
    columns: 2;
    column-gap: 40px;

    li {
      position: relative;
      padding-left: 16px;
      margin-bottom: 6px;
      color: #000;
      font-size: 1rem;
      line-height: 1.4;

      &::before {
        content: "▹";
        position: absolute;
        left: 0;
        color: #2e3a59;
        font-weight: bold;
      }
    }
  }
`;

/* --- Card Grid (Matches your design exactly) --- */
const CardGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: nowrap;
  gap: 10px;
  margin-top: 20px;
  overflow-x: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }
`;

const Card = styled.div`
  flex: 1;
  min-width: 140px;
  background: #fff;
  border-radius: 10px;
  border-top: 3px solid #2e3a59;
  box-shadow: 0 3px 12px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(37,99,235,0.15);
  }

  .icon {
    text-align: center;
    padding-top: 16px;
  }

  div {
    padding: 12px 16px;
    h4 {
      color: #2e3a59;
      font-size: 1rem;
      margin-bottom: 4px;
      font-weight: 700;
      text-align: center;
    }
    p {
      font-size: 0.9rem;
      color: #475569;
      line-height: 1.5;
      text-align: center;
    }
  }
`;

/* --- CTA --- */
const CTA = styled.section`
  text-align: center;
  background: linear-gradient(
    135deg,
    rgba(255, 165, 0, 1) 0%,
    rgba(240, 103, 7, 1) 50%,
    rgba(163, 33, 12, 1) 120%
  );
  color: #fff;
  padding: 30px 20px;
  border-radius: 20px 20px 0 0;
  animation: ${fadeIn} 1s ease-out;

  h2 {
    font-size: 1.9rem;
    font-weight: 800;
    margin-bottom: 10px;
  }

  p {
    max-width: 700px;
    margin: 0 auto 20px;
    font-size: 1rem;
    opacity: 0.95;
  }

  button {
    background: #fff;
    color: #1e3a8a;
    border: none;
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
      background: #e2e8f0;
      transform: scale(1.04);
    }
  }
`;

const APIIntegration = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <HeroSection>
        <HeroContent>
          <h1>Insurance API Integration</h1>
          <p>Connect. Automate. Accelerate.</p>
        </HeroContent>
      </HeroSection>

      <Section>
        <h3>Unlock Seamless Connectivity and Automation</h3>
        <p>
          Build a secure, scalable, and future-ready digital backbone. Our advanced API
          integration modernizes insurance ecosystems, enabling real-time data flow and innovation.
        </p>
      </Section>

      <Section>
        <h2>Why Choose Our Integration Services?</h2>
        <CardGrid>
          <Card>
            <div className="icon"><FaNetworkWired size={40} color="#2e3a59" /></div>
            <div><h4>Seamless Connectivity</h4><p>Effortlessly connect systems and platforms.</p></div>
          </Card>

          <Card>
            <div className="icon"><FaCogs size={40} color="#2e3a59" /></div>
            <div><h4>Automation at Scale</h4><p>Achieve accuracy with workflow automation.</p></div>
          </Card>

          <Card>
            <div className="icon"><FaLock size={40} color="#2e3a59" /></div>
            <div><h4>Secure & Future-Ready</h4><p>Built for speed, scalability, and compliance.</p></div>
          </Card>

          <Card>
            <div className="icon"><FaHandsHelping size={40} color="#2e3a59" /></div>
            <div><h4>End-to-End Ownership</h4><p>From design to deployment and optimization.</p></div>
          </Card>
        </CardGrid>
      </Section>

      <Section>
        <h2>How We Deliver Value</h2>
        <CardGrid>
          <Card>
            <div className="icon"><FaChartLine size={40} color="#2e3a59" /></div>
            <div><h4>Consultation & Strategy</h4><p>Define goals, assess systems, and plan execution.</p></div>
          </Card>

          <Card>
            <div className="icon"><FaServer size={40} color="#2e3a59" /></div>
            <div><h4>Architecture Design</h4><p>Build scalable integration frameworks.</p></div>
          </Card>

          <Card>
            <div className="icon"><FaLock size={40} color="#2e3a59" /></div>
            <div><h4>Secure Deployment</h4><p>Ensure compliance and protect sensitive data.</p></div>
          </Card>

          <Card>
            <div className="icon"><FaSyncAlt size={40} color="#2e3a59" /></div>
            <div><h4>Ongoing Support</h4><p>Monitoring, performance tuning, and upgrades.</p></div>
          </Card>
        </CardGrid>
      </Section>

      <Section>
        <h2>Business Benefits</h2>
        <ul>
          <li>Faster time-to-market for insurance products</li>
          <li>Reduced operational & integration costs</li>
          <li>Enhanced real-time customer experience</li>
          <li>Improved data accuracy & synchronization</li>
        </ul>
      </Section>

      <CTA>
        <h2>Transform Connectivity into Capability</h2>
        <p>
          Build an ecosystem that connects insurers, partners, and customers securely and intelligently.
        </p>
        <button onClick={() => navigate("/contactUs")}>Contact Us</button>
      </CTA>
    </Wrapper>
  );
};

export default APIIntegration;


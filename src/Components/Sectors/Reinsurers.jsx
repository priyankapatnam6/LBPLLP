// import React from "react";
// import styled from "styled-components";
// import bgImage from "../Assets/bgImage.png";

// /* ---------- WRAPPER ---------- */
// const Wrapper = styled.section`
//   width: 100%;
//   color: #2c3e50;
//   background: #f4f7fa;
// `;

// /* ---------- HERO ---------- */
// const Hero = styled.div`
//   background: url(${bgImage}) center/cover no-repeat;
//   color: #fff;
//   text-align: center;
//   padding: 120px 20px;
//   position: relative;
//   overflow: hidden;

//   &::after {
//     content: "";
//     position: absolute;
//     inset: 0;
//     background: rgba(29, 53, 87, 0.7);
//     z-index: 0;
//   }

//   h1 {
//     font-size: 3rem;
//     font-weight: 700;
//     margin-bottom: 20px;
//     position: relative;
//     z-index: 1;
//   }

//   p {
//     max-width: 700px;
//     margin: 0 auto 30px;
//     font-size: 1.2rem;
//     line-height: 1.6;
//     position: relative;
//     z-index: 1;
//   }

//   button {
//     background: #ff6b6b;
//     color: #fff;
//     border: none;
//     padding: 14px 40px;
//     font-size: 1.1rem;
//     font-weight: 600;
//     border-radius: 30px;
//     cursor: pointer;
//     transition: all 0.3s;
//     position: relative;
//     z-index: 1;

//     &:hover {
//       background: #ff8787;
//       transform: scale(1.05);
//     }
//   }
// `;

// /* ---------- INTRO SECTION ---------- */
// const Intro = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 40px;
//   max-width: 1200px;
//   margin: 100px auto;
//   padding: 0 20px;
//   align-items: center;

//   .topImage {
//     width: 100%;
//     max-width: 700px;
//     border-radius: 20px;
//     box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
//     transition: transform 0.3s, box-shadow 0.3s;

//     &:hover {
//       transform: scale(1.02);
//       box-shadow: 0 20px 45px rgba(0, 0, 0, 0.1);
//     }
//   }

//   .text {
//     h2 {
//       font-size: 2rem;
//       color: #1d3557;
//       margin-bottom: 15px;
//       border-left: 5px solid #ff6b6b;
//       padding-left: 12px;
//     }

//     p {
//       font-size: 1rem;
//       color: #555;
//       line-height: 1.7;
//       margin-bottom: 15px;
//     }

//     ul {
//       margin: 15px 0 25px 20px;
//       font-size: 1rem;
//       line-height: 1.6;
//       color: #555;

//       li {
//         margin-bottom: 12px;
//         &:before {
//           content: "✓";
//           color: #ff6b6b;
//           margin-right: 8px;
//         }
//       }
//     }
//   }
// `;

// /* ---------- FEATURES SECTION ---------- */
// const Features = styled.section`
//   padding: 100px 20px;
//   text-align: center;

//   h2 {
//     font-size: 2.5rem;
//     color: #1d3557;
//     margin-bottom: 15px;
//   }

//   p {
//     max-width: 700px;
//     margin: 0 auto 60px;
//     color: #555;
//   }

//   .flex-container {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 40px;

//     .card {
//       background: linear-gradient(135deg, #ffffff, #f1f5f9);
//       border-radius: 25px;
//       padding: 35px 25px;
//       box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
//       flex: 1 1 250px;
//       max-width: 300px;
//       transition: all 0.3s;

//       &:hover {
//         transform: translateY(-10px) scale(1.03);
//       }

//       img {
//         width: 80px;
//         height: 80px;
//         margin-bottom: 20px;
//       }

//       h3 {
//         font-size: 1.3rem;
//         color: #1d3557;
//         margin-bottom: 12px;
//       }

//       p {
//         font-size: 1rem;
//         color: #555;
//         line-height: 1.6;
//       }
//     }
//   }
// `;

// /* ---------- PROCESS SECTION ---------- */
// const Process = styled.section`
//   background: #fff;
//   padding: 100px 20px;
//   text-align: center;

//   h2 {
//     font-size: 2.5rem;
//     color: #1d3557;
//     margin-bottom: 15px;
//   }

//   p {
//     max-width: 700px;
//     margin: 0 auto 60px;
//     color: #555;
//   }

//   .steps {
//     display: flex;
//     gap: 40px;
//     overflow-x: auto;
//     padding-bottom: 10px;

//     &::-webkit-scrollbar {
//       display: none;
//     }
//     -ms-overflow-style: none;
//     scrollbar-width: none;

//     .step-card {
//       flex: 0 0 260px;
//       background: #f4f7fa;
//       padding: 30px 25px;
//       border-radius: 20px;
//       box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
//       transition: all 0.3s;

//       &:hover {
//         transform: translateY(-10px) scale(1.02);
//       }

//       .number {
//         font-size: 2rem;
//         font-weight: 700;
//         color: #ff6b6b;
//         margin-bottom: 15px;
//       }

//       h4 {
//         font-size: 1.2rem;
//         color: #1d3557;
//         margin-bottom: 12px;
//       }

//       p {
//         font-size: 1rem;
//         color: #555;
//         line-height: 1.6;
//       }
//     }
//   }
// `;

// /* ---------- COMPONENT ---------- */
// const Reinsurers = () => {
//   return (
//     <Wrapper>
//       {/* HERO */}
//       <Hero>
//         <h1>Guidewire Solutions for Reinsurers</h1>
//         <p>
//           Streamline risk transfer, underwriting, and claims management for reinsurance companies with Guidewire’s advanced platform.
//         </p>
//         <button>Discover More</button>
//       </Hero>

//       {/* INTRO */}
//       <Intro>
//         <img src={bgImage} alt="Reinsurance Overview" className="topImage" />

//         <div className="text">
//           <h2>Why Reinsurers Choose Guidewire</h2>
//           <p>
//             Guidewire’s platform helps reinsurers optimize capital, manage risk exposure, and provide seamless services to primary insurers worldwide.
//           </p>
//           <h2>Comprehensive Risk Management</h2>
//           <p>
//             Automate treaty and facultative underwriting, track exposures, and enhance decision-making with integrated analytics.
//           </p>
//           <h2>Guidewire’s Approach</h2>
//           <ul>
//             <li>Flexible Architecture: Adaptable cloud platform to meet reinsurance needs globally.</li>
//             <li>Efficient Workflows: Automate treaty placement, approvals, and reporting.</li>
//             <li>Data Insights: Predictive analytics to manage portfolio risk and optimize capital.</li>
//             <li>Operational Efficiency: Reduce manual processes and improve accuracy.</li>
//             <li>Compliance Support: Maintain adherence to international reinsurance regulations.</li>
//           </ul>
//           <p>
//             With these capabilities, reinsurers can maximize operational efficiency, reduce risk, and provide better service to insurers and clients.
//           </p>
//         </div>
//       </Intro>

//       {/* FEATURES */}
//       <Features>
//         <h2>Reinsurer Highlights</h2>
//         <p>Key features that help reinsurers manage portfolios and risk transfer effectively.</p>
//         <div className="flex-container">
//           <div className="card">
//             <img src={bgImage} alt="Portfolio Management" />
//             <h3>Portfolio Management</h3>
//             <p>Monitor and optimize reinsurance portfolios with full visibility into risk exposures.</p>
//           </div>
//           <div className="card">
//             <img src={bgImage} alt="Risk Transfer" />
//             <h3>Risk Transfer</h3>
//             <p>Automate treaty and facultative placements for seamless risk transfer.</p>
//           </div>
//           <div className="card">
//             <img src={bgImage} alt="Claims Oversight" />
//             <h3>Claims Oversight</h3>
//             <p>Streamline claims processing across multiple insurers and treaties.</p>
//           </div>
//           <div className="card">
//             <img src={bgImage} alt="Analytics & Reporting" />
//             <h3>Analytics & Reporting</h3>
//             <p>Leverage data analytics for portfolio optimization and regulatory reporting.</p>
//           </div>
//         </div>
//       </Features>

//       {/* PROCESS */}
//       <Process>
//         <h2>How Reinsurer Workflow Works</h2>
//         <p>A structured process guiding risk assessment, underwriting, and claims management.</p>
//         <div className="steps">
//           <div className="step-card">
//             <div className="number">01</div>
//             <h4>Assess Risk</h4>
//             <p>Analyze portfolio exposures and identify suitable reinsurance treaties.</p>
//           </div>
//           <div className="step-card">
//             <div className="number">02</div>
//             <h4>Underwrite Treaty</h4>
//             <p>Configure and approve reinsurance agreements efficiently.</p>
//           </div>
//           <div className="step-card">
//             <div className="number">03</div>
//             <h4>Monitor Portfolio</h4>
//             <p>Track ongoing exposures and adjust terms for optimal risk management.</p>
//           </div>
//           <div className="step-card">
//             <div className="number">04</div>
//             <h4>Claims & Settlements</h4>
//             <p>Process claims and settlements accurately across treaties and clients.</p>
//           </div>
//         </div>
//       </Process>
//     </Wrapper>
//   );
// };

// export default Reinsurers;
import React from 'react'

const Reinsurers = () => {
  return (
    <div>Reinsurers</div>
  )
}

export default Reinsurers

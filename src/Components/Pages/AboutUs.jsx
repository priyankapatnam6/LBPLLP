import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaHandsHelping,
  FaBalanceScale,
  FaUsers,
  FaCertificate,
  FaRegSmile,
  FaLightbulb,
  FaLaptopCode,
  FaProjectDiagram,
} from "react-icons/fa";
import heroImage from "../Assets/AboutUs.png";
import teamImage from "../Assets/Abt.png";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  color: #333;
`;

const HeroSection = styled.section`
  height: 110vh;
  font-family: "Bank Gothic", sans-serif;
background: linear-gradient( to bottom, rgba(191, 212, 225, 0.25), rgba(135, 206, 250, 0)), url(${heroImage}) center/cover no-repeat;
  // background: linear-gradient(
  //     rgba(255, 255, 255, 0.4),
  //     rgba(255, 255, 255, 0.4)
  //   ),
  //   url(${heroImage}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 9%;
  position: relative;
  color: white;
  margin-top: -140px;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 700px;
  }

  .hero-content h1 {
    font-size: 3rem;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-wrap: wrap;
    max-width:580px;
    white-space: normal;
    margin-left: -90px;
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    height: 70vh;

    .hero-content h1 {
      font-size: 2rem;
      margin-left: 0;
    }
  }
`;

const VisionMission = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 6%;
  gap: 30px;
  background: #fff;

  .text {
    max-width: 1000px;
    width: 100%;

    h2 {
      font-size: 1.8rem;
      font-weight: 800;
      color: #2e3a59;
      text-align: center;
      margin-bottom: 10px;

      &::after {
        content: "";
        width: 120px;
        height: 3px;
        background: #a3210c;
        display: block;
        margin: 8px auto 0;
        border-radius: 2px;
      }
    }

    p {
      font-size: 1rem;
      line-height: 1.6;
      color: #555;
      margin-bottom: 15px;
      text-align: justify;
    }
  }
`;

const TeamStyled = styled.div`
  width: 1100px;
  border-radius: 16px;
  display: flex;
  margin-left: -30px;
  flex-direction: column;

  .team-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .team-text {
    flex: 1;
    color: #555;
    font-size: 1rem;
    line-height: 1.6;
  }

  .team-image {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .team-image img {
    width: 100%;
    height: 390px;
    max-width: 580px;
    border-radius: 10px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 20px;
  }

  .feature-card {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    background: #f0f3f8;
    padding: 16px 18px;
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      background: #e7ecf4;
      transform: translateY(-2px);
    }

    .icon {
      font-size: 1.5rem;
      padding: 10px;
      border-radius: 10px;
      background: #eaf1fa;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1d3557;
    }

    h4 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 700;
      color: #1d3557;
    }

    p {
      margin: 4px 0 0;
      color: #667085;
      font-size: 0.95rem;
      line-height: 1.4;
    }
  }

  @media (max-width: 900px) {
    .team-content {
      flex-direction: column;
      text-align: center;
    }

    .team-image img {
      max-width: 85%;
    }

    .feature-card {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

const ThriveSection = styled.section`
  text-align: center;
  padding: 30px 5%;
  background: #edededff;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #2e3a59;
    margin-bottom: 15px;

    &::after {
      content: "";
      width: 120px;
      height: 3px;
      background: #a3210c;
      display: block;
      margin: 8px auto 0;
      border-radius: 2px;
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #444;
  }

  p {
    max-width: 700px;
    margin: 0 auto 25px;
    color: #666;
    line-height: 1.6;
    font-size: 1rem;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
  }

  .value-card {
    background: #f6f9fc;
    border-radius: 10px;
    padding: 25px 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 14px rgba(0, 0, 0, 0.08);
    }

    .icon {
      font-size: 1.8rem;
      color: #1d3557;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 1.1rem;
      color: #1d3557;
      margin-bottom: 6px;
    }

    p {
      font-size: 0.9rem;
      color: #555;
      line-height: 1.4;
    }
  }
`;

const FinalSection = styled.section`
  background: linear-gradient(
    135deg,
    rgba(255, 165, 0, 1) 0%,
    rgba(240, 103, 7, 1) 50%,
    rgba(163, 33, 12, 1) 120%
  );
  color: white;
  text-align: center;
  padding: 60px 20px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  .content {
    position: relative;
    z-index: 1;
    max-width: 1000px;
    margin: 0 auto;

    h2 {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 15px;
    }

    p {
      font-size: 1.05rem;
      max-width: 750px;
      margin: 0 auto 30px;
      line-height: 1.6;
      color: #fdfdfd;
    }
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 18px;
    flex-wrap: wrap;
  }

  button {
    background: #fff;
    color: #1e3a8a;
    border: none;
    padding: 10px 26px;
    border-radius: 6px;
    font-weight: 600;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background: #f1f5f9;
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    padding: 50px 16px;

    .content h2 {
      font-size: 1.6rem;
    }

    button {
      padding: 10px 22px;
      font-size: 0.95rem;
    }
  }
`;

// ===== Framer Motion Variants for Animated H1 =====
const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const letterVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// ===== AboutUs Component =====
const AboutUs = () => {
  const navigate = useNavigate();
  const heroTitle = "Transforming Insurance Through Technology";

  return (
    <Wrapper>
      <HeroSection>
        <div className="hero-content">
          {/* <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
             style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}

          >
            {heroTitle.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}       style={{ fontFamily: "'Orbitron', sans-serif" }} 
>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1> */}

          
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}>
            {heroTitle.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {char === " " ? "\u00A0" : char}
              </motion.span>))}</motion.h1>
        </div>
      </HeroSection>

      <VisionMission>
        <div className="text">
          <h2>Our Vision</h2>
          <p>
            To be a preferred technology partner to Property and Casualty
            Insurance carriers by staying committed to embracing challenging
            opportunities, fostering innovation, and ensuring successful
            business outcomes.
          </p>

          <h2>Our Mission</h2>
          <p>
            To collaborate with Property and Casualty Insurance carriers across
            the globe in their mission to unlock value for their stakeholders
            through technological and domain expertise.
          </p>

          <h2>Our Team</h2>
          <TeamStyled>
            <div className="team-content">
              <div className="team-text">
                <p>
                  With deep expertise in property and casualty insurance and
                  advanced software engineering, we deliver digital solutions
                  that enable insurers to innovate, adapt, and lead in a
                  changing market.
                </p>

                <div className="features">
                  <div className="feature-card">
                    <div className="icon">
                      <FaLightbulb />
                    </div>
                    <div>
                      <h4>Industry Expertise</h4>
                      <p>
                        Deep knowledge of insurance operations and regulations.
                      </p>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="icon">
                      <FaLaptopCode />
                    </div>
                    <div>
                      <h4>Technical Excellence</h4>
                      <p>Cutting-edge development practices and technologies.</p>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="icon">
                      <FaProjectDiagram />
                    </div>
                    <div>
                      <h4>Agile Approach</h4>
                      <p>
                        Flexible methodologies that adapt to your unique needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-image">
                <img src={teamImage} alt="Our Team" />
              </div>
            </div>
          </TeamStyled>
        </div>
      </VisionMission>

      <ThriveSection>
        <h2>THRIVE – Our Core Values</h2>
        <h3>
          At LeftBrain Path LLP, our values are the guiding principles that
          shape our culture, actions, and every client relationship.
        </h3>

        <div className="values-grid">
          <div className="value-card">
            <FaCheckCircle className="icon" />
            <h3>Truthfulness</h3>
            <p>
              We prioritize honesty and transparency in all our dealings,
              ensuring clear and open communication with all our clients in
              India.
            </p>
          </div>
          <div className="value-card">
            <FaHandsHelping className="icon" />
            <h3>Honesty</h3>
            <p>
              We are committed to upholding the highest ethical standards in
              all situations, particularly in our partnerships across India.
            </p>
          </div>
          <div className="value-card">
            <FaUsers className="icon" />
            <h3>Respect</h3>
            <p>
              We treat everyone with dignity and foster an inclusive
              environment, promoting diversity in our operations in India.
            </p>
          </div>
          <div className="value-card">
            <FaBalanceScale className="icon" />
            <h3>Impartiality</h3>
            <p>
              We maintain fairness and impartiality in every decision,
              ensuring equal opportunities across all regions of India.
            </p>
          </div>
          <div className="value-card">
            <FaCertificate className="icon" />
            <h3>Validity</h3>
            <p>
              We strive for reliability and authenticity in our solutions,
              which have been trusted by Indian businesses for years.
            </p>
          </div>
          <div className="value-card">
            <FaRegSmile className="icon" />
            <h3>Endorsement</h3>
            <p>
              We value the contributions of others and celebrate success,
              working with partners across India to make an impact.
            </p>
          </div>
        </div>
      </ThriveSection>

      <FinalSection>
        <div className="content">
          <h2>Partner with Us to Shape the Future of Insurance</h2>
          <p>
            Let’s collaborate to transform challenges into opportunities
            through innovation and technology.
          </p>
        </div>
        <div className="button-group">
          <button
            className="primary-btn"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/contactUs");
            }}
          >
            Start a Conversation
          </button>
        </div>
      </FinalSection>
    </Wrapper>
  );
};

export default AboutUs;

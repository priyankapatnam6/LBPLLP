import React from "react";
import styled from "styled-components";
import {
  FaRocket,
  FaSyncAlt,
  FaHandshake,
  FaDollarSign,
  FaShieldAlt,
} from "react-icons/fa";

const Section = styled.section`
  padding: 40px 20px;
  background: #fff;
  text-align: center;
  // font-family: "Inter", sans-serif;
`;

const Header = styled.div`
  max-width: 1000px;
  margin: 0 auto 80px;
  text-align: center;
  position: relative;

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
      border-radius: 2px; }}
  h3{
   margin-top:-5px;
      font-size: 1.4rem;
      max-width:1000px;
      margin-bottom: 12px;
      color: #444;
        b {
      font-weight: 700;
      color: #F06707;
    }
  }
      h5 {
      font-size: 1.1rem;
      margin-bottom: 15px;
      font-style: italic;
      color: #666;
        b {
      font-weight: 700;
      color: #FFA500; }}
`;

const BenefitsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

const BenefitItem = styled.div`
  flex: 1 1 calc(16.66% - 20px);
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 40px;
    color: #2e3a59;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2e3a59;
  }

  p {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.4;
  }
`;

const BenefitsSection = () => {
  const benefits = [
    {
      title: "P&C Domain Expertise",
      desc:"Deep expertise in Property & Casualty insurance across U.S. and European markets, delivering dependable, high-quality solutions.",
      //  "Deep experience in Property & Casualty insurance for US and Europe markets, delivering reliable solutions.",
      icon: <FaShieldAlt />,
    },
    // {
     //   title: "Expert Team",
    //   desc: "Our team of professionals brings over 24 years of combined expertise in insurance technology and operations.",
    //   icon: <FaUsers />,
    // },
    {
      title: "Agility to Evolve",
      desc: "We cater to evolving customer needs through our proven delivery frameworks, helping businesses stay ahead of the curve.",
      icon: <FaSyncAlt />,
    },
    {
      title: "Faster Implementations",
      desc: "We accelerate business transformation through in-house and marketplace accelerators, ensuring seamless integration and efficiency.",
      icon: <FaRocket />,
    },
    {
      title: "Trust & Transparency",
      desc: "We believe in transparent communication and act as your trusted advisor, ensuring seamless partnerships.",
      icon: <FaHandshake />,
    },
    {
      title: "Cost Efficiency",
      desc: "We help businesses optimize costs year-over-year through intelligent automation and smart solutions.",
      icon: <FaDollarSign />,
    },
  ];

  return (
    <Section>
      <Header>
        <h2>Why Choose Us</h2>
        <h3>With over 24 years of professional <b>expertise</b> and <b> 3+ years</b> as an established organisation.</h3>
                <h5>Get a unique experience working with <b>LeftBrain Path LLP</b>. </h5>
      </Header>

      <BenefitsRow>
        {benefits.map((b, index) => (
          <BenefitItem key={index}>
            {b.icon}
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </BenefitItem>
        ))}
      </BenefitsRow>
    </Section>
  );
};

export default BenefitsSection;




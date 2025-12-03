
import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import image2 from "../Assets/HomeLatest.jpg";

const float = keyframes`
  0% { transform: translateY(0) translateX(0); opacity: 0.8; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
  100% { transform: translateY(0) translateX(0); opacity: 0.8; }`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family:'Bank Gothic, sans-serif' ;
  @media (max-width: 768px) {
    height: 80vh;}`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;`;

const Particle = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  animation: ${float} ${({ duration }) => duration}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;

  @media (max-width: 768px) {
    width: ${({ size }) => size * 0.7}px;
    height: ${({ size }) => size * 0.7}px;}`;


const TextWrapper = styled.div`
  position: absolute;
  top: 50%; 
  left: 2%;
  transform: translateY(-50%);
  text-align: left;
  color: #fff;
  max-width: 550px;

  h2 {
    max-width: 550px; 
    font-size: 3rem;
    font-weight: 700;
    text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
    display: flex; 
    flex-wrap: wrap;
    white-space: normal;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-top: 20px;
    opacity: 0.9;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1440px) {
    max-width: 950px;

    h2 {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 1024px) {
    left: 5%;
    max-width: 700px;

    h2 { font-size: 2.5rem; }
    p { font-size: 1.1rem; }
  }

  @media (max-width: 768px) {
    left: 5%;
    top: 40%;
    max-width: 90%;

    h2 { font-size: 2rem; line-height: 2.5rem; }
    p { font-size: 1rem; line-height: 1.5rem; }
  }

  @media (max-width: 480px) {
    top: 35%;

    h2 { font-size: 1.6rem; line-height: 2rem; }
    p { font-size: 0.9rem; line-height: 1.4rem; }}`;


const containerVariants = {hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },};

const letterVariants = {hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },};

const paragraphVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { delay: 1.5, duration: 1, ease: "easeOut" } },};

const AnimatedInfo = () => {
  const title = "Empowering Insurance Providers with Reliable Software Solutions";

  const particles = Array.from({ length: 15 }).map((_, i) => ({
    size: Math.random() * 6 + 4,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 5,}));

  return (
    <Section>
      <BackgroundImage src={image2} alt="Background" />
      {particles.map((p, index) => (
        <Particle
          key={index}
          size={p.size}
          top={p.top}
          left={p.left}
          duration={p.duration}
          delay={p.delay}/>))}
      <TextWrapper>
  
  {/* <motion.h2
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  style={{ fontFamily: "'Alegreya Sans', sans-serif"}}>
  {title.split("").map((char, index) => (
    <motion.span
      key={index}
      variants={letterVariants}
      style={{ fontFamily: "'Alegreya Sans', sans-serif" }} >
      {char === " " ? "\u00A0" : char}
    </motion.span>))}
</motion.h2> */}

{/* <motion.h2
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 800 }}>
  {title.split("").map((char, index) => (
    <motion.span
      key={index}
      variants={letterVariants}
      style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      {char === " " ? "\u00A0" : char}
    </motion.span>))}</motion.h2> */}

<motion.h2
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}>
  {title.split("").map((char, index) => (
    <motion.span
      key={index}
      variants={letterVariants}
      style={{ fontFamily: "'Playfair Display', serif" }}>
      {char === " " ? "\u00A0" : char}
    </motion.span>))}
</motion.h2>

        <motion.p variants={paragraphVariants} initial="hidden" animate="visible">
    

        </motion.p>
      </TextWrapper>
    </Section>
  );
};

export default AnimatedInfo;



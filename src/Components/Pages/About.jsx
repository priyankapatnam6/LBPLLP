import React from "react";
import styled from "styled-components";
import bgImage from "../Assets/priyanka.png";

const Section = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  background: #f9fafc;
  // font-family: "Inter", sans-serif;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

const TextContent = styled.div`
  flex: 1;
  min-width: 300px;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #222;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.8;
  }
`;

const ImageGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
   width: 100%;

  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const About = () => {
  return (
    <Section>
      <Container>
        <TextContent>
          <h2>About LeftBrain Path LLP</h2>
          <p>At <strong>LeftBrain Path LLP</strong>, we bring over two decades of deep expertise and strong understanding of the
            Property and Casualty (P&amp;C) Insurance sector. We specialize in offering innovative technology solutions to
            complex business problems leveraging Commercial-Off-The-Shelf (COTS) products like Guidewire, SmartCOMM, MuleSoft.
            We've built strong, lasting partnerships with P&amp;C insurance carriers across the US and UK, helping them
            modernize their core systems and navigate the complexities of the ever-evolving insurance landscape.</p></TextContent>

        <ImageGrid>
          <img src={bgImage} alt="Team at Work" />
          {/* <img src={bgImage} alt="Collaboration" />
          <img src={bgImage} alt="Discussion" /> */}
        </ImageGrid>
      </Container>
    </Section>
  );
};

export default About;

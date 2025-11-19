import React from "react";
import styled from "styled-components";
import bgImage from "../Assets/priyanka.png";

const Section = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  background: #fff;
  // font-family: "Inter", sans-serif;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #222;

  span {
    color: #f5b400; /* highlight color */
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const TextBox = styled.div`
  flex: 1;
  max-width: 300px;
  text-align: left;

  h3 {
    color: #f5b400;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #555;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const ImageBox = styled.div`
  flex: 1;
  max-width: 300px;
  text-align: center;

  img {
    width: 100%;
    max-width: 250px;
  }
`;

const Vision = () => {
  return (
    <Section>
      <Title>
        With over <span>24 years</span> of professional expertise and <span>2 years</span> as an established organisation
      </Title>
      <Subtitle>
        At LeftBrain Path LLP, we bring over 24 years of expertise, with 2 years as a company, helping businesses navigate an ever-evolving landscape.
      </Subtitle>

      <ContentWrapper>
        <TextBox>
          <h3>Our Vision</h3>
          <p>
            To be a preferred technology partner to Property and Casualty Insurance carriers by staying committed to embracing
            challenging opportunities, fostering innovation, and ensuring successful business outcomes.
          </p>
        </TextBox>

        <ImageBox>
          <img src={bgImage} alt="Target Vision" />
        </ImageBox>

        <TextBox>
          <h3>Our Mission</h3>
          <p>
            To collaborate with Property and Casualty Insurance carriers across the globe in their mission to unlock value for
            their stakeholders through innovation and domain expertise.
          </p>
        </TextBox>
      </ContentWrapper>
    </Section>
  );
};

export default Vision;

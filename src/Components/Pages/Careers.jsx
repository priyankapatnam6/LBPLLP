import React, { useState } from "react";
import styled from "styled-components";
import bgImage from "../Assets/bgImage.png";
import benefits from "../Assets/Benefits.jpg"
import career from "../Assets/career.jpg";
import proffdev from "../Assets/ProffesionalDevelopment.jpg"
import carrerOpp from "../Assets/CareerOpportunities.jpg"
// import career from "../Assets/Benefits.jpg"
import { FaTimes } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100%;
  color: #333;
  margin-top: -140px; 
  background-color: #f9fafc;`;

const Hero = styled.section`
  position: relative;
  color:white;
  padding: 120px 20px;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),  url(${career}) center/cover no-repeat;
  // background: url(${career}) center/cover no-repeat;
  border: 2px solid transparent;
  border-radius: 16px;
  background-clip: padding-box;
  overflow: hidden;
    // filter: contrast(150%) saturate(60%) brightness(110%) grayscale(10%);

  &::before {
    content: "";
    position: absolute;
    inset: -5px;
    background: linear-gradient(45deg, #ff00cc, #3333ff, #00ffcc);
    background-size: 300% 300%;
    animation: gradientMove 5s ease infinite;
    z-index: -1;
  }

  @keyframes gradientMove {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}}

  > * { position: relative;z-index: 1;}`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
`;

const HeroText = styled.p`
  font-size: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
`;

const WhyUs = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
      font-weight: 800;
      color: #2e3a59;
      margin-top:-30px;
      text-align: center;
      margin-bottom: 10px;

      &::after {
        content: "";
        width: 120px;
        height: 3px;
        background: #A3210C;
        display: block;
        margin: 8px auto 0;
        border-radius: 2px;
`;

const Cards = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  flex: 1 1 300px;
  background: #fff;
  padding: 25px 20px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  text-align: left;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-6px);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.25rem;
    color: #2e3a59;
    margin-bottom: 12px;
    font-weight: 600;
  }

  p {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.5;
  }
`;

const Jobs = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* smooth scrolling on iOS */
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
`;

const JobTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 12px;
  min-width: 600px; /* ensures horizontal scroll on small screens */
`;

const TableHeader = styled.th`
  background: #2e3a59;
  color: #fff;
  text-align: center;
  padding: 16px;
  font-size: 1rem;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #eee;

  &:hover {
    background-color: #f5f7ff;
  }
`;

const TableData = styled.td`
  padding: 16px;
  font-size: 0.95rem;
  color: #444;
  vertical-align: middle;
  text-align: center; `;

const ApplyButton = styled.button`
  background-color: #2e3a59;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #A3210C;
    transform: translateY(-2px);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  width: 500px;
  max-width: 90%;
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  background-color: #A3210C;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #A3210C;
  }
`;

const CTA = styled.section`
 background: linear-gradient(135deg,rgba(255, 165, 0, 1) 0%,
  rgba(240, 103, 7, 1) 50%,     rgba(163, 33, 12, 1) 120% ); color: white;
  text-align: center;
  padding: 50px 20px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
   backdrop-filter: blur(6px);
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 600;
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
`;

const CTAButton = styled.a`
  background-color:#2e3a59;
  color: #fff;
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color:#2e3a59;
    transform: translateY(-3px);
  }
`;

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    resume: null,
  });

  const jobs = [ { title: "Guidewire Developer (3-5 years)",
      description:"We are looking for an experienced Guidewire Developer to join our team.", },
    { title: "Guidewire Tech Lead (6+ years)",
      description:"Seeking a skilled Guidewire Tech Lead with leadership experience.",},
    { title: "SmartCOMM Developer (3-5 years)",
      description:"Join our team as a SmartCOMM Developer to build innovative solutions.",},
    {title: "SmartCOMM Tech Lead (6+ years)",
      description: "Looking for a SmartCOMM Tech Lead to lead innovative projects and teams.",},
    { title: "MuleSoft Developer (3-5 years)",
      description: "Seeking a MuleSoft Developer to work on cutting-edge integration projects.",},
    {title: "MuleSoft Tech Lead (6+ years)",
      description: "Join us as a MuleSoft Tech Lead to drive integration excellence.",},];

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setFormData({ name: "", email: "", message: "", resume: null });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("jobTitle", selectedJob);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    if (formData.resume) data.append("resume", formData.resume);

    fetch("/api/apply", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then(() => {
        alert("Application submitted successfully!");
        setSelectedJob(null);
      })
      .catch(() => alert("Error submitting application."));
  };

  return (
    <Wrapper>
      <Hero><HeroTitle>Shape the Future with Us</HeroTitle>
        <HeroText> At <strong>LeftBrain Path LLP</strong>, we’re not just building
          products—we’re building possibilities. Join a team where curiosity
          sparks innovation, collaboration fuels progress, and your ideas create
          real-world impact. Together, we’ll empower businesses, strengthen
          communities, and redefine what’s possible. </HeroText> </Hero>

      <WhyUs> <SectionHeading>Why Join Us?</SectionHeading>
        <h2> Transforming the insurance landscape with tomorrow’s technology. Comebuild it with us. </h2>
        <Cards><Card>
            <img src={proffdev} alt="Professional Development" />
            <h3>Professional Development</h3>
            <p>  We offer professional development and training in cutting-edge technologies, business domains, and leadership skills. </p>
          </Card> <Card>
            <img src={carrerOpp} alt="Career Opportunities" /> <h3>Career Opportunities</h3>
            <p> We are growing rapidly and providing ample opportunities for our employees to hone their skills and advance their careers. </p>
          </Card><Card> <img src={benefits} alt="Benefits" /> <h3>Benefits</h3>
            <p> Our employees enjoy healthcare coverage, certification reimbursement, and paid leave programs for a balanced lifestyle.</p>
          </Card></Cards></WhyUs>


      <Jobs> <SectionHeading>Open Positions</SectionHeading>
        <TableWrapper><JobTable>
            <thead><tr> <TableHeader>Job Title</TableHeader>
                <TableHeader>Description</TableHeader>
                <TableHeader>Action</TableHeader></tr> </thead>
            <tbody>{jobs.map((job, index) => (
                <TableRow key={index}>
                  <TableData>{job.title}</TableData>
                  <TableData>{job.description}</TableData>
                  <TableData><ApplyButton onClick={() => handleApplyClick(job.title)}> Apply Now </ApplyButton>
                  </TableData></TableRow>))}</tbody>
          </JobTable></TableWrapper></Jobs>


      {selectedJob && (<ModalOverlay><ModalContent>
            <CloseBtn onClick={() => setSelectedJob(null)}>✖</CloseBtn>
            <h2>Apply for {selectedJob}</h2>
            <Form onSubmit={handleSubmit}>
              <Input   type="text" name="name" placeholder="Your Name"
                value={formData.name} onChange={handleChange} required/>

              <Input type="email" name="email"  placeholder="Your Email"
                value={formData.email} onChange={handleChange} required/>

              <Textarea name="message" placeholder="Why are you a good fit?" value={formData.message} onChange={handleChange} />

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {!formData.resume && (<Input type="file" name="resume" accept=".pdf,.doc,.docx"onChange={handleChange}/> )}

                {formData.resume && ( <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",  background: "#f3f3f3", padding: "8px 12px", borderRadius: "6px", }}>
                    <span style={{ fontSize: "0.9rem", color: "#333" }}> {formData.resume.name}</span>
                    <FaTimes style={{ cursor: "pointer", color: "#e65b50" }}
                      onClick={() =>setFormData((prev) => ({ ...prev, resume: null }))}/> </div> )} </div>
              <SubmitButton type="submit">Submit Application</SubmitButton></Form></ModalContent></ModalOverlay>)}

      <CTA> <CTATitle>Didn’t find a suitable role?</CTATitle>
        <CTAText>We’re always on the lookout for passionate talent. Send us your resume and let’s connect!</CTAText>
        <CTAButton href="mailto:connect@leftbrainpath.com"> Send Resume</CTAButton> </CTA>
    </Wrapper>
  );
};

export default Careers;

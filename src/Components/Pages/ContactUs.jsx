
import React, { useState } from "react";
import styled from "styled-components";
import { FaUpload, FaTimes } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  // font-family: "Inter", sans-serif;
  color:  #2e3a59;
  background-color: #fff;
    margin-top: -30px;
  padding: 4rem 8%;
  min-height: 100vh;
`;

const Left = styled.div`
  flex: 1;
  min-width: 300px;
  margin-right: 4rem;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color:#2e3a59;
  }

  p {
    font-size: 23px;
    color: #555;
    font-weight:700px;
    margin-bottom: 1.5rem;
  }
`;

const Right = styled.form`
  flex: 1.2;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.label`
  position: absolute;
  top: ${(props) => (props.active ? "-10px" : "50%")};
  left: 12px;
  transform: translateY(${(props) => (props.active ? "0" : "-50%")});
  font-size: ${(props) => (props.active ? "0.8rem" : "1rem")};
  color: ${(props) => (props.active ? "#1a237e" : "#888")};
  background: white;
  padding: 0 4px;
  transition: 0.2s ease all;
  pointer-events: none;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:hover,
  &:focus {
    border-color: #1a237e;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;

  &:hover,
  &:focus {
    border-color: #1a237e;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  min-height: 120px;

  &:hover,
  &:focus {
    border-color: #2e3a59;
  }
`;

const SubmitBtn = styled.button`
  background:#2e3a59;
  color: #fff;
  padding: 0.9rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  width: 150px;

  &:hover {
    background: #0d1762;
  }
`;

const FileUpload = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    flex: 1;
  }

  svg {
    cursor: pointer;
    color: #1a237e;
  }
`;

const FilePreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f3f3f3;
  padding: 0.5rem 1rem;
  border-radius: 4px;
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    company: "",
    hearAboutUs: "",
    otherSource: "",
    opportunity: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, file: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formPayload.append(key, value);
      });

      const res = await fetch("http://localhost:8080/contactUs", {
        method: "POST",
        body: formPayload,
      });

      if (res.ok) {
        alert("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          countryCode: "",
          phone: "",
          company: "",
          hearAboutUs: "",
          otherSource: "",
          opportunity: "",
          file: null,
        });
      } else {
        const data = await res.json();
        alert("Error: " + (data.error || "Failed to send message"));
      }
    } catch (error) {
      alert("Server error: " + error.message);
    }
  };

  const countryCodes = [
    { code: "+1", country: "United States" },
    { code: "+44", country: "United Kingdom" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    { code: "+81", country: "Japan" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+65", country: "Singapore" },
    { code: "+971", country: "UAE" },
    { code: "+94", country: "Sri Lanka" },
  ];

  return (
    
    <Wrapper>
      <Left>
     
        {/* <h1>Got questions? Ideas? Feedback?</h1>
        <p>Reach out—we're all ears.</p> */}

        <h1>Let's Chat</h1>
        <p>No matter what you need, we're excited to hear from you.</p>
      </Left>

      <Right onSubmit={handleSubmit}>      {[
          { label: "Your name*", name: "name" },
          { label: "Email address*", name: "email" },
          { label: "Company", name: "company" },
        ].map((field, idx) => (
          <InputWrapper key={idx}>
            <Label active={!!formData[field.name]}>{field.label}</Label>
            <Input
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.label.includes("*")}
            />
          </InputWrapper>
        ))}

      
<Row>
  <InputWrapper style={{ flex: 1 }}>
    <Label active={!!formData.countryCode}>Country Code*</Label>
    <Select
      name="countryCode"
      value={formData.countryCode}
      onChange={handleChange}
      required
    >
      <option value="">Select</option>
      {countryCodes.map((c, i) => (
        <option key={i} value={c.code}>
          {`${c.country} (${c.code})`}
        </option>
      ))}
    </Select>
  </InputWrapper>

  <InputWrapper style={{ flex: 2 }}>
    <Label active={!!formData.phone}>Phone Number*</Label>
    <Input
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      required
    />
  </InputWrapper>
</Row>


        <InputWrapper style={{width:'655px'}}>
          <Label active={!!formData.hearAboutUs}>How did you hear about us?*</Label>
          <Select
            name="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Advertisement/Media Article">
              Advertisement/Media Article
            </option>
            <option value="Search Engine">Search Engine</option>
            <option value="Social Media">Social Media</option>
            <option value="Other">Other</option>
          </Select>
        </InputWrapper>

        {formData.hearAboutUs === "Other" && (
          <InputWrapper>
            <Label active={!!formData.otherSource}>Please specify*</Label>
            <Input
              name="otherSource"
              value={formData.otherSource}
              onChange={handleChange}
              required
            />
          </InputWrapper>
        )}

        <InputWrapper>
          <Label active={!!formData.opportunity}>
            Tell us about your opportunity*
          </Label>
          <TextArea
            name="opportunity"
            value={formData.opportunity}
            onChange={handleChange}
            required
          />
        </InputWrapper>

        {formData.file ? (
          <FilePreview>
            <span>{formData.file.name}</span>
            <FaTimes onClick={handleRemoveFile} title="Remove file" />
          </FilePreview>
        ) : (
          <FileUpload>
            <FaUpload />
            <input type="file" name="file" onChange={handleChange} />
          </FileUpload>
        )}

        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Right>

    </Wrapper>
  );
};

export default ContactUs;

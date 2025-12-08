import React from "react";
import { FaCogs, FaBug,FaFileAlt,FaExchangeAlt,FaBalanceScale,} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    { title: "Core P&C Solutions",
      description:"Optimize workflows,system integrations, and Cloud coding standards.",      icon: <FaCogs />,path:"/guidewireservices&solutions"},
    {title: "Quality Assurance",
      description:
        "Comprehensive testing services, including automation and performance testing.",
      icon: <FaBug />,path:"/quality-assurance"},
       {
      title: "Bureau & Proprietary Services",
      description:
        "Simplify bureau rules and integrate proprietary rate development for accurate and compliant rating solutions.",
      icon: <FaBalanceScale />,},
    {  title: "Customer Communication Management",
      description:
        "Enhance document generation with SmartCoMM® and OpenText® for business agility.",
      icon: <FaFileAlt />,path:"/ccmwithsmartcomm"},
    {title: "Integration & API Services",
      description:"Streamline API management and automation with MuleSoft AnyPoint® platform.",
      icon: <FaExchangeAlt />,
      path: "/mulesoftintegration",},];

  const styles = {
    section: {
      textAlign: "center",
      padding: "30px 20px",
      background:"#edededff",
      // background:" #f0f4f8",
      fontFamily: "Inter, sans-serif",
    },
    headingWrapper: {
      display: "inline-block",
      position: "relative",
      marginBottom: "25px",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "800",
      color: "#2e3a59",
      marginBottom: "10px",
    },
    underline: {
      width: "60%",
      height: "3px",
      backgroundColor: "#A3210C",
      margin: "8px auto 0",
      borderRadius: "2px",
    },
    
    subtitle: {
      color: "#444",
      fontSize: "1.3rem",
      marginTop:"-1px",
      marginBottom: "20px",
      maxWidth: "1000px",
      marginInline: "auto",
      lineHeight: "1.6",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "stretch",
      flexWrap: "nowrap",
      gap: "20px",
      width: "100%",
    },
    card: {
      background: "#f9fafb",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      padding: "20px 15px",
      flex: "1", 
      minWidth: "0", 
      textAlign: "center",  display: "flex",
  flexDirection: "column",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
    },
    icon: {
      fontSize: "2rem",
      color: "#1d3557",
      marginBottom: "12px",
    },
    title: {
      fontSize: "1rem",
      marginBottom: "6px",
      color: "#1d3557",
      fontWeight: "600",
    },
    text: {
      color: "#555",
      fontSize: "0.85rem",
      lineHeight: "1.4",
      marginBottom: "12px",
    },
    button: {
      backgroundColor: "#1d3557",
      color: "#fff",  marginTop: "auto", width: "100px",       
  alignSelf: "center", 
      border: "none",
      padding: "6px 12px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "0.85rem",
      transition: "background 0.3s ease",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.headingWrapper}>
        <h2 style={styles.heading}>Our Expert Services</h2>
        <div style={styles.underline}></div>
      </div>

      <h3 style={styles.subtitle}>
       
       We specialize in end-to-end solution delivery, comprehensive QA testing, and seamless system integrations to enable faster, more reliable, and scalable digital transformation.</h3>

      <div style={styles.row}>
        {services.map((service, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)"; }}>
            <div style={styles.icon}>{service.icon}</div>
            <h3 style={styles.title}>{service.title}</h3>
            <p style={styles.text}>{service.description}</p>
            <button style={styles.button} onClick={() => navigate(service.path)}
              onMouseOver={(e) =>(e.target.style.backgroundColor = "#ff6b6b") }
              onMouseOut={(e) => (e.target.style.backgroundColor = "#1d3557")}> Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;




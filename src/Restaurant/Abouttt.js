import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
    <div style={pageStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Our Story</h2>
        <p style={sectionTextStyle}>
          Welcome to <strong>Delight Bites</strong>, where flavor meets passion! Founded in 2020, we started as a small family-owned restaurant with a dream to bring the best culinary experiences to our community. Over the years, we've grown into a beloved destination for food lovers, offering a diverse menu that caters to all tastes.
        </p>
        <p style={sectionTextStyle}>
          Our journey has been fueled by a commitment to quality, authenticity, and innovation. Every dish we serve is crafted with love, using the freshest ingredients and traditional recipes passed down through generations.
        </p>
      </div>
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Our Mission</h2>
        <p style={sectionTextStyle}>
          At Delight Bites, our mission is simple: to create unforgettable dining experiences that bring people together. We believe that food is more than just nourishment—it's a way to connect, celebrate, and share joy.
        </p>
        <p style={sectionTextStyle}>
          We are committed to sustainability and giving back to our community. From sourcing local ingredients to supporting local farmers, we strive to make a positive impact on the world around us.
        </p>
      </div>
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Meet Our Team</h2>
        <div style={teamContainerStyle}>
          <div style={teamMemberStyle}>
            <img
              src="/venky3.jpeg" 
              alt="Chef Venky"
              style={teamImageStyle}
            />
            <h3 style={teamNameStyle}>Venky</h3>
            <p style={teamRoleStyle}>Head Chef</p>
          </div>
          <div style={teamMemberStyle}>
            <img
              src="/sudheer.jpeg" 
              alt="Manager Jane Smith"
              style={teamImageStyle}
            />
            <h3 style={teamNameStyle}>Sudheer</h3>
            <p style={teamRoleStyle}>Restaurant Manager</p>
          </div>
          <div style={teamMemberStyle}>
            <img
              src="/vinod1.jpeg" 
              alt="Baker Emily Brown"
              style={teamImageStyle}
            />
            <h3 style={teamNameStyle}>Vinod Kumar</h3>
            <p style={teamRoleStyle}>Restaurant Owner</p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};
const pageStyle = {
  textAlign: "center",
  background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
  padding: "20px",
  minHeight: "100vh",
};

const headingStyle = {
  fontSize: "48px",
  marginBottom: "30px",
  fontWeight: "bold",
  color: "#343a40",
  textTransform: "uppercase",
  letterSpacing: "2px",
  background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const sectionStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
  marginBottom: "30px",
  maxWidth: "800px",
  marginLeft: "auto",
  marginRight: "auto",
};

const sectionTitleStyle = {
  fontSize: "28px",
  color: "#007bff",
  marginBottom: "15px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const sectionTextStyle = {
  fontSize: "18px",
  color: "#555",
  lineHeight: "1.6",
  textAlign: "left",
};

const teamContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
};

const teamMemberStyle = {
  backgroundColor: "#f8f9fa",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  width: "200px",
  textAlign: "center",
};

const teamImageStyle = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  marginBottom: "10px",
  ObjectFit:"cover" ,
};

const teamNameStyle = {
  fontSize: "20px",
  color: "#333",
  marginBottom: "5px",
};

const teamRoleStyle = {
  fontSize: "16px",
  color: "#777",
};

export default About;
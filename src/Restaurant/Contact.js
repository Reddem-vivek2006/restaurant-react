import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
    <div style={pageStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      
      {/* ✅ Contact Info */}
      <div style={contactInfoStyle}>
        <p><strong>📍 Address:</strong> 123 Food Street, Kadapa</p>
        <p><strong>📞 Phone:</strong> +91 6301538381</p>
        <p><strong>📧 Email:</strong> contact@delightbites.com</p>
      </div>

      {/* ✅ Contact Form */}
      <h2 style={formHeadingStyle}>Send Us a Message</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          style={inputStyle}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          style={inputStyle}
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          style={textareaStyle}
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
      <h2 style={formHeadingStyle}>Business Hours</h2>
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Day</th>
              <th style={tableHeaderStyle}>Opening</th>
              <th style={tableHeaderStyle}>Closing</th>
            </tr>
          </thead>
          <tbody>
            {[
              { day: "Monday", opening: "10:00 AM", closing: "10:00 PM" },
              { day: "Tuesday", opening: "10:00 AM", closing: "10:00 PM" },
              { day: "Wednesday", opening: "10:00 AM", closing: "10:00 PM" },
              { day: "Thursday", opening: "10:00 AM", closing: "10:00 PM" },
              { day: "Friday", opening: "10:00 AM", closing: "11:00 PM" },
              { day: "Saturday", opening: "9:00 AM", closing: "11:00 PM" },
              { day: "Sunday", opening: "9:00 AM", closing: "10:00 PM" },
            ].map((row, index) => (
              <tr key={index} style={tableRowStyle}>
                <td style={tableCellStyle}>{row.day}</td>
                <td style={tableCellStyle}>{row.opening}</td>
                <td style={tableCellStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      <Footer />
    </div>
  );
};

// ✅ Styling (Stunning Design with Gradient Background)
const pageStyle = {
  textAlign: "center",
  background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)", // Gradient background
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

const contactInfoStyle = {
  fontSize: "20px",
  marginBottom: "30px",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "15px",
  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
  display: "inline-block",
  maxWidth: "600px",
  width: "90%",
};

const formHeadingStyle = {
  fontSize: "28px",
  marginTop: "30px",
  color: "#007bff",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
  width: "80%",
  maxWidth: "400px",
  margin: "auto",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "16px",
  outline: "none",
  transition: "border-color 0.3s ease",
  ":focus": {
    borderColor: "#007bff",
  },
};

const textareaStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "16px",
  outline: "none",
  transition: "border-color 0.3s ease",
  resize: "vertical",
  ":focus": {
    borderColor: "#007bff",
  },
};

const buttonStyle = {
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#007bff",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  ":hover": {
    backgroundColor: "#0056b3",
  },
};

const tableContainerStyle = {
  width: "80%",
  maxWidth: "600px",
  margin: "auto",
  marginBottom: "50px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
};

const tableHeaderStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "12px",
  fontSize: "18px",
  fontWeight: "bold",
};

const tableRowStyle = {
  backgroundColor: "#ffffff",
  ":nth-child(even)": {
    backgroundColor: "#f8f9fa",
  },
};

const tableCellStyle = {
  padding: "12px",
  fontSize: "16px",
  borderBottom: "1px solid #ddd",
};

export default Contact;

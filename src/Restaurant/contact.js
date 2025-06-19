import React, { useState } from "react";
import Footer from "../Footer";

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
    <div style={pageStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      
      {/* ✅ Contact Info */}
      <div style={contactInfoStyle}>
        <p><strong>📍 Address:</strong> 123 Food Street, Flavor Town</p>
        <p><strong>📞 Phone:</strong> +91 9876543210</p>
        <p><strong>📧 Email:</strong> contact@delightbites.com</p>
      </div>

      {/* ✅ Google Map */}
      <div style={mapContainerStyle}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d144.95565131531657!3d-37.81732397975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d476b0e3fcb%3A0x1ffac3ebecb06b8!2sDelight%20Bites!5e0!3m2!1sen!2sin!4v1619735223521!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          style={{ border: "none", borderRadius: "10px" }}
        ></iframe>
      </div>

      {/* ✅ Contact Form */}
      <h2 style={formHeadingStyle}>Send Us a Message</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>

      {/* ✅ Business Hours */}
      <h2 style={formHeadingStyle}>Business Hours</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Opening</th>
            <th>Closing</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Monday</td><td>10:00 AM</td><td>10:00 PM</td></tr>
          <tr><td>Tuesday</td><td>10:00 AM</td><td>10:00 PM</td></tr>
          <tr><td>Wednesday</td><td>10:00 AM</td><td>10:00 PM</td></tr>
          <tr><td>Thursday</td><td>10:00 AM</td><td>10:00 PM</td></tr>
          <tr><td>Friday</td><td>10:00 AM</td><td>11:00 PM</td></tr>
          <tr><td>Saturday</td><td>9:00 AM</td><td>11:00 PM</td></tr>
          <tr><td>Sunday</td><td>9:00 AM</td><td>10:00 PM</td></tr>
        </tbody>
      </table>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

// ✅ Styles
const pageStyle = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#f8f9fa",
};

const headingStyle = {
  fontSize: "28px",
  marginBottom: "10px",
};

const contactInfoStyle = {
  fontSize: "18px",
  marginBottom: "20px",
};

const mapContainerStyle = {
  width: "80%",
  margin: "auto",
  marginBottom: "30px",
};

const formHeadingStyle = {
  fontSize: "24px",
  marginTop: "20px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  width: "80%",
  maxWidth: "400px",
  margin: "auto",
};

const tableStyle = {
  width: "60%",
  margin: "auto",
  borderCollapse: "collapse",
  border: "1px solid black",
};

export default Contact;

import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle} >
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", maxWidth: "1200px", margin: "auto",height:"250px"}}>
        <div style={{ flex: "1", minWidth: "250px" ,marginTop: "30px"}}>
          <h4>About Us</h4>
          <p>
            Welcome to <strong>Delight Bites</strong>, where we serve fresh and flavorful dishes made with passion and love. Join us for an unforgettable dining experience!
          </p>
        </div>
        <div style={{ flex: "1", minWidth: "250px",marginTop:"30px" }}>
          <h4>Contact Us</h4>
          <p>📍 <strong>Address:</strong> 123 Food Street, kadapa</p>
          <p>📞 <strong>Phone:</strong> +91 9876543210</p>
          <p>📧 <strong>Email:</strong> contact@delightbites.com</p>
        </div>
        <div style={{ flex: "1", minWidth: "250px",marginTop:"30px" }}>
          <h4>Follow Us</h4>

          <p>
          

          <p>
  <a href="https://m.facebook.com/" style={{ color: "white", marginRight: "40px" }}>
    <i className="bi bi-facebook fs-4"></i>
  </a>
  <a href="https://www.instagram.com/_strive._.r_?utm_source=qr&igsh=MXhvcmo3azR2NnQwNw==" style={{ color: "white", marginRight: "40px" }}>
    <i className="bi bi-instagram fs-4"></i>
  </a>
  <a href="https://x.com/?lang=en" style={{ color: "white" }}>
    <i className="bi bi-twitter fs-4"></i>
  </a>
</p>


          </p>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "10px", borderTop: "1px solid #666" }}>
        <p>&copy; {new Date().getFullYear()} Delight Bites. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
const footerStyle = {
  backgroundColor: "#333",
  color: "white",
  textAlign: "center",
  marginTop :"auto",
};

const linkStyle = {
  color: "lightblue",
  textDecoration: "none",
  margin: "0 5px",
};

export default Footer;

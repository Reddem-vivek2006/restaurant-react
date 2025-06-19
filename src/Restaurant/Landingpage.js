import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Footer from "./Footer";

const LandingPage = () => {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState("");
  const fullText = "Welcome to Delight Bites";

  useEffect(() => {
    // Check if the typewriter effect has already been shown
    const typewriterShown = localStorage.getItem("typewriterShown");

    if (!typewriterShown) {
      let text = "";
      let index = 0;

      function typeWriterEffect() {
        if (index < fullText.length) {
          text += fullText[index];
          setDisplayText(text);
          index++;
          setTimeout(typeWriterEffect, 100); // Delay between characters
        } else {
          localStorage.setItem("typewriterShown", "true"); // Mark as shown in localStorage
        }
      }

      typeWriterEffect(); // Start typing effect
    } else {
      setDisplayText(fullText); // Show full text immediately if already run
    }
  }, []);

  return (
    <div>
    <div className="landing-container">
      <nav className="navbar">
        <h1 className="logo">Delight Bites</h1>
        <div className="nav-links">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/menu")}>Menu</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </nav>

      {/* Background Image and Content */}
      <div className="background-image">
        <h1 className="typewriter">{displayText}</h1>
        <button className="get-started" onClick={() => navigate("/home")}>
          Get Started
        </button>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default LandingPage;




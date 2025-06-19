import React from "react";
import Footer from "./Footer";

const Menu = () => {
  const menuItems = {
    "Non-Veg Rice Items": [
      { name: "Chicken Biryani", price: 180 },
      { name: "Chicken Dum Biryani", price: 250 },
      { name: "Chicken Fry Piece Biryani", price: 270 },
      { name: "Mutton Biryani", price: 320 },
      { name: "Mutton Fired Rice", price: 250 },
      { name: "Fish Biryani", price: 280 },
    ],
    "Veg Rice Items": [
      { name: "Veg Biryani", price: 140 },
      { name: "Paneer Biryani", price: 180 },
      { name: "Curd Rice", price: 90 },
      { name: "Veg Fried Rice", price: 150 },
    ],
    "Pizza": [
      { name: "Margherita Pizza", price: 250 },
      { name: "Pepperoni Pizza", price: 300 },
      { name: "Cheese Burst Pizza", price: 350 },
      { name: "Chicken Pizza", price: 320 },
      { name: "White Pizza", price: 290 },
      { name: "Hawaiian Pizza", price: 310 },
      { name: "Pesto Pizza", price: 280 },
    ],
    "Cold Drinks": [
      { name: "Coca Cola", price: 50 },
      { name: "Pepsi", price: 50 },
      { name: "Sprite", price: 50 },
      { name: "Red Bull", price: 120 },
      { name: "Fanta", price: 50 },
      { name: "Thums Up", price: 50 },
    ],
    "Hot Drinks": [
      { name: "Tea", price: 20 },
      { name: "Coffee", price: 40 },
      { name: "Green Tea", price: 35 },
      { name: "Black Tea", price: 30 },
      { name: "Hot Chocolate", price: 60 },
      { name: "Herbal Tea", price: 45 },
      { name: "Cappuccino", price: 55 },
    ],
  };

  return (
    <div>
    <div style={menuContainerStyle}>
      <h2 style={titleStyle}>Our Menu</h2>
      {Object.keys(menuItems).map((category) => (
        <div key={category} style={categoryStyle}>
          <h3 style={categoryTitleStyle}>{category}</h3>
          <ul style={itemListStyle}>
            {menuItems[category].map((item, index) => (
              <li key={index} style={itemStyle}>
                <span>{item.name}</span>
                <span style={priceStyle}>₹{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
      <Footer />
    </div>
  );
};

const menuContainerStyle = {
  backgroundColor: "#f8f9fa",
  minHeight: "100vh",
  textAlign: "center",
  padding: "20px",
};

const titleStyle = {
  fontSize: "48px",
  fontWeight: "bold",
  marginBottom: "30px",
  color: "#343a40",
  textTransform: "uppercase",
  letterSpacing: "2px",
  background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const categoryStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  marginBottom: "20px",
  borderRadius: "15px",
  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
  width: "70%",
  marginLeft: "auto",
  marginRight: "auto",
  transition: "transform 0.3s ease",
  ":hover": {
    transform: "scale(1.02)",
  },
};

const categoryTitleStyle = {
  fontSize: "28px",
  color: "#007bff",
  marginBottom: "15px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const itemListStyle = {
  listStyleType: "none",
  padding: "0",
};

const itemStyle = {
  fontSize: "20px",
  padding: "12px",
  color: "#495057",
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #dee2e6",
  transition: "background-color 0.3s ease",
  ":hover": {
    backgroundColor: "#f1f3f5",
  },
};

const priceStyle = {
  fontWeight: "bold",
  color: "#ff5722",
  fontSize: "22px",
};

export default Menu;

// import React from "react";

// const Header = ({ orderCount, navigate, orders }) => {
//   const handleOrderClick = () => {
//     if (orders.length > 0) {
//       navigate("/orders");
//     } else {
//       alert("No orders placed yet!");
//     }
//   };

//   return (
//     <nav className="navbar fixed-top" style={{ backgroundColor: "#333", color: "white", height:"60px", width: "100%", zIndex: 1000 ,marginBottom:"30px"}}>
//       <span className="navbar-brand" style={{color:"white",fontSize:"25px"}}>Restaurant</span>
//       <button className="order-button btn btn-warning" onClick={handleOrderClick}>
//         Orders 
//         <span className="order-count" style={{backgroundColor: "#007bff", color: "white", padding: "5px 10px", borderRadius: "50%", marginLeft: "8px", fontWeight: "bold"}}>{orderCount}</span>
//       </button>
//     </nav>
//   );
// };

// export default Header;
// import React from "react";
// import { Link } from "react-router-dom";
// const Header = ({ orderCount, navigate, orders, setSearchQuery, showSearch }) => {
//   const handleOrderClick = () => {
//     if (orders.length > 0) {
//       navigate("/orders");
//     } else {
//       alert("No orders placed yet!");
//     }
//   };

//   return (
//     <nav className="navbar fixed-top" style={{ backgroundColor: "#333", color: "white", height: "60px", width: "100%", zIndex: 1000, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px" }}>
      
//       <span className="navbar-brand" style={{ color: "white", fontSize: "25px" }}>Restaurant</span>
//       {showSearch && (
//         <input 
//           type="text" 
//           placeholder="Search for food..." 
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="form-control"
//           style={{ width: "400px", marginRight: "10px" }}
//         />
//       )}
      
//       <button className="order-button btn btn-warning" onClick={handleOrderClick}>
//         Orders 
//         <span className="order-count" style={{ backgroundColor: "#007bff", color: "white", padding: "5px 10px", borderRadius: "50%", marginLeft: "8px", fontWeight: "bold" }}>
//           {orderCount}
//         </span>
//       </button>
//     </nav>
//   );
// };
// const aboutUsStyle = {
//   color: "white", // ✅ White text color
//   textDecoration: "none", // ✅ Remove underline
//   fontFamily: "Georgia, serif", // ✅ Custom font
//   fontSize: "22px", // ✅ Bigger font size
//   fontWeight: "bold", // ✅ Make it stand out
//   marginRight: "10px", // ✅ Add spacing before Orders button
// };
// export default Header;


import React from "react";
import { Link } from "react-router-dom";

const Header = ({ orderCount, navigate, orders, setSearchQuery, showSearch }) => {
  const handleOrderClick = () => {
    if (orders.length > 0) {
      navigate("/orders");
    } else {
      alert("No orders placed yet!");
    }
  };

  return (
    <nav className="navbar fixed-top" style={{ 
      backgroundColor: "#1a1a2e", 
      color: "white", 
      height: "70px", 
      width: "100%", 
      zIndex: 1000, 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "0 30px",
      position: "fixed",
      top: 0,
      left: 0,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="navbar-brand" style={{ 
          color: "white", 
          fontSize: "28px", 
          fontWeight: "700",
          fontFamily: "'Playfair Display', serif",
          letterSpacing: "1px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
        }}>
          Delight Bites
        </span>
      </Link>
      
      {showSearch && (
        <input 
          type="text" 
          placeholder="Search for food..." 
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control"
          style={{ 
            width: "400px", 
            marginRight: "20px",
            borderRadius: "25px",
            border: "none",
            padding: "10px 20px",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
            backgroundColor: "rgba(255,255,255,0.9)"
          }}
        />
      )}
      
      <button 
        className="order-button btn" 
        onClick={handleOrderClick}
        style={{
          backgroundColor: "#ff9f1c",
          color: "#1a1a2e",
          padding: "10px 25px",
          borderRadius: "25px",
          border: "none",
          fontWeight: "600",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          position: "relative",
          overflow: "hidden"
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = "#ffbf69"}
        onMouseLeave={(e) => e.target.style.backgroundColor = "#ff9f1c"}
      >
        Orders 
        <span className="order-count" style={{ 
          backgroundColor: "#007bff", 
          color: "white", 
          padding: "3px 9px", 
          borderRadius: "50%", 
          marginLeft: "10px", 
          fontWeight: "bold",
          fontSize: "14px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.3)"
        }}>
          {orderCount}
        </span>
      </button>
    </nav>
  );
};

const aboutUsStyle = {
  color: "white",
  textDecoration: "none",
  fontFamily: "Georgia, serif",
  fontSize: "22px",
  fontWeight: "bold",
  marginRight: "10px",
};

export default Header;
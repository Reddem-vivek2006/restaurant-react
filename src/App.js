import React, { useState } from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Restaurant/Home";  
import Orders from "./Restaurant/Orders"; 
import LandingPage from "./Restaurant/Landingpage";
import Contact from "./Restaurant/Contact";
import Menu from "./Restaurant/Menu";
import AdminDashboard from "./Restaurant/AdminDashboard";
import About from "./Restaurant/Abouttt";
const App = () => {
  const [orders, setOrders] = useState([]); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home orders={orders} setOrders={setOrders} />} />
        <Route path="/orders" element={<Orders orders={orders} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<AdminDashboard />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;


import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [popularDishes, setPopularDishes] = useState([]);
  const [dailyVisitors, setDailyVisitors] = useState(0);

  useEffect(() => {
    // ✅ Load Orders from LocalStorage
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);

    // ✅ Calculate Total Sales
    const sales = storedOrders.reduce((sum, order) => sum + order.price, 0);
    setTotalSales(sales);

    // ✅ Count Popular Dishes
    const dishCount = {};
    storedOrders.forEach((order) => {
      dishCount[order.name] = (dishCount[order.name] || 0) + 1;
    });

    const popularData = Object.keys(dishCount).map((dish) => ({
      name: dish,
      orders: dishCount[dish],
    }));

    setPopularDishes(popularData);

    // ✅ Track Daily Visitors (Store Unique Visit)
    if (!localStorage.getItem("visited")) {
      localStorage.setItem("visited", "true");
      let visitorCount = parseInt(localStorage.getItem("dailyVisitors")) || 0;
      visitorCount += 1;
      localStorage.setItem("dailyVisitors", visitorCount);
    }

    setDailyVisitors(parseInt(localStorage.getItem("dailyVisitors")) || 0);
  }, []);

  return (
    <div style={dashboardStyle}>
      <h2 style={titleStyle}>📊 Admin Analytics Dashboard</h2>

      {/* ✅ Total Sales */}
      <div style={statsBox}>
        <h3>Total Sales: ₹{totalSales}</h3>
      </div>

      {/* ✅ Daily Visitors */}
      <div style={statsBox}>
        <h3>Daily Visitors: {dailyVisitors}</h3>
      </div>

      {/* ✅ Popular Dishes Bar Chart */}
      <h3 style={chartTitle}>Popular Dishes</h3>
      <ResponsiveContainer width="80%" height={300}>
        <BarChart data={popularDishes}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="orders" fill="#ff9800" />
        </BarChart>
      </ResponsiveContainer>

      {/* ✅ Sales Distribution Pie Chart */}
      <h3 style={chartTitle}>Sales Distribution</h3>
      <ResponsiveContainer width="50%" height={300}>
        <PieChart>
          <Pie
            data={popularDishes}
            dataKey="orders"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#ff9800"
            label
          >
            {popularDishes.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={["#ff5722", "#ff9800", "#ffcc00", "#4caf50", "#2196f3"][index % 5]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

// ✅ Styles
const dashboardStyle = {
  textAlign: "center",
  padding: "40px",
  backgroundColor: "#f8f9fa",
  minHeight: "100vh",
};

const titleStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const statsBox = {
  backgroundColor: "#fff",
  padding: "20px",
  margin: "10px auto",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  width: "300px",
};

const chartTitle = {
  fontSize: "20px",
  marginTop: "30px",
};

export default AdminDashboard;

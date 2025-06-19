import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Table from "./Table";
import Filter from "./Filter";
import Cart from "./Cart";
import Footer from "./Footer";

const Home = ({ orders, setOrders }) => {
  const [selectedFilter, setSelectedFilter] = useState("All Items");
  const [selectedTable, setSelectedTable] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const addOrder = (item) => {
    if (!selectedTable) {
      alert("Please select a table first!");
      return;
    }
    alert("Order placed successfully!");
    setOrders([...orders, { ...item, table: selectedTable }]);
  };

  return (
    <div style={{backgroundColor:"black"}}>
      <Header orderCount={orders.length} navigate={navigate} orders={orders} setSearchQuery={setSearchQuery} showSearch={true} />
      <Table setSelectedTable={setSelectedTable} />
      <Filter setSelectedFilter={setSelectedFilter} />
      <Cart selectedFilter={selectedFilter} addOrder={addOrder} searchQuery={searchQuery}  />
      <Footer />
    </div>
  );
};

export default Home;

// import React, { useState } from "react";
// import Table from "./Table";
// import Filter from "./Filter";
// import Cart from "./Cart";
// import Header from "./Header";

// const Home = () => {
//   const [selectedFilter, setSelectedFilter] = useState("All Items");
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <div>
//       <Header setSearchQuery={setSearchQuery} /> {/* ✅ Pass search function to Header */}
//       <div style={{ marginTop: "80px", padding: "20px" }}> 
//         <Table />
//         <Filter setSelectedFilter={setSelectedFilter} />
//         <Cart selectedFilter={selectedFilter} searchQuery={searchQuery} />
//       </div>
//     </div>
//   );
// };

// export default Home;





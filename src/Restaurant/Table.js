import React, { useState } from "react";
import './Table.css'
const Table = ({ setSelectedTable }) => {
  const numbers = Array.from({ length: 16 }, (_, i) => i + 1);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleTableSelect = (num) => {
    setSelectedNumber(num);
    setSelectedTable(num);
  };

  return (
    <center style={{marginTop:"70px"}}>
      <h4 style={{ marginBottom: "10px",color:"white" }}>Please Select Your Table Number:</h4>
      {numbers.map((num) => (
        <button
          key={num}
          className={`btn m-2 ${selectedNumber === num ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => handleTableSelect(num)}
        >
          {num}
        </button>
      ))}
    </center>
  );
};

export default Table;



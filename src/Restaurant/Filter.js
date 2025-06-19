import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Filter = ({ setSelectedFilter }) => {
  const products = ["All Items", "Rice Items", "Cold Drinks", "Pizza", "Hot Drinks"];

  return (
    <div className="text-center mt-3">
      <span className="h4 m-2" style={{color:"white"}}>Filter :</span>
      <select
        name="filter"
        className="p-2 rounded border"
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        {products.map((item, index) => (
          <option value={item} key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;



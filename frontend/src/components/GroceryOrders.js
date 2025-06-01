import React, { useState } from "react";

const GroceryOrders = () => {
  const [groceries, setGroceries] = useState([]);
  const [item, setItem] = useState("");

  const addGrocery = () => {
    if (item) {
      setGroceries([...groceries, item]);
      setItem("");
    }
  };

  return (
    <div>
      <h2>Grocery Orders</h2>
      <input
        type="text"
        placeholder="Enter Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addGrocery}>Add</button>
      <ul>
        {groceries.map((grocery, index) => (
          <li key={index}>{grocery}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryOrders;

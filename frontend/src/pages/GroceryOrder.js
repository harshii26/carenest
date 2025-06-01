import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles.css";

const GroceryOrder = () => {
  const [groceries, setGroceries] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("https://carenest-grcr.onrender.com/api/groceries")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Groceries:", data);
        setGroceries(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const addGrocery = async () => {
    if (!name || !quantity || !date || !time) {
      alert("All fields are required!");
      return;
    }

    const newItem = { name, quantity, date, time, status: "Pending" };

    try {
      const res = await fetch("https://carenest-grcr.onrender.com/api/groceries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (!res.ok) throw new Error("Failed to add grocery item");

      const savedItem = await res.json();
      setGroceries([...groceries, savedItem]);
      setName("");
      setQuantity("");
      setDate("");
      setTime("");
    } catch (error) {
      console.error("Error adding grocery:", error);
    }
  };

  const updateStatus = async (id, newStatus) => {
    await fetch(`https://carenest-grcr.onrender.com/api/groceries/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });

    setGroceries(groceries.map((g) => (g._id === id ? { ...g, status: newStatus } : g)));
  };

  const deleteGrocery = async (id) => {
    await fetch(`https://carenest-grcr.onrender.com/api/groceries/${id}`, { method: "DELETE" });
    setGroceries(groceries.filter((g) => g._id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="grocery-order">
        <h2>Grocery Order Tracker</h2>

        <div className="grocery-form">
          <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          <button onClick={addGrocery}>Add Item</button>
        </div>

        <h3>Grocery List</h3>
        <ul className="grocery-list">
          {groceries.map((g) => (
            <li key={g._id}>
              <strong>{g.name}</strong> ({g.quantity}) <br />
              <span>{g.date} at {g.time}</span> <br />
              Status: <strong>{g.status}</strong>
              <div className="grocery-actions">
                <button className="complete-btn" onClick={() => updateStatus(g._id, "Completed")}>
                  Mark as Completed
                </button>
                <button className="delete-btn" onClick={() => deleteGrocery(g._id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GroceryOrder;

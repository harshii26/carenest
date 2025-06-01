const express = require("express");
const router = express.Router();
const Grocery = require("../models/Grocery");

// Get all grocery orders
router.get("/", async (req, res) => {
  try {
    const groceries = await Grocery.find();
    res.json(groceries);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add a new grocery order
router.post("/", async (req, res) => {
  console.log("Received Data:", req.body); // Debugging log

  const { name, quantity, status, date, time } = req.body;
  if (!name || !quantity || !date || !time) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newGrocery = new Grocery({ name, quantity, status: status || "Pending", date, time });
    const savedGrocery = await newGrocery.save();
    res.status(201).json(savedGrocery);
  } catch (error) {
    console.error("Error saving grocery:", error);
    res.status(500).json({ error: "Failed to add grocery item" });
  }
});
module.exports=router;
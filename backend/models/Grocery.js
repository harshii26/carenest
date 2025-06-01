const mongoose = require("mongoose");

const GrocerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
  status: { type: String, default: "Pending" },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model("Grocery", GrocerySchema);
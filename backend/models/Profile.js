const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  role: { type: String, enum: ["family", "volunteer", "elderly"], required: true },
  name: String,
  age: Number,
  bio: String,
  address: String,
  phone: String,
  profilePicture: String,
});

module.exports = mongoose.model("Profile", profileSchema);

const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  name: String,
  dosage: String,
  frequency: String,
  timing: [String],
  startDate: Date,
  endDate: Date,
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Medication', medicationSchema);

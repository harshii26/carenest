const mongoose = require('mongoose');

// Schema definition for EmergencySettings
const EmergencySettingsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, enum: ['elderly', 'family', 'volunteer'], required: true },
  contacts: [{ name: String, phone: String, email: String }],
  notifyBySMS: { type: Boolean, default: true },
  notifyByEmail: { type: Boolean, default: true },
  shareLocation: { type: Boolean, default: false }
});

module.exports = mongoose.model('EmergencySettings', EmergencySettingsSchema);

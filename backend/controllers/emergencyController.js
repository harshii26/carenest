const EmergencySettings = require('../models/EmergencySetting');

// Get emergency settings
exports.getEmergencySettings = async (req, res) => {
  try {
    // Get the emergency settings for the logged-in user
    const settings = await EmergencySettings.findOne({ userId: req.user._id });

    if (!settings) {
      return res.status(404).json({ error: 'Settings not found' });
    }

    res.json(settings);  // Return the settings to the user
  } catch (err) {
    console.error(err);  // Log error for debugging
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
};

// Update emergency settings
exports.updateEmergencySettings = async (req, res) => {
  try {
    // Find and update the emergency settings for the logged-in user
    const updated = await EmergencySettings.findOneAndUpdate(
      { userId: req.user._id },
      { ...req.body, userId: req.user._id, role: req.user.role },  // Ensure role and userId are updated
      { new: true, upsert: true }  // Create if settings do not exist
    );

    res.json(updated);  // Return the updated settings
  } catch (err) {
    console.error(err);  // Log error for debugging
    res.status(500).json({ error: 'Failed to update settings' });
  }
};

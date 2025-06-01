const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');  // Middleware for protecting routes
const { getEmergencySettings, updateEmergencySettings } = require('../controllers/emergencyController');

// Route for getting emergency settings
router.get('/', protect, getEmergencySettings);

// Route for updating emergency settings
router.put('/', protect, updateEmergencySettings);

module.exports = router;

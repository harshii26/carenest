const express = require('express');
const router = express.Router();
const Medication = require('../models/Medication');

// @route   GET /api/medications
router.get('/', async (req, res) => {
  try {
    const meds = await Medication.find();
    res.json(meds);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   POST /api/medications
router.post('/', async (req, res) => {
  try {
    const newMed = new Medication(req.body);
    await newMed.save();
    res.json(newMed);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save medication' });
  }
});

// @route   DELETE /api/medications/:id
router.delete('/:id', async (req, res) => {
  try {
    await Medication.findByIdAndDelete(req.params.id);
    res.json({ message: 'Medication deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete medication' });
  }
});

module.exports = router;

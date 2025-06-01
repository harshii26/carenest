const Medication = require('../models/Medication');

exports.getMedications = async (req, res) => {
  try {
    const meds = await Medication.find();
    res.json(meds);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addMedication = async (req, res) => {
  const { name, dosage, time, status } = req.body;
  try {
    const med = new Medication({ name, dosage, time, status });
    await med.save();
    res.status(201).json(med);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteMedication = async (req, res) => {
  try {
    await Medication.findByIdAndDelete(req.params.id);
    res.json({ message: 'Medication deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

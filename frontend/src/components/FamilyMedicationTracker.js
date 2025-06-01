import React, { useEffect, useState } from 'react';
import '../styles.css';

const FamilyMedicationTracker = () => {
  const [medications, setMedications] = useState([]);
  const [form, setForm] = useState({
    name: '',
    dosage: '',
    frequency: '',
    timing: '',
    startDate: '',
    endDate: '',
    notes: ''
  });
  const [editId, setEditId] = useState(null);

  const fetchMeds = async () => {
    const res = await fetch('http://localhost:5000/api/medications');
    const data = await res.json();
    setMedications(data);
  };

  useEffect(() => {
    fetchMeds();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const url = editId
      ? `http://localhost:5000/api/medications/${editId}`
      : 'http://localhost:5000/api/medications';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        timing: form.timing.split(',').map(t => t.trim())
      })
    });

    setForm({ name: '', dosage: '', frequency: '', timing: '', startDate: '', endDate: '', notes: '' });
    setEditId(null);
    fetchMeds();
  };

  const handleEdit = med => {
    setForm({
      name: med.name,
      dosage: med.dosage,
      frequency: med.frequency,
      timing: med.timing.join(', '),
      startDate: med.startDate?.slice(0, 10),
      endDate: med.endDate?.slice(0, 10),
    });
    setEditId(med._id);
  };

  const handleDelete = async id => {
    if (window.confirm('Are you sure you want to delete this medication?')) {
      await fetch(`http://localhost:5000/api/medications/${id}`, {
        method: 'DELETE'
      });
      fetchMeds();
    }
  };

  return (
    <div className="medication-tracker">
      <h2>Medication Tracker</h2>
      <form className="med-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Medication Name" value={form.name} onChange={handleChange} required />
        <input name="dosage" placeholder="Dosage (e.g., 10mg)" value={form.dosage} onChange={handleChange} required />
        <input name="frequency" placeholder="Frequency (e.g., once daily)" value={form.frequency} onChange={handleChange} />
        <input name="timing" placeholder="Timings (e.g., 8AM, 2PM)" value={form.timing} onChange={handleChange} />
        <input type="date" name="startDate" value={form.startDate} onChange={handleChange} />
        <input type="date" name="endDate" value={form.endDate} onChange={handleChange} />
        {/* <textarea name="notes" placeholder="Notes (optional)" value={form.notes} onChange={handleChange} /> */}
        <button type="submit">{editId ? 'Update Medication' : 'Add Medication'}</button>
      </form>

      <div className="med-list">
        {medications.map(med => (
          <div className="med-card" key={med._id}>
            <h3>{med.name}</h3>
            <p><strong>Dosage:</strong> {med.dosage}</p>
            <p><strong>Frequency:</strong> {med.frequency}</p>
            <p><strong>Timing:</strong> {med.timing.join(', ')}</p>
            <p><strong>Start:</strong> {med.startDate?.slice(0, 10)} | <strong>End:</strong> {med.endDate?.slice(0, 10)}</p>
            <p><strong>Notes:</strong> {med.notes || '—'}</p>
            <div className="med-actions">
              <button onClick={() => handleEdit(med)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(med._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyMedicationTracker;

import React, { useState, useEffect } from 'react';
import '../styles.css';
import axios from 'axios';

const VolunteerEmergencySettings = () => {
  const [settings, setSettings] = useState({ contacts: [], notifyBySMS: true, notifyByEmail: true });

  useEffect(() => {
    axios.get('/api/emergency').then(res => setSettings(res.data));
  }, []);

  const handleSave = () => {
    axios.put('/api/emergency', settings);
  };

  const handleAddContact = () => {
    setSettings({
      ...settings,
      contacts: [...settings.contacts, { name: '', phone: '', email: '' }]
    });
  };

  return (
    <div className="settings-container">
      <h2>Emergency Contact Settings</h2>
      {settings.contacts.map((contact, index) => (
        <div key={index}>
          <input
            placeholder="Name"
            value={contact.name}
            onChange={e => {
              const contacts = [...settings.contacts];
              contacts[index].name = e.target.value;
              setSettings({ ...settings, contacts });
            }}
          />
          <input
            placeholder="Phone"
            value={contact.phone}
            onChange={e => {
              const contacts = [...settings.contacts];
              contacts[index].phone = e.target.value;
              setSettings({ ...settings, contacts });
            }}
          />
          <input
            placeholder="Email"
            value={contact.email}
            onChange={e => {
              const contacts = [...settings.contacts];
              contacts[index].email = e.target.value;
              setSettings({ ...settings, contacts });
            }}
          />
        </div>
      ))}
      <button onClick={handleAddContact}>Add Contact</button>
      <label>
        Notify by SMS:
        <input
          type="checkbox"
          checked={settings.notifyBySMS}
          onChange={e => setSettings({ ...settings, notifyBySMS: e.target.checked })}
        />
      </label>
      <label>
        Notify by Email:
        <input
          type="checkbox"
          checked={settings.notifyByEmail}
          onChange={e => setSettings({ ...settings, notifyByEmail: e.target.checked })}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default VolunteerEmergencySettings;

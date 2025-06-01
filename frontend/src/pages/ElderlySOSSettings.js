import React, { useState, useEffect } from 'react';
import '../styles.css';
import axios from 'axios';

const ElderlySOSSettings = () => {
  const [settings, setSettings] = useState({
    shareLocation: false,
    contacts: [],
  });

  useEffect(() => {
    axios.get('/api/emergency').then(res => setSettings(res.data));
  }, []);

  const handleSave = () => {
    axios.put('/api/emergency', settings);
  };

  return (
    <div className="settings-container">
      <h2>SOS Settings</h2>
      <label>
        Share Location:
        <input
          type="checkbox"
          checked={settings.shareLocation}
          onChange={e => setSettings({ ...settings, shareLocation: e.target.checked })}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ElderlySOSSettings;

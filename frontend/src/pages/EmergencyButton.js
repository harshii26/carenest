import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles.css';

const EmergencyButton = () => {
  const [confirm, setConfirm] = useState(false);
  const [alertSent, setAlertSent] = useState(false);

  const handleSOS = async () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const data = {
        message: '🚨 I need help! Please come quickly.',
        location: { latitude, longitude }
      };

      try {
        const res = await fetch('/api/emergency/alert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          setAlertSent(true);
        } else {
          alert('Failed to send alert');
        }
      } catch (error) {
        console.error('Emergency alert error:', error);
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="sos-container">
        <h2 className="sos-title">Emergency SOS</h2>
        {!alertSent ? (
          <>
            <button className="sos-button" onClick={() => setConfirm(true)}>
              🚨 Send Emergency Alert
            </button>
            {confirm && (
              <div className="sos-confirm-modal">
                <p>Are you sure you want to send an emergency alert?</p>
                <div className="sos-confirm-buttons">
                  <button onClick={handleSOS}>Yes</button>
                  <button onClick={() => setConfirm(false)}>No</button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="sos-sent-message">✅ Emergency alert sent successfully!</div>
        )}
      </div>
    </>
  );
};

export default EmergencyButton;

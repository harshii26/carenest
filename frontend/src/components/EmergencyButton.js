import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css'; // Import your CSS file for styling

const EmergencyButton = () => {
  const [isSending, setIsSending] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const handleEmergencyClick = () => {
    setConfirmation(true);
  };

  const sendEmergencyAlert = async () => {
    setIsSending(true);
    try {
      const position = await new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );
      const { latitude, longitude } = position.coords;

      await axios.post('/api/emergency-alerts', {
        location: { latitude, longitude },
        message: 'I need help! Please come quickly.',
      });

      alert('Emergency alert sent successfully!');
    } catch (error) {
      console.error('Error sending emergency alert:', error);
      alert('Failed to send emergency alert.');
    } finally {
      setIsSending(false);
      setConfirmation(false);
    }
  };

  return (
    <div className="emergency-button-container">
      <button
        className="emergency-button"
        onClick={handleEmergencyClick}
        disabled={isSending}
      >
        🚨 Emergency SOS
      </button>

      {confirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to send an emergency alert?</p>
          <button onClick={sendEmergencyAlert} disabled={isSending}>
            Yes
          </button>
          <button onClick={() => setConfirmation(false)} disabled={isSending}>
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default EmergencyButton;

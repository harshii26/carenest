import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css';

const EmergencyAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await axios.get('/api/emergency-alerts');
        setAlerts(response.data);
      } catch (error) {
        console.error('Error fetching emergency alerts:', error);
      }
    };

    fetchAlerts();
  }, []);

  return (
    <div className="emergency-alerts-container">
      <h2>Emergency Alerts</h2>
      <ul>
        {alerts.map((alert) => (
          <li key={alert._id}>
            <p><strong>User:</strong> {alert.user?.name || 'Unknown'}</p>
            <p><strong>Message:</strong> {alert.message}</p>
            <p><strong>Time:</strong> {new Date(alert.timestamp).toLocaleString()}</p>
            <p>
              <strong>Location:</strong>{' '}
              <a
                href={`https://www.google.com/maps?q=${alert.location.latitude},${alert.location.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Map
              </a>
            </p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyAlerts;

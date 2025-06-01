

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles.css';

const ElderlyDashboard = () => {
  const navigate = useNavigate();

  const cards = [
    { title: 'Task Overview', path: '/elderly/tasks' },
    { title: 'Medication Tracker', path: '/elderly/medications' },
    { title: 'Grocery Requests', path: '/elderly/groceries' },
    { title: 'Emergency SOS', path: '/elderly/sos-settings' },
    // { title: 'Health Log', path: '/elderly/healthlog' },
    // { title: 'Community Forum', path: '/elderly/forum' },
    // { title: 'Voice Command', path: '/elderly/voice' },
    // { title: 'Check-In History', path: '/elderly/checkins' }
  ];

  return (
    <>
      <Navbar />
      <div className="family-dashboard">
        <div className="dashboard-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className="dashboard-box"
              onClick={() => navigate(card.path)}
            >
              {card.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ElderlyDashboard;

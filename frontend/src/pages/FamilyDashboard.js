import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import Navbar from '../components/Navbar';

const FamilyDashboard = () => {
  const navigate = useNavigate();

  const components = [
    { title: 'Task Manager', route: '/taskpage' }, // ✅ Fixed route
    { title: 'Medication Tracker', route: '/medication-tracker' },
    { title: 'Grocery Orders', route: '/grocery-order' },
    { title: 'Emergency Alerts', route: '/family/emergency-settings' },
    // { title: 'Chat', route: '/chat' },
    // { title: 'Volunteer Manager', route: '/volunteer-manager' },
    // { title: 'Health Overview', route: '/health-overview' },
    // { title: 'Rating System', route: '/rating-system' }
  ];

  return (
    <div className="family-dashboard">
      <Navbar />
      <div className="dashboard-grid">
        {components.map((comp, index) => (
          <div key={index} className="dashboard-box" onClick={() => navigate(comp.route)}>
            {comp.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyDashboard;

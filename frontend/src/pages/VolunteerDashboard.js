import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import Navbar from '../components/Navbar';

const VolunteerDashboard = () => {
  const navigate = useNavigate();

  const components = [
    { title: 'Available Tasks', route: '/task-board' },
    { title: 'Task Status', route: '/task-status' },
    { title: 'Profile Management', route: '/volunteer-profile' },
    { title: 'Emergency Notifications', route: '/volunteer-emergency' },
    { title: 'Chat', route: '/volunteer-chat' },
    { title: 'Location Matcher', route: '/location-matcher' },
    { title: 'Volunteer Rating', route: '/volunteer-rating' }
  ];

  return (
    <div className="volunteer-dashboard">
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

export default VolunteerDashboard;

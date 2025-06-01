import React from 'react';
import '../styles.css'; // or './About.css'
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1>About CareNest</h1>
        <p>
          CareNest is a compassionate care platform designed to connect elderly individuals with their families and volunteers for daily assistance, wellness, and emergency needs.
        </p>
        <h2>Our Mission</h2>
        <p>
          To foster a safe, connected, and supportive environment for seniors by simplifying care coordination and empowering their independence.
        </p>
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-card"><span>Real-time Task Management</span></div>
          <div className="feature-card"><span>Medication Tracking</span></div>
          <div className="feature-card"><span>Emergency Alerts</span></div>
          <div className="feature-card"><span>Volunteer Matching</span></div>
          <div className="feature-card"><span>Secure Chat & Support</span></div>
        </div>
        <div className="thank-you">Thank you for being part of the CareNest family 💖</div>
      </div>
    </>
  );
};

export default About;

import React from 'react';
import '../styles.css';

const SOSButton = ({ onClick }) => (
  <button className="sos-button" onClick={onClick}>
    🚨 SOS
  </button>
);

export default SOSButton;

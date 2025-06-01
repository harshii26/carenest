// // src/components/EmergencyAlerts.js
// import React, { useState, useEffect } from 'react';
// //import { getEmergencyAlerts } from '../services/api';

// function EmergencyAlerts() {
//   const [alerts, setAlerts] = useState([]);

//   useEffect(() => {
//     fetchAlerts();
//   }, []);

//   const fetchAlerts = async () => {
//     const data = await getEmergencyAlerts();
//     setAlerts(data);
//   };

//   return (
//     <div className="card">
//       <h3>Emergency Alerts</h3>
//       <ul>
//         {alerts.map((alert) => (
//           <li key={alert._id}>
//             <strong>{alert.type}</strong>: {alert.message} ({new Date(alert.timestamp).toLocaleString()})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default EmergencyAlerts;

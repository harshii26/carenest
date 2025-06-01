// // src/components/HealthOverview.js
// import React, { useState, useEffect } from 'react';
// //import { getHealthMetrics } from '../services/api';

// function HealthOverview() {
//   const [metrics, setMetrics] = useState([]);

//   useEffect(() => {
//     fetchMetrics();
//   }, []);

//   const fetchMetrics = async () => {
//     const data = await getHealthMetrics();
//     setMetrics(data);
//   };

//   return (
//     <div className="card">
//       <h3>Health Overview</h3>
//       <ul>
//         {metrics.map((metric) => (
//           <li key={metric._id}>
//             {metric.type}: {metric.value} {metric.unit} ({new Date(metric.timestamp).toLocaleString()})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default HealthOverview;

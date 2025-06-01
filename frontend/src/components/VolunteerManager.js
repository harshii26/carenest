// // src/components/VolunteerManager.js
// import React, { useState, useEffect } from 'react';
// //import { getVolunteers, assignVolunteer } from '../services/api';

// function VolunteerManager() {
//   const [volunteers, setVolunteers] = useState([]);

//   useEffect(() => {
//     fetchVolunteers();
//   }, []);

//   const fetchVolunteers = async () => {
//     const data = await getVolunteers();
//     setVolunteers(data);
//   };

//   const handleAssign = async (id) => {
//     await assignVolunteer(id);
//     fetchVolunteers();
//   };

//   return (
//     <div className="card">
//       <h3>Volunteer Manager</h3>
//       <ul>
//         {volunteers.map((volunteer) => (
//           <li key={volunteer._id}>
//             {volunteer.name} - {volunteer.status}
//             {volunteer.status === 'available' && (
//               <button onClick={() => handleAssign(volunteer._id)}>Assign</button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default VolunteerManager;

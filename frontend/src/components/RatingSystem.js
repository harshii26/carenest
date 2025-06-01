// // src/components/RatingSystem.js
// import React, { useState, useEffect } from 'react';
// //import { getVolunteers, rateVolunteer } from '../services/api';

// function RatingSystem() {
//   const [volunteers, setVolunteers] = useState([]);
//   const [ratings, setRatings] = useState({});

//   useEffect(() => {
//     fetchVolunteers();
//   }, []);

//   const fetchVolunteers = async () => {
//     const data = await getVolunteers();
//     setVolunteers(data);
//   };

//   const handleRate = async (id) => {
//     const rating = ratings[id];
//     if (rating) {
//       await rateVolunteer(id, { rating });
//       setRatings({ ...ratings, [id]: '' });
//       fetchVolunteers();
//     }
//   };

//   return (
//     <div className="card">
//       <h3>Rating System</h3>
//       <ul>
//         {volunteers.map((volunteer) => (
//           <li key={volunteer._id}>
//             {volunteer.name}
//             <input
//               type="number"
//               min="1"
//               max="5"
//               value={ratings[volunteer._id] || ''}
//               onChange={(e) => setRatings({ ...ratings, [volunteer._id]: e.target.value })}
//             />
//             <button onClick={() => handleRate(volunteer._id)}>Rate</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default RatingSystem;

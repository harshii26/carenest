import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ElderlyDashboard from "./pages/ElderlyDashboard";
import FamilyDashboard from "./pages/FamilyDashboard";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import TaskPage from "./pages/TaskOverview"; // ✅ Added this line
import MedicationTrackerPage from './pages/MedicationTrackerPage';
import ChatPage from './pages/ChatPage'; // ✅ Added this line
// import EmergencyButton from './components/EmergencyButton';  
import About from './pages/About';
//import ProfilePage from './pages/ProfilePage';
import TaskOverview from './pages/TaskOverview'; // ✅ Added this line
import ElderlyTaskOverview from './pages/ElderlyTaskOverview';
import GroceryOrder from "./pages/GroceryOrder";
import ElderlySOSSettings from "./pages/ElderlySOSSettings";
import FamilyEmergencySettings from "./pages/FamilyEmergencySettings";
import VolunteerEmergencySettings from "./pages/VolunteerEmergencySettings";
// import FamilyProfile from "./pages/FamilyProfile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/elderly-dashboard" element={<ElderlyDashboard />} />
        <Route path="/family-dashboard" element={<FamilyDashboard />} />
        <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
        <Route path="/taskpage" element={<TaskPage />} /> {/* ✅ Correct route */}
        <Route path="/medication-tracker" element={<MedicationTrackerPage />} />
        <Route path="/chat" element={<ChatPage />} /> {/* ✅ Correct route */}
        {/* <Route path="/elderly/emergency" element={<EmergencyButton />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        {/* <Route path="/family-profile" element={<FamilyProfile />} /> */}
        <Route path="/elderly/task-overview" element={<TaskOverview />} />
        <Route path="/elderly/tasks" element={<ElderlyTaskOverview elderlyId={"661fa4e57a3bcd1be0ea1132"} />} />
        <Route path="/grocery-order" element={<GroceryOrder />} />
        <Route path="/elderly/sos-settings" element={<ElderlySOSSettings />} />
        <Route path="/family/emergency-settings" element={<FamilyEmergencySettings />} />
        <Route path="/volunteer/emergency-settings" element={<VolunteerEmergencySettings />} />

      
      </Routes>
    </Router>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Import pages
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ElderlyDashboard from "./pages/ElderlyDashboard";
// import FamilyDashboard from "./pages/FamilyDashboard";
// import VolunteerDashboard from "./pages/VolunteerDashboard";
// import TaskOverview from './pages/TaskOverview'; // ✅ Added this line
// import MedicationTrackerPage from './pages/MedicationTrackerPage';
// import ChatPage from './pages/ChatPage'; // ✅ Added this line
// import EmergencyButton from './components/EmergencyButton';  
// import About from './pages/About';
// import ProfilePage from './pages/ProfilePage';
// import ElderlyTaskOverview from './pages/ElderlyTaskOverview'; // ✅ Added this line

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Dashboard routes */}
//         <Route path="/elderly-dashboard" element={<ElderlyDashboard />} />
//         <Route path="/family-dashboard" element={<FamilyDashboard />} />
//         <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />

//         {/* Task-related routes */}
//         <Route path="/task-overview" element={<TaskOverview />} /> {/* ✅ Correct route */}
//         <Route path="/elderly/task-overview" element={<ElderlyTaskOverview />} /> {/* ✅ Elderly specific route */}

//         {/* Medication Tracker route */}
//         <Route path="/medication-tracker" element={<MedicationTrackerPage />} />

//         {/* Chat page */}
//         <Route path="/chat" element={<ChatPage />} />

//         {/* Emergency button for elderly */}
//         <Route path="/elderly/emergency" element={<EmergencyButton />} />

//         {/* Other pages */}
//         <Route path="/about" element={<About />} />
//         <Route path="/profile" element={<ProfilePage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

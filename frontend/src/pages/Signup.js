// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { signup } from "../services/api";

// function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "elderly",
//   });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await signup(form);
//     if (res.token) {
//       localStorage.setItem("token", res.token);
//       if (res.role === "elderly") navigate("/elderly-dashboard");
//       else if (res.role === "family") navigate("/family-dashboard");
//       else if (res.role === "volunteer") navigate("/volunteer-dashboard");
//     } else {
//       alert(res.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" type="text" placeholder="Full Name" value={form.name} onChange={handleChange} required />
//         <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
//         <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
//         <select name="role" value={form.role} onChange={handleChange}>
//           <option value="elderly">Elderly</option>
//           <option value="family">Family</option>
//           <option value="volunteer">Volunteer</option>
//         </select>
//         <button type="submit">Signup</button>
//         <p>Already signed up? <Link to="/">Login here</Link></p>
//       </form>
//     </div>
//   );
// }

// export default Signup;


// src/pages/Signup.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../services/api";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "elderly",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signup(form);
    if (res.token) {
      alert("Signup successful! Please login.");
      navigate("/"); // Redirect to login page after signup
    } else {
      alert(res.message || "Signup failed");
    }
  };

  return (
    <div className="form-container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="elderly">Elderly</option>
          <option value="family">Family</option>
          <option value="volunteer">Volunteer</option>
        </select>
        <button type="submit">Signup</button>
        <p>Already signed up? <Link to="/">Login here</Link></p>
      </form>
    </div>
  );
}

export default Signup;

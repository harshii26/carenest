import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/api";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(form);
    if (res.token) {
      localStorage.setItem("token", res.token);
      if (res.role === "elderly") navigate("/elderly-dashboard");
      else if (res.role === "family") navigate("/family-dashboard");
      else if (res.role === "volunteer") navigate("/volunteer-dashboard");
    } else {
      alert(res.message || "Login failed");
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit">Login</button>
        <p>Haven't signed up yet? <Link to="/signup">Signup here</Link></p>
      </form>
    </div>
  );
}

export default Login;

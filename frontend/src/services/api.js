
// const API_URL = "http://localhost:5000/api/auth"; // Adjust based on your backend port

// export const signup = async (data) => {
//   try {
//     const res = await fetch(`${API_URL}/signup`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     return await res.json();
//   } catch (err) {
//     return { message: "Error connecting to server" };
//   }
// };

// export const login = async (data) => {
//   try {
//     const res = await fetch(`${API_URL}/login`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     return await res.json();
//   } catch (err) {
//     console.error("Login Error:", err);
//     return { message: "Error connecting to server" };
//   }
// };

// src/services/api.js
export const login = async (data) => {
  try {
    const res = await fetch("https://carenest-grcr.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    return { message: "Error connecting to server" };
  }
};

export const signup = async (data) => {
  try {
    const res = await fetch("https://carenest-grcr.onrender.com/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    return { message: "Error connecting to server" };
  }
};

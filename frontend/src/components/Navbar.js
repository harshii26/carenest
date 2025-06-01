import React from "react";
import "../styles.css"; // Make sure the path is correct

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-logo">CareNest</h1>
      </div>
      <div className="navbar-right">
        <a href="/profile" className="nav-link">Profile</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/" className="nav-link">Logout</a>
      </div>
    </div>
  );
};

export default Navbar;

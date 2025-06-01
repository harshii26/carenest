import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";

const ProfilePage = ({ role }) => {
  const [formData, setFormData] = useState({
    name: "", age: "", gender: "", contact: "", address: "",
    medicalInfo: "", relationToElderly: "", volunteerAvailability: "", profilePicture: null,
  });
  const [preview, setPreview] = useState("");

  useEffect(() => {
    axios.get("/api/profile", { withCredentials: true })
      .then(res => {
        setFormData(res.data);
        if (res.data.profilePicture) setPreview(res.data.profilePicture);
      }).catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePicture") {
      setFormData({ ...formData, profilePicture: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    data.append("role", role);

    try {
      await axios.post("/api/profile", data, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Profile updated!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`profile-container ${role}`}>
      <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: <input name="name" value={formData.name} onChange={handleChange} /></label>
        <label>Age: <input name="age" value={formData.age} onChange={handleChange} /></label>
        <label>Gender: <input name="gender" value={formData.gender} onChange={handleChange} /></label>
        <label>Contact: <input name="contact" value={formData.contact} onChange={handleChange} /></label>
        <label>Address: <input name="address" value={formData.address} onChange={handleChange} /></label>

        {role === "elderly" && (
          <label>Medical Info: <textarea name="medicalInfo" value={formData.medicalInfo} onChange={handleChange} /></label>
        )}
        {role === "family" && (
          <label>Relation to Elderly: <input name="relationToElderly" value={formData.relationToElderly} onChange={handleChange} /></label>
        )}
        {role === "volunteer" && (
          <label>Availability: <input name="volunteerAvailability" value={formData.volunteerAvailability} onChange={handleChange} /></label>
        )}

        <label>Profile Picture: <input type="file" name="profilePicture" onChange={handleChange} /></label>
        {preview && <img src={preview} alt="preview" className="profile-preview" />}
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;

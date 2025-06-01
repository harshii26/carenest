// frontend/components/ProfileForm.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileForm = ({ userId }) => {
  const [profile, setProfile] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios.get(`/api/profile/${userId}`).then(res => setProfile(res.data));
  }, [userId]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in profile) formData.append(key, profile[key]);
    if (image) formData.append('profilePicture', image);

    const res = await axios.put(`/api/profile/${userId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    setProfile(res.data);
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <img src={`/${profile.profilePicture}`} alt="Profile" width="150" />
      <input type="file" onChange={e => setImage(e.target.files[0])} />
      <input name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={profile.email} onChange={handleChange} disabled />
      {/* Add other editable fields here */}
      <button type="submit">Update</button>
    </form>
  );
};

export default ProfileForm;

// frontend/pages/VolunteerProfile.js
import ProfileForm from '../components/ProfileForm';

const VolunteerProfile = () => {
  const userId = localStorage.getItem('userId');
  return (
    <div>
      <h2>Volunteer Profile</h2>
      <ProfileForm userId={userId} />
    </div>
  );
};

export default VolunteerProfile;

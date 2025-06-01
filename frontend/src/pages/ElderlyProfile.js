// frontend/pages/ElderlyProfile.js
import ProfileForm from '../components/ProfileForm';

const ElderlyProfile = () => {
  const userId = localStorage.getItem('userId'); // or from context
  return (
    <div>
      <h2>Elderly Profile</h2>
      <ProfileForm userId={userId} />
    </div>
  );
};

export default ElderlyProfile;

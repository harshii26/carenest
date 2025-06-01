// frontend/utils/getUserRoleBasedComponent.js
import ElderlyProfile from '../pages/ElderlyProfile';
import FamilyProfile from '../pages/FamilyProfile';
import VolunteerProfile from '../pages/VolunteerProfile';

const getUserRoleComponent = (role) => {
  switch (role) {
    case 'elderly': return ElderlyProfile;
    case 'family': return FamilyProfile;
    case 'volunteer': return VolunteerProfile;
    default: return null;
  }
};

export default getUserRoleComponent;

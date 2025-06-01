import axios from 'axios';

export const fetchUserProfile = async (token) => {
  const response = await axios.get('/api/profiles/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateUserProfile = async (token, updatedData) => {
  const response = await axios.put('/api/profiles/me', updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

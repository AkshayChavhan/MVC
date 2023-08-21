import axios from "axios";

export const signupUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/users/signup', userData);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/users/validate-token', userData);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const getUserData = async (token) => {
  try {
    const response = await axios.get('http://localhost:5000/api/users/userdata', {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the request headers
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
};
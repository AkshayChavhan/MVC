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
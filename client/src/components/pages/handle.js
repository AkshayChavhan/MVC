import axios from "axios";


export const updateUserData = async (token, payload) => {
    try {
        console.log("token , payload ==> ", token , payload);
        const response = await axios.post('http://localhost:5000/api/users/update-profile', payload, {
            headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the user's token
            },
        });
        return response;
    } catch (error) {
        throw error;
    }
};


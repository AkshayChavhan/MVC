import axios from "axios";


export const updateUserData = async (token, payload) => {
    try {
        const response = await axios.post('http://localhost:5000/api/users/update-profile', payload, {
            headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the user's token
            },
        });
        console.log("token , payload ==> ", token , payload);
        return response;
    } catch (error) {
        throw error;
    }
};


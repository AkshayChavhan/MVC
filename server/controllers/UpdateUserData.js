
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.updateUserData = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, 'yourSecretKey', async (err, decodedToken) => {
      if (err) {
        console.error("Token verification error: ", err);
        return res.sendStatus(403); // Forbidden
      }

      // Extract userId from the decoded JWT payload
      const userId = decodedToken.userId;

      const updatedProfileData = req.body; // Assuming the updated data is sent in the request body

      // Find the user by ID and update the userData field
      await User.findByIdAndUpdate(
        userId,
        { $set: { userData: updatedProfileData } }, // Update userData directly
        { new: true } // Return the updated user document
      );

      res.status(200).json({ message: 'Profile data updated successfully' });

    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};


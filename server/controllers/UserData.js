const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.getUserData = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.sendStatus(401); // Unauthorized
    }

    
    jwt.verify(token, 'yourSecretKey', (err, userData) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      req.userData = userData; // Attach the userData to the request
      console.clear();
      console.log("userData  =>" ,userData);
      res.status(200).json(userData); // Move this line inside the callback
    });

  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.login = async (req, res) => {
  try {
    // Check if user exists
    // Compare hashed password
    // Create a JWT token
    // Return the token
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

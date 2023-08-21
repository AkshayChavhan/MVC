const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const crypto = require("crypto");


exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(500).json({ valid: false, message: "Login not success" });
  }
  try {
    // Find the user by userId
    const user = await User.findOne({ username });
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid username' });
    }
    
    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    const secretKey = "yourSecretKey";
    // Create and sign a JWT token
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: '1h', // Token expiration time
    });
    
    res.status(200).json({ token, secretKey , message: "Login Successfully", valid: true });
    // res.status(200).json({ token, message: "Login Successfully",valid: true, decodedToken , userData: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

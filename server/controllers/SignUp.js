const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const crypto = require("crypto");

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const secretKey = crypto.randomBytes(64).toString('hex');

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    // Save the user to the database
    await newUser.save();

    // Create and sign a JWT token
    const token = jwt.sign({ userId: newUser._id }, secretKey, {
      expiresIn: '1h', // Token expiration time
    });
    res.status(201).json({ message: 'User registered successfully',token, secretKey });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
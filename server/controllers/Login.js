const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.login = async (req, res) => {
  const { username, password, secretKey, token } = req.body;

  if (!token || !secretKey) {
    return  res.status(500).json({ valid: false , message: "Login not success" });
  }
  try {

    const decodedToken = jwt.verify(token, secretKey);
    // Find the user by userId
    const user = await User.findById(decodedToken.userId);

    if (!user) {
      return res.status(401).json({ message: 'Invalid username' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ token, message: "Login Successfully", valid: true, decodedToken});
    // res.status(200).json({ token, message: "Login Successfully",valid: true, decodedToken , userData: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

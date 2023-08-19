const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  userData: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserData' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
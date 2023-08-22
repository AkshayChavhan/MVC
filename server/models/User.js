const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  userData: {
    // Define the structure of the profile data here
    firstname: String,
    lastname: String,
    emailAddress: String,
    address: {
      address1: String,
      city: String,
      zipcode: String,
    },
    notification: {
      pushNotification: {
        sameasmail: String,
      },
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
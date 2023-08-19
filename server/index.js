const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/router');

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb+srv://akshaychavhan676:akshaychavhan676@mvc.t3kxt7i.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});


// API routes
app.use('/api/login', userRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

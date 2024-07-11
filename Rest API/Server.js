const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port or default to 5000

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

const User = require('./models/User');

app.listen(port, () => console.log(`Server listening on port ${port}`));


// GET: Get all users
app.post('/users', async (req, res) => {
    try {
      // Complete the object with data from the request body
      const newUser = new User({
        name: req.body.name,
        email: req.body.email, // Add email property
      });
      
      // Saving the new user to the database
      const savedUser = await newUser.save(); 
      res.status(201).json(savedUser); 
    } catch (err) {
      // Handle validation or other errors
      res.status(400).json({ message: err.message }); 
    }
  });
  

const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const session = require('express-session');



/* resgister a user */
/* router.post('/register', async (req, res) => {
  const { username, email, password, role, } = req.body;
  try {

    const _id = await User.countDocuments() + 1;
    const user = await User.create({ username, email, password, role, _id  });
    res.status(201).json({
      status: 'success',
      user,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});
 */


router.post('/register', async (req, res) => {
    try {
      const { username, email, password,role } = req.body;
  
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(201).json({ message: 'User already exists.' });
      }
  
      // Hash the password before saving it to the database
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const _id = await User.countDocuments() + 1;
      // Create the new user in the database
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        role,
        _id,
      });
      await newUser.save();
  
      return res.status(200).json({ message: 'User registered successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
  });

/* get all users */
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      users
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});


module.exports = router;









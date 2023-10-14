const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const session = require('express-session');



/* resgister a user */
router.post('/register', async (req, res) => {
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









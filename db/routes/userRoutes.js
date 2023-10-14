const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const session = require('express-session');



/* resgister a user */


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

  /* login a user */    
  router.post("/login", (request, response) => {
    const { email, password } = request.body;
  
  const existingSession = request.session.user;
  if (existingSession) {
    return response.status(400).send({
      message: "User already logged in"
  
    });
  }
  User.findOne({ email: email })
      .then((user) => {
        if (user) {
          bcrypt
            .compare(password, user.password)
            .then((result) => {
              if (result) {
                const token = jwt.sign(
                  { email: user.email, _id: user._id},
                  "secretkey",
                  { expiresIn: "2h" }
                );
                request.session.user = user;
               
                response.status(200).send({
                  message: "Login Successful",
                  token,
                user:  user.username,
                id: user._id
                });
              } else {
                response.status(401).send({
                  message: "Unauthorized Access",
                });
              }
            })
            .catch((error) => {
              response.status(500).send({
                message: "Error comparing passwords",
                error,
              });
            });
        } else {
          response.status(404).send({
            message: "User not found",
          });
        }
      }
      )
  
  
  
  });
  
  // logout a user
  
  router.post("/logout", (request, response) => {
  
    const checkSession = request.session.user;
    if (!checkSession) {
      return response.status(400).send({
        message: "You are already logged out"
  
      });
    }
  
    request.session.destroy((error) => {
      if (error) {
        response.status(500).send({
          message: "Error logging out",
          error,
        });
      } else {
        response.status(200).send({
          message: "Logout successful",
        });
  
      }
    });
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









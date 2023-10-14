const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const cors = require("cors");


const app = express();
const PORT = 8000;

app.use(express.json());
app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
  })
);

   app.use(cors());
   app.listen(PORT , () => {
    console.log("App is running on port 8000!");
  });
  // require database connection
  const dbConnect = require("./db/dbConnect");


  const User = require("./db/models/userModel");

  // execute database connection
dbConnect();

app.get ("/", (req, res) => {
    res.send("Hello World!");
    }
    );



/*register a user*/ 
app.post ("/register", async (req, res) => {

    const { username, email, password,role } = req.body;
    try {
      const user = await User.create({ username, email, password,role });
      res.status(201).json({
        status: "success",
        user,
      });
    } catch (error) {
      res.status(400).json({ error });
    }
    }

    );

    /*get all users*/
app.get ("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
      } catch (error) {
        res.status(400).json({ error });
      }
    }
    );






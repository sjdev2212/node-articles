const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const cors = require("cors");
const userRoutes = require("./db/routes/userRoutes");


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

app.use("/api", userRoutes);







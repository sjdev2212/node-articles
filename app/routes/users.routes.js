module.exports = app => {
    const users = require("../controllers/users.controller.js");
  
    const  router = require("express").Router();
  
    // Create a new User
   router.post("/create-user", users.create); 
      
     // Retrieve all users
     router.get("/users", users.findAll);


     app.use('/api', router);
  
}
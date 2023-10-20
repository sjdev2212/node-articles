const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({

  _id : {
     type: Number,


 }, 
 username : {
     type: String,
     required: [true, "Please provide a username!"],
     unique: true,
   
 },
 email : {
     type: String,
     required: [true, "Please provide an Email!"],
     unique: true,
     lowercase: true,
 },
 password : {
     type: String,
     required: true,
 },

 Avatar: {
    type: String, // Store the URL of the custom avatar image
  },
  selectedAvatar: {
    type: String, // Store the selected avatar filename or identifier
  },
 role : {
     type: String,
     enum: ["user", "admin"],
     default: "user",
 },

 createdAt : {
     type: Date,
     default: Date.now,
 }


 

});



module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
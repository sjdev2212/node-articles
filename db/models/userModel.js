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
    type: String, 
    default: "https://res.cloudinary.com/db1yj4fpr/image/upload/v1697846186/default_xkx9w8.png",

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
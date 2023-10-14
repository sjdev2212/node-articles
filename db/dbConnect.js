const mongoose = require("mongoose");

 const dotenv = require("dotenv"); 

dotenv.config(); 




async function dbConnect() {
    mongoose
    .connect(
        process.env.DB_URL,
      {
      
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
      
      }
    )

.then(() => {
    console.log("Estamos adentro!");
  })
  .catch((error) => {
    console.log(process.env.DB_URL);
    console.log("Siamo fuori!");
    console.error(error);
  });



}

module.exports = dbConnect;
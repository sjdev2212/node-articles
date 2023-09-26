module.exports = app => {
    const articles = require("../controllers/articles.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Artcicle
   router.post("/create-article", articles.create); 
  
    // Retrieve all articles
    router.get("/articles", articles.findAll);
  
/*     // Retrieve all published Tutorials
    router.get("/published", articles.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", articles.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", articles.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", articles.delete);
  
    // Create a new Tutorial
    router.delete("/", articles.deleteAll); */
  
    app.use('/api', router);
  };
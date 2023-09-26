const { JSON } = require("sequelize");
const db = require("../models");
const Article = db.articles;
const Op = db.Sequelize.Op;



exports.findAll = (req, res) => {
    Article.findAll()
      .then(data => {
        if 
        (data.length == 0) {
            res.status(404).send({
                message: "No articles found"
            });
        }
        else {
            res.status(200).send(data);
        }
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving articles."
        });
      });
  };

  exports.create = (req, res) => {
    // Validate request
    if (!req.body.title || !req.body.content) {
      res.status(400).send({
        message: "Title or content cannot be empty!"
      });
      return;
    }
  
    // Create a article
    const article = {
      title: req.body.title,
      content: req.body.content,
      published: req.body.published ? req.body.published : false
    };
  
    // Save article in the database
    Article.create(article)
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the article."
        });
      });
  }

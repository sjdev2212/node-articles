const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

    
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role ? req.body.role : "user"
    };
    User.create(user)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
}

exports.findAll = (req, res) => {
    User.findAll()
        .then(data => {
            if (data.length == 0) {
                res.status(404).send({
                    message: "No users found"
                });
            }
            else {
                res.status(200).send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
}

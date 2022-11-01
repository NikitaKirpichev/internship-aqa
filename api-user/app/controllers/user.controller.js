const db = require("../models");
const User = db.user;
const Options = db.Sequelize.Op;

//create and save a new user
exports.create = (req, res) => {
  if (!req.body.first_name) {
    res.status(400).send({
      message: "Conent can't be empty!",
    });
    return;
  }

  const user = {
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    birthday: req.body.birthday,
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error",
      });
    });
};

//get all users
exports.findAll = (req, res) => {
  User.findAll(req.query.first_name)
    .then((data) => {
      res.send(data);
    })
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Some error while retrieving users",
      })
    );
};

//get one user
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find user with id = ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error while retrieving user with id = ${id}`,
      });
    });
};

//update a user by id
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {where: {id: id}}).then(num =>{
    if (num == 1){
      res.send({
        message: "User update successfully"
      });
    } else {
      res.send({
        message: `Cannot update user with id = ${id}`
      })
    }
  })
  .catch(err => {
    res.status(500).send({
      message: `Error while update user with id = ${id}`
    })
  })
};

//delete a user by id
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({where: {id: id}}).then(num =>{
    if (num == 1){
      res.send({
        message: "User was deleted successfully"
      });
    } else {
      res.send({
        message: `Cannot delete user with id = ${id}`
      })
    }
  })
  .catch(err => {
    res.status(500).send({
      message: `Error while delete user with id = ${id}`
    })
  })
};

//delere all users
exports.deleteAll = (req, res) => {
  User.destroy({where: {}, truncate: false}).then(nums =>{
    res.send({message: `${nums} users was deleted`})
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || 'Some error while deleting all users'
    })
  })
};

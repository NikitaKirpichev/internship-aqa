module.exports = app =>{
    const user = require('../controllers/user.controller');

    let router = require('express').Router();

    //create user
    router.post("/", user.create);

    //get all users
    router.get("/", user.findAll);

    //get user by id
    router.get("/:id", user.findOne);

    //update user by id
    router.put("/:id", user.update);

    //delete user by id
    router.delete("/:id", user.delete);

    //delete all users
    router.delete("/", user.deleteAll);

    app.use('/api/users', router);
}
let users = require('../models/users.model');
const {v4:uuidv4} = require('uuid')

const getAllUsers = (req, res) => {
    res.status(200).json({users});
}

const createUsers = (req, res) => {
    const newUser ={
        id : uuidv4(),
        username: req.body.username,
        email: req.body.email
    }

    users.push(newUser);
    res.status(201).json(users);
}


const updateUsers = (req, res) => {
    const uid = req.params.id;
    const { username, email } = req.body;
    users = users.map((user) => {
      if (user.id === uid) {
        return {
          ...user,
          username: username || user.username,
          email: email || user.email,
        };
      }
      return user;
    });
    res.status(202).json(users);
  };

const deleteUsers = (req, res) => {
    const uid = req.params.id;
    users = users.filter((user) => user.id !== uid);
    res.status(200).json(users);

}


module.exports = {getAllUsers,createUsers,updateUsers,deleteUsers };
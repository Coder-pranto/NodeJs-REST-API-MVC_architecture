let Users = require('../models/users.model');
const { v4: uuidv4 } = require('uuid');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const singleUser = await Users.findOne({ id: req.params.id });
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUsers = async (req, res) => {
  try {
    const newUser = new Users({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUsers = async (req, res) => {
  try {
    const updateUser = await Users.findOne({ id: req.params.id });
    (updateUser.name = req.body.name),
      (updateUser.age = Number(req.body.age)),
      await updateUser.save();
    res.status(202).json(updateUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUsers = async (req, res) => {
  try {
    await Users.deleteOne({ id: req.params.id });
    res.status(200).json({ message: 'User is deleted!' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUsers,
  updateUsers,
  deleteUsers,
};

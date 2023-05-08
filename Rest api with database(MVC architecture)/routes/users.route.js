
const express = require('express');
const router = express.Router();
const { getAllUsers, getOneUser, createUsers, deleteUsers, updateUsers } = require('../controllers/users.controller');


router.get('/', getAllUsers);

router.get('/:id', getOneUser);

router.post('/', createUsers);

router.patch('/:id', updateUsers);

router.delete('/:id', deleteUsers);


module.exports = router ;

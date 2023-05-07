
const express = require('express');
const router = express.Router();
const { getAllUsers, createUsers, deleteUsers, updateUsers } = require('../controllers/users.controller');


router.get('/', getAllUsers);

router.post('/', createUsers);

router.patch('/:id', updateUsers);

router.delete('/:id', deleteUsers);


module.exports = router ;

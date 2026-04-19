const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { createUser, loginUser, getUserById, getAllUser } = require('../controller/user.controller');


// singUP / create user

router.route('/signup').post(createUser)

// login
router.route('/login').post(loginUser)

// get all users Names and Emails
router.route('/').get(getAllUser)

// get user by id
router.route('/:id').get(getUserById)

module.exports = router;
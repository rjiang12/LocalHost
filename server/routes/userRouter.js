const express = require('express');
const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/cookieController.js');
const userRouter = express.Router();


userRouter.post('/signup', 
    userController.createUser, 
    cookieController.setUserSSIDCookie, (req, res) => {
    return res.status(200).send(true).json();
});

userRouter.post('/login', 
    userController.verifyUser, 
    cookieController.setUserSSIDCookie, (req, res) => {
        return res.status(200).send(true).json();
});

module.exports = userRouter;



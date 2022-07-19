const express = require('express');
const meetUpController = require('../controllers/meetupController')
const eventRouter = express.Router();

//possibly use on find events before search details entered
eventRouter.get('/getAll', meetUpController.allMeetups, (req, res) => {
    res.status(200).json(res.locals.data);
} )

//find all user entries for the profile page
eventRouter.get('/userEntries', meetUpController.allUserEntries, (req, res) => {
    res.status(200).json(res.locals.data);
} )

eventRouter.get('/getAllWithMatch', meetUpController.meetupWithMatch, (req, res) => {
    res.status(200).json(res.locals.data);
} )

//post router goes here
eventRouter.post('/newEntry', meetUpController.newEntry, (req, res) => {
    res.status(200).json(res.locals.data);
} )

// edit router goes here

// delete router goes here

module.exports = eventRouter;
const express = require('express');
const meetUpController = require('../controllers/meetupController')
const router = express.Router();

//not get called at all
router.get('/getAll', meetUpController.allMeetups, (req, res) => {
    res.status(200).json(res.locals.data);
} )

//gets called in form component
router.get('/userEntries', meetUpController.allUserEntries, (req, res) => {
    res.status(200).json(res.locals.data);
} )

//gets called in matches component
router.get('/getAllWithMatch', meetUpController.meetupWithMatch, (req, res) => {
    res.status(200).json(res.locals.data);
} )

//gets called in form component
router.post('/newEntry', meetUpController.newEntry, (req, res) => {
    res.status(200).json(res.locals.data);
} )

// edit router goes here

// delete router goes here

module.exports = router;
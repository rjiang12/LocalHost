const express = require('express');
const meetUpController = require('../controllers/meetupController')
const eventRouter = express.Router();

// current events router
eventRouter.get('/currentEvent', meetUpController.getCurrentEvents, (req, res) => {
    res.status(200).send(res.locals.currentEvents);
})
// past events router
eventRouter.get('/pastEvents', meetUpController.getPastEvents, (req, res) => {
    res.status(200).send(res.locals.pastEvents); 
})

eventRouter.get('/getEvents', meetUpController.getEvents, (req, res) => {
    res.status(200).send(res.locals.events); 
})

eventRouter.post('/postEvent', meetUpController.postEvent, (req, res) => {
    res.status(200).send('successfully made event'); 
})

/*
// deprecated, replaced by getEvents. 
eventRouter.get('/getAll', meetUpController.allMeetups, (req, res) => {
    res.status(200).json(res.locals.data);
} )

// deprecated, replaced by getPastEvents and getCurrentEvents. 
eventRouter.get('/userEntries', meetUpController.allUserEntries, (req, res) => {
    res.status(200).json(res.locals.data);
} )

// deprecated, replaced by getEvents. 
eventRouter.get('/getAllWithMatch', meetUpController.meetupWithMatch, (req, res) => {
    res.status(200).json(res.locals.data);
} )

// 
eventRouter.post('/newEntry', meetUpController.newEntry, (req, res) => {
    res.status(200).json(res.locals.data);
} )
*/


module.exports = eventRouter;
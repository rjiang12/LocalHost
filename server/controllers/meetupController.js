const db  = require('../models/meetupModel');

const meetUpController ={};

meetUpController.allMeetups = (req, res, next) => {

    const sqlQuerie = 'SELECT * FROM meetups ';
    db.query(sqlQuerie)
    .then(data => {
        console.log('data: ', data);
        res.locals.data = data.rows;
        return next();
    })
    .catch(err=>({error: err}))
}

meetUpController.allUserEntries = (req, res, next) => { // query using SSID = user_id

  const {username} = req.query;

  const sqlQuerie = 'SELECT * FROM meetups WHERE username = $1';
  let params = [username];
  db.query(sqlQuerie, params)
  .then(data => {
      console.log('data: ', data);
      res.locals.data = data.rows;
      return next();
  })
  .catch(err=>({error: err}))
}


//create get request for matches
meetUpController.meetupWithMatch = (req, res, next) => {
  console.log('started meetUpController.meetupWithMatch')
  const {activity, day, username} = req.query;
  let queryParams;
  let query;

  // i want coffee on saturday (specific)
  if (day && activity ) {
    console.log('picked both')
    query = `SELECT * FROM meetups WHERE meetups.activity = $1 AND meetups.day = $2 AND meetups.username <> $3`;
    queryParams = [activity, day, username];
  }
  
  // i want just saturday
  if (day && !activity) {
    console.log('picked day only')
    query = `SELECT * FROM meetups WHERE meetups.day = $1 AND meetups.username <> $2`;
    queryParams = [day, username];
  }
  // i want just coffee
  if (!day && activity) {
    console.log('picked activity only')
    query = `SELECT * FROM meetups WHERE meetups.activity = $1 AND meetups.username <> $2`;
    queryParams = [activity, username];
  }
  
  // run db search 
  db.query(query, queryParams)
  .then(data => {
      console.log('data.rows: ', data.rows);
      res.locals.data = data.rows;
      return next();
  })
  .catch(err=>(next({error: err})))
}


meetUpController.newEntry = (req, res, next) => {
    console.log("req.body:", req.body)
    const {username, first_name, last_name, activity, day} = req.body;
    let newDate = new Date();
    const query = 'INSERT INTO meetups (username, first_name, last_name, activity, day, created_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;'
    const queryParams = [username, first_name, last_name, activity, day, newDate];

    db.query(query, queryParams)
    .then(data => {
      console.log('data.rows: ', data.rows);
      // res.locals.data = data.rows;
      return next();
    })
    .catch(err => (next(err)))
    // return next();
}

module.exports = meetUpController;


const path = require('path');
const express = require('express');

const cors = require('cors')
const eventRouter = require('./routes/eventRouter.js');
const userRouter = require('./routes/userRouter.js');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', userRouter);
app.use('/event/', eventRouter);


app.use((req, res) => {
    res.sendStatus(404);
    console.log('unknown route', res.statusCode);
  });

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }, 
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log('errorObj', errorObj);
    return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}...`);
})

module.exports = app;
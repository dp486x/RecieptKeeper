const express = require('express')
const app = express();
const chalk = require('chalk');
var util = require('util');
var moment = require('moment');
const fs =require('fs');
// app.use(express.bodyParser());

// middleware that is specific to this router
app.use(function timeLog(req, res, next) {
  console.log('Time: ', moment().format('MMMM Do YYYY, h:mm:ss a'));
  next();
});

app.route('/')
  .get((req, res, next) => {
    res.send('Information About the Reciept/s.');
  })

  .post((req, res, next) => {
    // create a new user called chris
    // req.user = new User(req.body);
    console.log(chalk.green("POST request at Reciept post"));
    // console.log(req.body);

    next();
  })

  .post((req, res, next) => {
    console.log("req.body:"+req.body);
    // call the built-in save method to save to the database
    // req.user.save(function(err) {
    //   if (err) throw err;
    //   res.send('User saved successfully!');
    //   console.log('User saved successfully!');
    // });
    res.send('Reciept saved successfully!');
  })

  .put((req, res, next) => {
    res.send('Reciept updated successfully');
  })

  .delete((req, res, next) => {
    res.send('Reciept Deleted successfully');
  })









module.exports = app;

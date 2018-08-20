const express = require('express')
const app = express();
const chalk = require('chalk');
var User = require('./../models/userModel');
var util = require('util');
var moment = require('moment');

// middleware that is specific to this router
app.use(function timeLog(req, res, next) {
  console.log('Time: ', moment().format('MMMM Do YYYY, h:mm:ss a'));
  next();
});

app.route('/')
  .get((req, res, next) => {
    res.send('Information About the user.')
  })

  .post((req, res, next) => {
    // create a new user called chris
    // req.user = new User(req.body);
    console.log(chalk.green("POST request at user post"));
    // console.log(req.body);

    next();
  })

  .post((req, res, next) => {
    console.log("req.body: "+JSON.stringify(req.body));
    // call the built-in save method to save to the database
    // req.user.save(function(err) {
    //   if (err) throw err;
    //   res.send('User saved successfully!');
    //   console.log('User saved successfully!');
    // });
res.send('User saved successfully!');
  })

  .put((req, res, next) => {
    res.send('animals home page.PUT.app.route')
  })

  .delete((req, res, next) => {
    res.send('animals home page.DELETE.app.route')
  })














module.exports = app;

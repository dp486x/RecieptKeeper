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
    User.find(function(err, Users) {
      if (err) {
        res.send(err);
        return console.error(err);
      }
      console.log(Users);
      res.json(Users);

    });
  })

  .post((req, res, next) => {
    // create a new user called chris
    // req.user = new User(req.body);
    console.log(chalk.green("POST request at user post"));
console.log(req.body);
    // var newUser = new User({
    //   userNumber: 1,
    //   firstName: "Dinesh Kumar",
    //   userName: "poladinesh423@gmail.com",
    //   password: "dinesh",
    //   isAdmin: true,
    //   gender: "M",
    //   userImageLocation: "google",
    //   location: "drive",
    //   meta: {
    //     mobile: 4054016751,
    //     email: "poladinesh42@gmail.com",
    //     age: 27,
    //     website: "not yet"
    //   },
    //   created_at: Date.now(),
    //   updated_at: Date.now()
    // });
    // newUser.save(function(err, newUser) {
    //   if (err) {
    //     // return console.error(err);
    //     res.json(err);
    //   } else if (newUser){
    //     res.send('User saved successfully!'+ newUser);
    //   }
    //
    //   console.log(chalk.blue("SUCCESS: " + newUser));
    //   next();
    // });

  })

  .post((req, res, next) => {
    console.log("req.body: " + JSON.stringify(req.body));
    // call the built-in save method to save to the database
    // req.user.save(function(err) {
    //   if (err) throw err;
    //   res.send('User saved successfully!');
    //   console.log('User saved successfully!');
    // });
    res.send('from second post');
  })

  .put((req, res, next) => {
    res.send('animals home page.PUT.app.route')
  })

  .delete((req, res, next) => {
    res.send('animals home page.DELETE.app.route')
  })









module.exports = app;

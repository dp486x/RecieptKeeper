const express = require('express');
const app = express();
const chalk = require('chalk');
var User = require('./../models/userModel');
// var util = require('util');
var moment = require('moment');

// middleware that is specific to this router
app.use(function timeLog(req, res, next) {
    console.log('Time: ', moment()
        .format('MMMM Do YYYY, h:mm:ss a'));
    next();
});

app.route('/')
    .get((req, res, next) => { // jshint ignore:line
        User.find(function(err, Users) {
            if (err) {
                res.send(err);
                return console.error(err);
            }
            console.log(Users);
            res.json(Users);
            next();
        });
    })

    .post((req, res, next) => {
        // create a new user called chris
        // req.user = new User(req.body);
        console.log(chalk.green("POST request at user post"));
        console.log(req.body);
        var newUserRequest = req.body;
        var newUser = new User({
            userNumber: 1,
            firstName: newUserRequest.firstName,
            userName: newUserRequest.userName,
            password: newUserRequest.password, //Hash the password
            isAdmin: newUserRequest.isAdmin,
            gender: newUserRequest.gender,
            userImageLocation: newUserRequest.userImageLocation,
            location: newUserRequest.location,
            meta: {
                mobile: newUserRequest.meta.mobile,
                email: newUserRequest.meta.email,
                age: newUserRequest.meta.age,
                website: newUserRequest.meta.website
            },
            created_at: newUserRequest.created_at,
            updated_at: newUserRequest.updated_at
        });
        newUser.save(function(err, newUser) {
            if (err) {
                // return console.error(err);
                res.json(err);
            } else if (newUser) {
                res.send('User saved successfully!' + newUser);
            }

            console.log(chalk.blue("SUCCESS: " + newUser));
            next();
        });

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
        next();
    })

    .put((req, res, next) => {
        res.send('animals home page.PUT.app.route');
        next();
    })

    .delete((req, res, next) => {
        res.send('animals home page.DELETE.app.route');
        next();
    });









module.exports = app;

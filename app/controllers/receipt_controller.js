const express = require('express');
var multer = require('multer'); // jshint ignore:line
var upload = multer({ // jshint ignore:line
    dest: 'uploads/'
});
const app = express();
const chalk = require('chalk');
var util = require('util'); // jshint ignore:line
var moment = require('moment');
const fs = require('fs'); // jshint ignore:line
// app.use(express.bodyParser());

// middleware that is specific to this router
app.use(function timeLog(req, res, next) {
    console.log('Time: ', moment()
        .format('MMMM Do YYYY, h:mm:ss a'));
    next();
});

app.route('/')
    .get((req, res, next) => {
        res.send('Information About the receipt/s.');
        next();
    })

    .post((req, res, next) => {
        // create a new user called chris
        // req.user = new User(req.body);
        console.log(chalk.green("POST request at receipt post"));
        // console.log(req.body);

        next();
    })

    .post((req, res, next) => {
        console.log("req.body:" + req.body);
        // call the built-in save method to save to the database
        // req.user.save(function(err) {
        //   if (err) throw err;
        //   res.send('User saved successfully!');
        //   console.log('User saved successfully!');
        // });
        res.send('receipt saved successfully!');
        next();
    })

    .put((req, res, next) => {
        res.send('receipt updated successfully');
        next();
    })

    .delete((req, res, next) => {
        res.send('receipt Deleted successfully');
        next();
    });









module.exports = app;

const express = require('express');
const app = express();
const path = require('path');
const chalk = require('chalk');
const morgan = require('morgan');
const route = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//const creds = require('./creds.json');
const bodyParser = require('body-parser');
const port = 3333;
var fs = require('fs');
var moment = require('moment');
var util = require('util');
const host = "";
const storeFilesAtRoot = "./Reciepts/";




//DB Connection
//mongoose.connect('mongodb://' + creds.mlab.dbUser + ':' + creds.mlab.dbPassword + '@' + creds.mlab.url + ':' + creds.mlab.port + '/' + creds.mlab.database);

//Static files path
app.use(express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(morgan('dev', {
    skip: function(req, res) {
        return res.statusCode < 400
    },
    stream: process.stderr
}));

app.use(morgan('dev', {
    skip: (req, res) => {
        return res.statusCode >= 400
    },
    stream: process.stdout
}));

var requestTime = function(req, res, next) {
    req.requestTime = moment().format();
    console.log(util.inspect("got request"));
    next()
};
app.use(requestTime);

app.use('/user', require('./app/controllers/user_controller'));
app.use('/notify', require('./app/controllers/notifications_controller'));
app.use('/reciept', require('./app/controllers/reciept_controller'));

app.get('/', (req, res) => {
    res.send("Welcome to the Reciept Keeper.");
});
/*
//Error Handler when  not found
app.use((req, res, next) => {
  req.status(404).send("Sorry cannot find it!!");
})
*/
app.listen(port, () => {
    console.log("Server started  at : " + chalk.blue(port));
})

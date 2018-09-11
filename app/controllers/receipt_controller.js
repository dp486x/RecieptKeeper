const express = require('express');
const multer = require('multer');
var bodyParser = require('body-parser');
const crypto = require('crypto');
var path = require('path');
const mkdirp = require('mkdirp');
const Receipt = require('./../models/receiptModel');
const app = express();
const chalk = require('chalk');
const moment = require('moment');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const dir = "./Receipts/" + moment().format('YYYY') + "/" +
            moment().format("MMMM") + "/" + moment().format('DD') +
            "(" + moment().format('dddd') + ")";

        mkdirp(dir, err => cb(err, dir));
    },
    filename: function(req, file, cb) {
        crypto.pseudoRandomBytes(16, function(err) { //(err,raw)
            if (err) {
                return cb(err);
            }
            cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
            // cb(null, raw.toString('hex') + path.extname(file.originalname));
        });
    }
});
var upload = multer({
    storage: storage
});

app.use(bodyParser.json());

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

    // .post(upload.any(), (req, res, next) => {111
    .post(upload.any(), (req, res) => {
        console.log("req.body: POST");

        debugger; // jshint ignore:line

        // upload(req, res, function(err) {
        //     if (err) {
        //         res.send("Something went wrong!");
        //     }
        //     res.send("File uploaded sucessfully!.");
        // });
        res.send('receipt saved successfully!');
        // next();
    })

    .post((req, res, next) => {
        // create a new user called chris
        // req.user = new User(req.body);
        console.log(chalk.green("POST request at receipt post"));
        var newReceipt = new Receipt({
            receiptNumber: 1, // receipt # until date
            receiptName: "String", //receiptFrom+receiptMonth-receiptDate-receiptYear
            businessName: "String", // company name
            businessId: 12, //company ID in the DB
            receiptFullDate: Date.now(), //Date.now()
            receiptYear: moment()
                .format('YYYY'), //moment().format('YYYY')
            receiptMonth: moment()
                .format("MMM"), //moment().format("MMM")
            receiptDate: moment()
                .format('dd'), //moment().format('dd');
            receiptDay: moment()
                .format('dddd'), //moment().format('dddd');
            subTotal: 2, // amount before tax
            tax: 2, // total tax
            total: 2, //amount with Tax
            receiptLocation: "String", //receipts/receiptYear/receiptMonth/receiptDate/receiptName.format
            category: "String", // category to which receipt belongs to(grocery, gas, clothing)
            savedBy: "String", // User who saved the receipt
            modifiedBy: "String", //User modified the receipt
            created_at: Date.now(), // receipt created on
            updated_at: Date.now() // receipt updated on
            // discounts:{
            //   actualPrice: Number;
            //   discountPrice: Number;
            //   discountPercent: Number;
            //
            // }
        });
        newReceipt.save(function(err, newUser) {
            if (err) {
                // return console.error(err);
                res.json(err);
            } else if (newUser) {
                res.send('User saved successfully!' + newUser);
            }
        });
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

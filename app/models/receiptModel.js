var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var moment = require('moment');

// create a schema
var receiptSchema = new Schema({
    receiptNumber: Number, // receipt # until date
    receiptName: String, //receiptFrom+receiptMonth-receiptDate-receiptYear
    businessName: String, // company name
    businessId: Number, //company ID in the DB
    receiptFullDate: Number, //Date.now()
    receiptYear: Number, //moment().format('YYYY')
    receiptMonth: String, //moment().format("MMM")
    receiptDate: String, //moment().format('dd');
    receiptDay: String, //moment().format('dddd');
    subTotal: Number, // amount before tax
    tax: Number, // total tax
    total: Number, //amount with Tax
    receiptLocation: String, //receipts/receiptYear/receiptMonth/receiptDate/receiptName.format
    category: String, // category to which receipt belongs to(grocery, gas, clothing)
    savedBy: String, // User who saved the receipt
    modifiedBy: String, //User modified the receipt
    created_at: Number, // receipt created on
    updated_at: Number // receipt updated on
    // discounts:{
    //   actualPrice: Number;
    //   discountPrice: Number;
    //   discountPercent: Number;
    //
    // }
});

var receipt = mongoose.model('Receipt', receiptSchema);

// make this available to our users in our Node applications
module.exports = receipt;


// ({
//   userNumber: Number,
//   firstName: String,
//   userName: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   isAdmin: Boolean,
//   gender: String,
//   userImageLocation: String,
//   location: String,
//   meta: {
//     mobile: Number,
//     email: String,
//     age: Number,
//     website: String
//   },
//   created_at: Date,
//   updated_at: Date
// });

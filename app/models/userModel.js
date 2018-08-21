var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var userSchema = new Schema({
  userNumber: Number,
  firstName: String,
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: String,
  isAdmin: Boolean,
  userImageLocation: String,
  location: String,
  meta: {
    mobile: Number,
    email: String,
    age: Number,
    website: String
  },
  created_at: Number,
  updated_at: Number
});

var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;

// { "meta":
//    { "mobile": 4054016751,
//      "email": "poladinesh42@gmail.com",
//      "age": 27,
//      "website": "not yet" },
//   "userNumber": 1,
//   "firstName": "Dinesh Kumar",
//   "userName": "poladinesh420@gmail.com",
//   "password": "dinesh",
//   "isAdmin": true,
//   "gender": "Male",
//   "userImageLocation": "google",
//   "location": "drive",
//   "created_at": 1534883691468,
//   "updated_at": 1534883691468
//
// }

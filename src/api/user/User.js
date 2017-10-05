var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String, 
    userName: String,
    email: String,
    password: String,
    dob: Date,
    createdTime: {type : Date, default : Date.now}
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');
var express = require('express');
var app = express();
var db = require('./src/scripts/db');
// ADD THESE TWO LINES
var UserController = require('./src/api/user/UserController');
app.use('/users', UserController);
module.exports = app;
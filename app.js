var express = require('express');
var app = express();
var db = require('./src/scripts/db');
var jwt  = require('jsonwebtoken');

// add UserController
var UserController = require('./src/api/user/UserController');
app.use('/api/users', UserController);

// add AuthController
var AuthController = require('./src/api/auth/AuthController');
app.use('/api/auth', AuthController);

module.exports = app;       
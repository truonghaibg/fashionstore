var mongoose = require('mongoose');
var config = require('../config/DevConfig');

mongoose.connect(config.url);
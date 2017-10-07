var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
    name: String,
    total: Number, 
    description: String,
    image: String,
    createdTime: {type : Date, default : Date.now}
});
mongoose.model('Item', ItemSchema);
module.exports = mongoose.model('Item');
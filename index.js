var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log("hello world");
    res.sendFile(__dirname + '/' + 'index.html');
});

var server = app.listen(8181, 'localhost', function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 });

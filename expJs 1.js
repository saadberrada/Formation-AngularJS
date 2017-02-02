var express = require('express'); 
var app = express(); 
app.use('/javaScript', express.static(__dirname + '/app/javascript'));
app.use('/lib', express.static(__dirname + '/app/lib'));
app.get('/', function (req, res) { 
res.sendfile(__dirname + '/app/test.html'); 
}); 
app.listen(999);
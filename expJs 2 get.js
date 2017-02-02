var ficheInfo=[ 
{ 
id:1, 
nom:"Depuis", 
prenom:"Jean" 
}, 
{ 
id:2, 
nom:"Durand", 
prenom:"Christian" 
}, 
{ 
id:3, 
nom:"Martin", 
prenom:"Michel" 
} 
] 
var express = require('express'); 
var app = express(); 
app.use('/JavaScript', express.static(__dirname + '/app/javascript')); 
app.use('/lib', express.static(__dirname + '/app/lib')); 
app.get('/', function (req, res) { 
res.sendfile(__dirname + '/app/test.html'); 
}); 
app.get('/api/affiche', function(req, res) { 
  res.json(ficheInfo); 
}); 
app.listen(999);


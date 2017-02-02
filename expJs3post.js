var ficheInfo=[] 
var express = require('express'); 
var app = express(); 
app.use('/JavaScript', express.static(__dirname + '/app/javascript')); 
app.use('/lib', express.static(__dirname + '/app/lib')); 
app.use(express.bodyParser()); 
app.get('/', function (req, res) { 
res.sendfile(__dirname + '/app/testpost.html'); 
}); 
app.get('/api/affiche', function(req, res) { 
  res.json(ficheInfo); 
}); 
app.post('/api/formulaire', function(req,res) { 
monPerso=req.body; 
monPerso.id=1+ficheInfo.length 
ficheInfo.push(monPerso); 
res.send(); 
}); 
app.listen(999);
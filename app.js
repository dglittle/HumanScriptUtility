var express = require('express');

var port  = process.env.PORT || 8090;

var app = express();

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.get('/index.html', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/submit', function(req, res){
  res.send('ok!');
});

app.use(express.static(__dirname + '/static'));

app.listen(port);
console.log('Listening on port ' + port);

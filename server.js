var express = require('express');
var app = express();

app.use(express.static(__dirname+'/frontend'));
app.get('/', function(req, res){
  res.sendFile(__dirname+'/frontend/html/index.html');
});
app.get('/text-tags', function(req, res){
  res.sendFile(__dirname+'/frontend/html/texttags.html');
});
app.get('/clock', function(req, res){
  res.sendFile(__dirname+'/frontend/html/clock.html');
});

var port= process.env.PORT  || 3000;
app.listen(port, function(){
    console.log("Site Running on http://localhost:"+port);
}); 
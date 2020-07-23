var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.send('Hello this is home page use /login after the url to login and use /logout after the url to logout ');
})
app.get('/login', function(req, res){
  res.send('you are logged in succesfully');
})
app.get('/logout', function(req, res){
  res.send('you are logged out succesfully');
})
var port= process.env.PORT  || 3000;
app.listen(port, function(){
    console.log("Site Running on http://localhost:"+port);
}); 
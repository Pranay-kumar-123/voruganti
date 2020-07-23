var express = require('express');
var app = express();

app.get('/', (req,res) => {
  res.send("hello");
});
app.get('/login', (req,res) => {
    res.send("you are logged in succesfully");
  });
app.get('/logout', (req,res) => {
    res.send("you are logged out succesfully");
  });
  app.listen(3000, function(){
    console.log("Site Running on http://localhost:");
}); 
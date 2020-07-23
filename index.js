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
app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));
const express = require('express');
const app = express();
const port = 3000;


const bp = require('body-parser');
app.use(bp.urlencoded({ 'extended' : true }));

// static files in the public folder
app.use(express.static('public'));


app.post('/submit', function(req, res){
  console.log(req.body);
  res.send("Name: " + req.body.Name +
           "<br>Email: " + req.body.Email +
           "<br>Message: " + req.body.Message);
});

app.listen(8080);
console.log('app is listening on port 8080');

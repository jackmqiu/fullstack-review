const express = require('express');
let app = express();
const database = require('../database');
const request = require('request');
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // request(`https://api.github.com/users/${req.body.handle}/repos/`, function(err, response, body){
  //   console.log('error:', error); // Print the error if one occurred
  //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //   console.log('body:', body);
  // });
  console.log('post request recieved: ', req.body);
  res.end();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

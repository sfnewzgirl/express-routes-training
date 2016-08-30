// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// Gallery View Route
app.get('/', function (req, res) {
  res.sendFile('views/art-gallery.html' , { root : __dirname});
});

// The Number Guessing Game
var targetNum = 7;
app.get("/pickanumber", function (request, response) {
  var number = request.query.number;
  if (number > targetNum) {
  response.send("Too High");
}
  else if (number < targetNum) {
    response.send("Too Low");
  }
  else if (number == targetNum) {
    response.send("Nailed it!");
  }
});

// Gallery
app.get("/art-gallery", function (request, response) {
  response.send(json);
});

// var artworksArray = {
//   title:
//   artist:
//   description:
// };

// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});

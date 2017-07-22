require("dotenv").config();
var path = require("path");
var express = require("express");
var PORT = process.env.PORT || 9966;
var webpack = require("webpack");
var config = require("./webpack.config");
var app = express();
var compiler = webpack(config);
var MongoClient = require("mongodb").MongoClient;

//custom middleware
var mongoMethod = require("./routes/mongoroutes.js");

// body-parser is the GOAT
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));


app.use(express.static(path.join(__dirname + "/_build")));

// sending React files
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post("/createNewTournament", function(req, res){
  console.log(req.body);

  mongoMethod.newTournament(req.body);

})


app.post("/retrieveTournamentList", function(req, res){
  mongoMethod.ping(res);
})

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at ' + PORT);
});
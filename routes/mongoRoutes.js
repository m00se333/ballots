var MongoClient = require("mongodb").MongoClient;

module.exports.newTournament = (tournament) => {

  MongoClient.connect("mongodb://localhost:27017/ballots", function(err, db){

    db.collection("tournaments").insert({tournament});

  })
};


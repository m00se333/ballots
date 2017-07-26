var MongoClient = require("mongodb").MongoClient;

module.exports.newTournament = (tournament) => {

  MongoClient.connect("mongodb://localhost:27017/ballots", function(err, db){

    db.collection("tournaments").insert({tournament});

  })
};

module.exports.ping = (res) => { //  think a method that checked for the server's status would be hel[pful.I

  MongoClient.connect("mongodb://localhost:27017/ballots", function(err, db){

    db.collection("tournaments").find({}).toArray(function(err, docs){
      var response = [];
      
      docs.forEach(function(x){
        response.push(x.tournament);
      });
      
      res.send(response);
    })
  })
  
}

module.exports.deleteTournament = (tournamentName, res) => {

  MongoClient.connect("mongodb://localhost:27017/ballots", function(err, db){

    db.collection("tournaments").deleteOne({"tournament.name": {$eq: tournamentName }});

      res.send("deleted " + tournamentName);

  })
}






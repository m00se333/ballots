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

module.exports.updateTournament = (tournamentName, updates, res) => {

  MongoClient.connect("mongodb://localhost:27017/ballots", function(err, db){

    db.collection("tournaments").update({"tournament.name": tournamentName}, { $set: {
                                                                                      "tournament.prelims": updates.prelims,
                                                                                      "tournament.outRounds": updates.outRounds,
                                                                                      "tournament.notes": updates.notes,
                                                                                      }
                                                                              })

    res.send("updated " + tournamentName)


  })



}


module.exports.getTournamentData = (tournamentName, res) => {

    MongoClient.connect("mongodb://localhost:27017/ballots", function(err, db){

        var query = {"tournament.name":  {$eq: tournamentName}}

        db.collection("tournaments").find(query, {"_id": 0}).toArray(function(err, docs){

          res.send(docs[0]);
        })
    })
}













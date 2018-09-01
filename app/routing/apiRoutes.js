
var bodyParser = require("body-parser");
var friends = require("../data/friends");

function apiRoutes(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
    var newUser = req.body;
    var userResponses = newUser.scores;
  
      var compareScore= [];
      for (var i = 0; i < friends.length; i++) {
        var diff = 0; 
        for (var j = 0; j < userResponses.length; j++) {
          diff += Math.abs(friends[i].scores[j] - userResponses[j]);
        };
        compareScore.push(diff);
      };
      
      var matchIndex = compareScore.indexOf(Math.min(...compareScore))    
      var match = friends[matchIndex];
      friends.push(newUser);
      res.json(match);
    });
};

module.exports = apiRoutes;
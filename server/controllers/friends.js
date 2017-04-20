console.log('friends controller');

var mongoose = require('mongoose')
var Friends = mongoose.model("Friends")

module.exports = {
  index: function(req,res){
    Friends.find({}, function (err, friends){
        if (err) {
            error = "There was an error getting all the friends from the database"
            console.log(error, err)
            res.json({error: error})
        }
        else {
            console.log("SUCCESS: returned " + friends.length + " from the database")
            res.json(friends)
        }    
    })
  },

  create: function(req,res){
    //create a new friend
    console.log("controller/friends.js: create > req.body is " + req.body)
    var friend = new Friends(req.body)
    friend.save( function (err){
        if (err){
            console.log("ERROR: controller/friends.js: create > error creating friend", err);
            res.json({error: "ERROR: controller/friends.js: error saving new friend data"});        
        }
        else {
            console.log("controller/friends.js: create > friend successfully crearted")
            res.json({status: "ok"})
        }

    })
  },
  
  update: function(req,res){
    console.log("controllers/friends.js > update > req.body is ", req.body);
    Friends.update({_id: req.body._id}, req.body, function(err){
            if (err){
                console.log('ERROR: controllers/friends.js > update > there was an error updating friend: ' + req.body._id)
            }
            else{
                console.log('controllers/friends.js > update > successfully updated friend: ' + req.body._id)
                res.json({status: 'ok'})
            }
        })    
  },

  delete: function(req,res){
    console.log("controllers: friends.js > delete > req.params.id is ", req.params.id)
    Friends.remove({_id: req.params.id}, function (err){
        if (err) {
            var errStr = "There was an error deleting friend " + req.params.id + " from the database"
            console.log(errStr)
            res.json({error: errStr})
        }
        else{
            console.log("successfully deleted friend " + req.params.id + " from the database")
            res.json({status: "ok"})
        }
    })
  },
  show: function(req,res){
    Friends.findOne({_id: req.params.id}, function (err, friend){
        if (err){
            console.log("show: error retrieiving data for friend: " + req.params.id)
            res.json({error: "show: error retrieiving data for friend: " + req.params.id})
        }
        else{
            res.json({friend});
        }
    })
    
  }
}

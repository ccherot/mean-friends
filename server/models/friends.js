console.log('friends model');
var mongoose = require('mongoose');

var FriendsSchema = new mongoose.Schema ({
    firstName: String,
    lastName: String,
    dob: Date, 
    
}, {timestamps: true})

var Friends = mongoose.model('Friends', FriendsSchema)
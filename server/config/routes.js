//need path because of the last route that is handling the 
//case where the use types in a URL
var path = require('path')

var friends = require('../controllers/friends.js')
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.
module.exports = function(app){
    app.get('/friends', function(req, res) {
        friends.index(req, res);
    });
    app.get('/friends/:id', function(req, res) {
        friends.show(req, res);
    });
    app.post('/friends', function(req, res) {
        friends.create(req, res);
    });
    app.put('/friends', function(req, res) {
        friends.update(req, res);
    });

    app.patch('/friends', function(req, res) {
        friends.update(req, res);
    });

    app.delete('/friends/:id', function(req, res) {
        friends.delete(req, res);
    });

    app.get('*', function (req, res) {
        res.sendFile(path.resolve('friends-app/dist/index.html'));
    })
}


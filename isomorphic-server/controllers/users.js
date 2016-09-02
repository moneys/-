var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.index = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            res.send(err);
        } else {
            console.log('user.find():')
            console.log(users)
            res.render('user', {title: 'user',users:users});
        }
    });
};
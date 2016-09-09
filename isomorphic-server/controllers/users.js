'use strict'
var React = require('react');
var MyTable = React.createFactory(require("../components/MyTable"));
var mongoose = require('mongoose');
var User = mongoose.model('User');
exports.index = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            res.send(err);
        } else {
            console.log('user.find():')
            console.log(users)
            res.render('user', {title: 'user', users: users});
        }
    });
};
exports.index2 = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            res.send(err);
        } else {
            var html = React.renderToString(MyTable({users: users}));
            console.log('html:', +html);
            res.render('user2.ejs', {title: 'user', html: html});
        }
    });
};

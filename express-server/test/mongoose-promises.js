var mongoose = require('mongoose');

var uri = 'mongodb://172.19.60.18:27017/local';
var options = {promiseLibrary: require('bluebird')};
var db = mongoose.createConnection(uri, options);
mongoose.Promise = require('bluebird');

// var db = mongoose.connect(uri);
var userSchema = mongoose.Schema({
    name: String,
    age: {type: Number, min: 18, max: 25}
}, {
    collection: 'user'
});

userSchema.methods.speak = function () {
    var greeting = 'My name is ' + this.name + ' and I am ' + this.age + ' years old';
    console.log(greeting);
};

var UserModel = db.model('user', userSchema, 'user');


/*
 var sqq = new UserModel({name: 'xiaohui', age: 18});
 sqq.save(function (err, user) {
 if (err)   return console.log(err);
 console.log('save user :');
 user.speak();
 });
 */


var query = UserModel.find();
query
    .where('age').lt(20)
    .then(function (err, users) {
        if (err)  console.log(err);
        else {
            console.log('query users: ');
            console.log(users);
        }
    });


var mongoose = require('mongoose');

var uri = 'mongodb://172.19.60.18:27017/local';
var db = mongoose.connect(uri);
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

var UserModel = mongoose.model('user', userSchema, 'user');

console.log('connect success.');
UserModel.find({}, function (err, users) {
    if (err)  console.log(err);
    else {
        console.log('query users: ');
        console.log(users);
    }
});
var sqq = new UserModel({name: 'qianqian', age: '23'});
sqq.speak();


/*

 sqq.save(function (err, user) {
 if (err)   return console.log(err);
 user.speak();
 });
 */


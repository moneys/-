var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    age: {type: Number}
});
userSchema.methods.speak = function () {
    var greeting = 'My name is ' + this.name + ' and I am ' + this.age + ' years old';
    console.log(greeting);
};

mongoose.model('User', userSchema, 'user');

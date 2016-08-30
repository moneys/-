var mongoose = require('mongoose');

var uri = 'mongodb://172.19.60.18:27017/local';
//链接数据库
mongoose.connect(uri);
// 定义表结构对象
var userSchema = mongoose.Schema({
    name: String,
    age: {type: Number, min: 18, max: 25}
});
//表结构对象添加操作方法
userSchema.methods.speak = function () {
    var greeting = 'My name is ' + this.name + ' and I am ' + this.age + ' years old';
    console.log(greeting);
};
//使用表结构对象结合数据库集合生成集合模型
var UserModel = mongoose.model('user', userSchema, 'user');
UserModel.find({}, function (err, users) {
    if (err)  console.log(err);
    else {
        console.log('query users: ');
        console.log(users);
    }
});
// 创建一个模型实例
var sqq = new UserModel({name: 'girl', age: '19'});
sqq.speak();
// 保存这个模型实例
sqq.save(function (err, user) {
    if (err)   return console.log(err);
    user.speak();
});


var { mutipleMongooseToObject } = require('../util/mongoose');
var { mongooseToObject } = require('../util/mongoose');
class Authcontroller {

login = function(req,res){
    res.render('loginuser');
};
}
module.exports = new Authcontroller()
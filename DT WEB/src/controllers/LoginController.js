const User = require('../models/user')
const Course = require('../models/Course')
const Order = require('../models/order')
const Admin = require('../models/admin')
const { mutipleMongooseToObject } = require('../util/mongoose')
const { mongooseToObject } = require('../util/mongoose')

class LoginController {

    // /login
    index(req, res, next) {
        var username = req.body.username
        var password = req.body.password

        //user
        User.findOne({
                username: username,
                password: password,
                
            })
            .then(data => {
                if (data) {
                    
                    res.cookie( 'username', username, {


                    });
                    
                    console.log('login success');
                    Course.find({})
                        .then(courses => {
                            res.render('login', {
                                courses: mutipleMongooseToObject(courses)
                            })
                        })
                        .catch(next)
                }else {
                    console.log('login fail');
                    res.redirect('/');
                }
            })
            .catch(err => {
                res.status(500).json('co loi ben server');
            })
            //ADMIN
    }

    //login/myprofile
    myprofile(req, res, next) {
        User.findOne(req.params.slug)
            .then((user) => {
                res.render('myprofile', {
                    user: mongooseToObject(user)
                })
            })
            .catch(next)


    }

    //Hiển thị form

    cart(req, res, next) {
        res.render('cart')
    }

    pay(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('pay', {
                    course: mongooseToObject(course)
                })
            })
            .catch(next)
    }

    add(req, res) {

        const order = new Order(req.body)
        order.save()
            .then(() => res.redirect('back'))
            .catch()
    }

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('productlog', {
                    course: mongooseToObject(course)
                })
            })
            .catch(next)
    }
    ttuser(req, res, next) {
        var username = req.cookies.username;
        //req.cookie.username;
        //const hoten = req.query.ttuser;
        User.findOne({
            username: username
            })
            .then(data => {
                if (data) {
                    
                    res.cookie( 'username', username, {


                    });
                    
                    console.log(data.hoten);
                    //res.send();
                    res.render('myprofile',{
                        hoten:data.hoten,
                        username: data.username,
                        email: data.email,
                        sodienthoai: data.sodienthoai,
                        diachi:data.diachi,
                        ngaysinh : data.ngaysinh
                    });
                }else {
                    console.log('fail');
                    res.redirect('/login');
                }
            })
            .catch(err => {
                res.status(500).json('co loi ben server');
            })
    }
    
    // myprofile(req, res, next) {
    //     var cookie1 = document.cookie;
    //     console.log(cookie1)
    //     User.findOne({
    //         username: cookie1
    //         })
    //         console.log(username)
    //         .then((user) => {
    //             res.render('myprofile', {
    //                 user: mongooseToObject(user)
    //             })
    //         })
    //         .catch(next)

    // }
    // getUserById(req, res, next, username){
    //     var cookie = document.cookie;
    //     User.findOne({
    //         username: cookie,
    //     })
    //     console.log(username)
    //     .exec((err, user) =>{
    //         if(err || user) {
    //           return res
    //              .status (400)
    //              .json({ error: "404 todo not found" });
    //         }

    //         req.user = user;
    //         next();
    //     });
    // };
    // getUser(req, res){
    //    return res.json(req.username);
    // };

}

module.exports = new LoginController()
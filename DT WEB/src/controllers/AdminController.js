const User = require('../models/user')
const Course = require('../models/Course')
const Order = require('../models/order')
const Admin = require('../models/admin')
const { mutipleMongooseToObject } = require('../util/mongoose')
const { mongooseToObject } = require('../util/mongoose')

class LoginController {

    // /login
    indexadmin(req, res, next) {
        var username = req.body.username
        var password = req.body.password

        //admin
        Admin.findOne({
            username: username,
            password: password,
        })
        .then(data => {
            if (data) {
                console.log('login admin success');
                Course.find({})
                    .then(courses => {
                        res.render('admin', {
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
    }

    // /login/myprofile
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
    sua(req, res, next) {
        Course.find({})
            .then(courses => res.render('edit', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
    }

    editpro(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('editpro', {
                course: mongooseToObject(course)
            }))
            .catch(next)
    }

    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('edit'))
            .catch(next)
    }

    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    create(req, res, next) {
        res.render('create')
    }

    //Lưu dữ liệu
    store(req, res, next) {
        const course = new Course(req.body)
        course.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }
}

module.exports = new LoginController()
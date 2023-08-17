const Course = require('../models/Course')
const User = require('../models/user')
const { mutipleMongooseToObject } = require('../util/mongoose')

class SiteController {

    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }


    search(req, res, next) {
        const name = req.query.search;
        console.log(name);
        Course.find({ name: name })
            .then(courses => res.render('search', {

                courses: mutipleMongooseToObject(courses),

            }))
            .catch(next)
    }

    searchuser(req, res, next) {
        const name = req.query.searchuser;
        console.log(name);
        Course.find({ name: name })
            .then(courses => res.render('searchuser', {

                courses: mutipleMongooseToObject(courses),

            }))
            .catch(next)
    }
    searchadmin(req, res, next) {
        const name = req.query.searchadmin;
        console.log(name);
        Course.find({ name: name })
            .then(courses => res.render('searchadmin', {

                courses: mutipleMongooseToObject(courses),

            }))
            .catch(next)
    }
}

module.exports = new SiteController()
const Course = require('../models/Course')
const { mongooseToObject } = require('../util/mongoose')

class CreateController {

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

module.exports = new CreateController()
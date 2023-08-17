const Course = require('../models/Course')
const { mongooseToObject } = require('../util/mongoose')

class CourseController {

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('product', {
                    course: mongooseToObject(course)
                })
            })
            .catch(next)
    }

}

module.exports = new CourseController()
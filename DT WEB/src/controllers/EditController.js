const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../util/mongoose')
const { mongooseToObject } = require('../util/mongoose')

class EditController {

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

}

module.exports = new EditController()
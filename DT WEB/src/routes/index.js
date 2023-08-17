const siteRouter = require('./site')
const loginsRouter = require('./logins')
const registerRouter = require('./register')
const coursesRouter = require('./courses')
const createRouter = require('./create')
const editRouter = require('./edit')
const adminRoter = require('./admin')
//const loginuser = require('./authroute')

function route(app) {

    app.use('/register', registerRouter)

    app.use('/login', loginsRouter)

    app.use('/admin', adminRoter)

    app.use('/home', coursesRouter)

    //app.use('/loginuser', loginuser)

    app.use('/', createRouter)

    app.use('/', editRouter)

    //Trang chủ
    app.use('/', siteRouter)

    // app.use('/login/myprofile/edituser', (req, res) => {
    //     res.render('edituser');
    // })


}

module.exports = route
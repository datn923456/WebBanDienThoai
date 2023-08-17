const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
//var cookieParser = require('cookie-parser')
const route = require('./routes')
var ADMIN = require("./models/admin");
const methodOverride = require("method-override")
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/authroute');



const db = require('./config/db')


app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// connect db to express
db.connect();

app.use(methodOverride('_method'))
    //templates engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {

    }
}))
app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'resources', 'views'))


app.get('/login/get', (req, res) =>{
     const cookies = req.cookies;//req.headers.cookie;
     res.send(cookies)
})
// app.post('/login', (req, res) =>{
//     // const cookies = req.cookies;//req.headers.cookie;
//     // res.send(cookies)
//     console.log(req.body.username)
//     console.log(req.body.password)
// })
// app.set('/', (req, res) => {
//     res.clearcookie( 'blog')
//     res.clearcookie( 'username')
//     res.clearcookie( 'password')
// })
app.use('/', authRoute);


route(app)



// app.get('/login/myprofile/edituser', (req, res) => {
//         res.render('edituser');
//     })

//trang login
// app.get('/login', (req, res) => {
//     //res.render('headeradmin');
//     res.render('bodyadmin');

// })




// app.post('/admin', (req, res, next) => {
//     var name = req.body.txtName
//     var password = req.body.password

//     userModel.findOne({
//             username: username,
//             password: password
//         })
//         .then(data => {
//             if (data) {
//                 console.log('login success');
//                 res.redirect('login');
//             } else {
//                 console.log('login fail');
//                 res.redirect('/');
//             }
//         })
//         .catch(err => {
//             res.status(500).json('co loi ben server');
//         })
// })



app.listen(port)
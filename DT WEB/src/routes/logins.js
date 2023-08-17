const express = require('express')
const router = express.Router()

const loginController = require('../controllers/LoginController')
const siteController = require('../controllers/SiteController')
// const {getUserById,
//     getUser,
// } = require('../controllers/LoginController')
router.post('/add', loginController.add)
//router.get('/myprofile', loginController.myprofile)

router.get('/myprofile', loginController.ttuser)
router.get('/searchuser', siteController.searchuser)

// router.get('/:id', loginController.ttuser)

router.get('/:slug/pay', loginController.pay)


router.get('/:slug', loginController.show)
router.post('/', loginController.index)

// router.get('/login/:id', function(req, res) {
//     var id = req.body.id;
//     console.log(id); //chỗ này xem có lấy dc id không, nếu không thì khai báo: var id = req.body.id xem.
//     db_news.news.find({_id: mongojs.ObjectId(id)}, function(err, data) {
//     res.render('/login', {new: data});
//     })
// });
// router.param('myprofile', getUserById)

// router.get('/login/myprofile/:username', getUser)
module.exports = router
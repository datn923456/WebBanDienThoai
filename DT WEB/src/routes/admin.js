const express = require('express')
const router = express.Router()

const AdminController = require('../controllers/AdminController')
const siteController = require('../controllers/SiteController')

router.post('/add', AdminController.add)

router.get('/edit', AdminController.sua)
router.get('/edit', AdminController.delete)
router.get('/edit', AdminController.editpro)
router.get('/edit', AdminController.update)

router.get('/create', AdminController.create)

router.get('/searchadmin', siteController.searchadmin)

router.get('/:slug/pay', AdminController.pay)


router.get('/:slug', AdminController.show)
router.post('/', AdminController.indexadmin)



module.exports = router
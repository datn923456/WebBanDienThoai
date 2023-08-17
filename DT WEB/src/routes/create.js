const express = require('express')
const router = express.Router()

const createController = require('../controllers/CreateController')

router.get('/create', createController.create)
router.post('/store', createController.store)

module.exports = router
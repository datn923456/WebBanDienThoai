const express = require('express')
const router = express.Router()

const registerController = require('../controllers/RegisterController')


router.post('/', registerController.index)

module.exports = router
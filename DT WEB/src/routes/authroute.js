var express = require('express');
var router = express.Router();
var controller = require('../controllers/Authcontroller');

router.get('/loginuser', controller.login);

module.exports = router;
const express = require('express')
const router = express.Router()

const editController = require('../controllers/EditController')

router.get('/edit', editController.sua)
router.get('/:id', editController.editpro)
router.put('/:id', editController.update)
router.delete('/:id', editController.delete)


module.exports = router
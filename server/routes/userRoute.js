const express = require('express')
const router = express.Router()
const users = require('../controller/userController.js')

router.get('/get', users.getUser)
router.post('/add', users.addUser)
router.delete('/:id/delete', users.deleteUser)
router.put('/:id/update', users.updateUser)

module.exports = router
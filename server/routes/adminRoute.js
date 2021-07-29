const express = require('express')
const router = express.Router()
const admin = require('../controller/adminController')

router.get('/getAdmin', admin.getAdmin)
router.post('/addAdmin', admin.addAdmin)
router.delete('/deleteAdmin/:id', admin.deleteAdmin)
router.put('updateAdmin/:id', admin.updateAdmin)

module.exports = router
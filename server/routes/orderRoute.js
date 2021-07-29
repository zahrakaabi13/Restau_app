const express = require('express')
const router = express.Router()
const order = require('../controller/orderController')

router.get('/getOrder', order.getOrder)
router.post('/addOrder', order.addOrder)
router.delete('/deleteOrder/:id', order.deleteOrder)
router.put('/updateOrder/:id', order.updateOrder)

module.exports = router
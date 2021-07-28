const express = require('express')
const router = express.Router()
const products = require('../controller/productController')

router.get('/getProduct', products.getProduct)
router.post('/addProduct', products.addProduct)
router.delete('/deleteProduct/:id', products.deleteProduct)
router.put('updateProduct/:id', products.updateProduct)

module.exports = router
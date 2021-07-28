const PRODUCTS = require('../models/productModel.js')

module.exports = {
    getProduct: async(req,res) => {
        try{
            const products = await PRODUCTS.find()
            res.json(products)
        }catch(error){
            console.log(error.message)
        }
    },
    addProduct: async(req,res) => {
        const namePlat = req.body.namePlat
        const descripPlat = req.body.descripPlat
        const pricePlat = req.body.pricePlat
        const ratePlat = req.body.ratePlat
        try{
            const products = new PRODUCTS({
                namePlat,
                descripPlat,
                pricePlat,
                ratePlat
            })
            await products.save()
            res.json(products)
        }catch(error){
            console.log(error.message)
        }
        },
    deleteProduct: async(req,res) => {
        try{
            const products = await PRODUCTS.findByIdAndDelete(req.params.id)
            res.json(products)
        }catch(error){
            console.log(error.message)
        }
    },
    updateProduct: async(req,res) => {
        try{
            const products = await PRODUCTS.findByIdAndUpdate(req.params.id, req.body, {new:true})
            res.json(products)
        }catch(error){
            console.log(error.message)
        }
    }
}
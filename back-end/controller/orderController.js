const ORDER = require('../models/orderModel')

module.exports = {
    getOrder: async(req,res) => {
        try{
            const order = await ORDER.find()
            res.json(order)
        }catch(error){
            console.log(error.message)
        }
    },
    addOrder: async(req,res) => {
        const numOrder = req.body.numOrder
        const productOrder = req.body.productOrder
        const qantity = req.body.qantity
        const priceOrder = req.body.priceOrder
        const state = req.body.state
        try{
            const order = new ORDER({
                numOrder,
                productOrder,
                qantity,
                priceOrder,
                state
            })
            await order.save()
            res.json(order)
        }catch(error){
            console.log(error.message)
        }
        },
    deleteOrder: async(req,res) => {
        try{
            const order = await ORDER.findByIdAndDelete(req.params.id)
            res.json(order)
        }catch(error){
            console.log(error.message)
        }
    },
    updateOrder: async(req,res) => {
        try{
            const order = await ORDER.findByIdAndUpdate(req.params.id, req.body, {new:true})
            res.json(order)
        }catch(error){
            console.log(error.message)
        }
    }
}
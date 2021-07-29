const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    numOrder : {
        type : Number,
        required : true
    },
    productOrder : {
        type : String,
        required : true
    },
    qantity : {
        type : String,
        required : true
    },
    priceOrder : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    }
})
module.exports = order = mongoose.model('order',orderSchema)
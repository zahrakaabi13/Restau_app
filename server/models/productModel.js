const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    imagePlat : {
        type : String,
        required : true
    },
    namePlat : {
        type : String,
        required : true
    },
    descripPlat :{
        type : String,
        required : true
    },
    pricePlat:{
        type : String,
        required : true
    },
    ratePlat : {
        type : Number,
        required : true
    }
})
module.exports = products = mongoose.model('products',productSchema)
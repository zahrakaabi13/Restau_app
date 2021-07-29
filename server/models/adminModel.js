const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    nameAdmin : {
        type : String,
        required : true
    },
    mailAdmin : {
        type : String,
        required : true
    },
    passwordAdmin : {
        type : String,
        required : true
    }
})
module.exports = admin = mongoose.model('admin',adminSchema)
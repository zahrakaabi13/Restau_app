const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    nom: {
        type : String,
        required : true
    },
    prenom : {
        type : String,
        required : true
    }
})
module.exports = users = mongoose.model('users',userSchema)
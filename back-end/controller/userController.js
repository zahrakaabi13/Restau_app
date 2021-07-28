const USERS = require('../models/userModel.js')

module.exports = {
    getUser: async(req,res) => {
        try{
            const users = await USERS.find()
            res.json(users)
        }catch(error){
            console.log(error.message)
        }
    },
    addUser: async(req,res) => {
        const nom = req.body.nom
        const prenom = req.body.prenom
        try{
            const users = new USERS({
                nom,
                prenom
            })
            await users.save()
            res.json(users)
        }catch(error){
            console.log(error.message)
        }
        },
    deleteUser: async(req,res) => {
        try{
            const users = await USERS.findByIdAndDelete(req.params.id)
            res.json(users)
        }catch(error){
            console.log(error.message)
        }
    },
    updateUser: async(req,res) => {
        try{
            const users = await USERS.findByIdAndUpdate(req.params.id, req.body, {new:true})
            res.json(users)
        }catch(error){
            console.log(error.message)
        }
    }
}
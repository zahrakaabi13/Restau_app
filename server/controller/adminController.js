const ADMIN = require('../models/adminModel.js')

module.exports = {
    getAdmin: async(req,res) => {
        try{
            const admin = await ADMIN.find()
            res.json(admin)
        }catch(error){
            console.log(error.message)
        }
    },
    addAdmin: async(req,res) => {
        const nameAdmin = req.body.nameAdmin
        const mailAdmin = req.body.mailAdmin
        const passwordAdmin = req.body.passwordAdmin
        try{
            const admin = new ADMIN({
                nameAdmin,
                mailAdmin,
                passwordAdmin
            })
            await admin.save()
            res.json(admin)
        }catch(error){
            console.log(error.message)
        }
        },
    deleteAdmin: async(req,res) => {
        try{
            const admin = await ADMIN.findByIdAndDelete(req.params.id)
            res.json(admin)
        }catch(error){
            console.log(error.message)
        }
    },
    updateAdmin: async(req,res) => {
        try{
            const admin = await ADMIN.findByIdAndUpdate(req.params.id, req.body, {new:true})
            res.json(admin)
        }catch(error){
            console.log(error.message)
        }
    }
}
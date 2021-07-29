//creation d'un service web de node js

const express = require('express')
const app = express() //ne5ou meenou une petite app nekhdem aliha
const db = require('./config/db')
db()
//const body = require('body-parser')
app.use(express.json())
const cors = require('cors')
app.use(cors())
const users = require('./routes/userRoute.js')
const products = require('./routes/productRoute')
const admin = require('./routes/adminRoute')
const order = require('./routes/orderRoute')

app.use('/app/user',users)
app.use('/app/products', products)
app.use('/app/admin', admin)
app.use('/app/order', order)

//server needs PORT
//cnx to server
app.listen('4000', (err) => {
    if(err){
    console.log('error that prevents server to run')
    } else {
    console.log('Server is running on port 4000')
}
})
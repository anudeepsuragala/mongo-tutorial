const express=require("express")
const mongoose=require('mongoose')
const bodyparser = require('body-parser')
const dotenv=require('dotenv')


const app = express()
const port= process.env.port || 5000


dotenv.config()
mongoose.connect(process.env.mongo_uri)
.then(() =>{
    console.log("monogodb connected sucessfully")
})
.catch((error)=>{
    console.log("Error,Incorrect password")
})


app.listen(port,()=>{
    console.log(`server started and running st ${port}`)

})


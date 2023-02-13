const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
const route=require("../route")

mongoose.connect("mongodb+srv://RUPALIKUMARI:Ja8ibOldIbkNORKK@cluster0.wwhf9wj.mongodb.net/RUPALIDB",
{
    useNewUrlParser:true
})
.then (()=>console.log("mongodb is connected"))
.catch((err)=>console.log (err))

app.use ('/',route)

app.listen(3000,()=>{
    console.log("express app running on port")
})
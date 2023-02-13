const mongoose=require("mongoose");
const student2=new mongoose.Schema({
RollNo:{
    type:Number,
},
father:{
    type:String,
},
mother:{
    type:String,
},
},{timestamps:true});

module.exports=mongoose.model("std2",student2);
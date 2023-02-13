const mongoose=require("mongoose");
const student1=new mongoose.Schema({
RollNo:{
    type:Number,
},
studentName:{
    type:String,
},
EmailId:{
    type :String,
},
},{timestamps:true});

module.exports=mongoose.model("std1",student1);

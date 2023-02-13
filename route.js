const express=require("express");
const router=express.Router()


const {create1,create2,findData}=require("./src/controller/controller");

router.post("/data1",create1)
router.post("/data2",create2)
router.get("/getData/:rollNo",findData)


module.exports=router
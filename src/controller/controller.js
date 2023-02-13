const student1=require("../model/model1")
const student2=require("../model/model2")



const create1=async function(req,res){
    const data=req.body;
    let create=await student1.create(data);
    res.status(201).send(create)
};

const create2=async function(req,res){
    const data=req.body;
    let create=await student2.create(data);
    res.status(201).send(create)
};

const findData = async function (req, res) {
    const data1 = await student1.findOne({ RollNo: req.params.rollNo }); 
    const data2 = await student2.findOne({ RollNo: req.params.rollNo });
  
    console.log(data1);
    let obj = {
      rollNo: data1["RollNo"],
      studentName: data1["studentName"],
      EmailId: data1["EmailId"],
      father: data2["father"],
      mother: data2["mother"],
    };
    res.send({ data: obj });
  };


module.exports={create1,create2,findData}
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sample",{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
   console.log("Connected to Mongodb");
}).catch((err)=>{
    console.log(err);
});

const student = new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
})

const Student = new mongoose.model("Student",student);

const adder = async ()=>{
    const ss = await Student.create ({
        name:"Aakash Singh",
        workout:true,
        height:6,
    })

    const ss2 = await Student.create({
        name:"Aditya",
        workout:true,
        height:6,
    })

}

const adding = async ()=>{
    const ans= await Student.find({height:{$gt:6}})
    console.log(ans);
}

adder();
adding();


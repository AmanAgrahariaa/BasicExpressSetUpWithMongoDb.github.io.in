const mongoose = require("mongoose");


const Connection = ()=>{
     mongoose.set('strictQuery', true);

  mongoose.connect("mongodb://localhost:27017/CRUD_APPLICATION",{useUnifiedTopology : true,useNewUrlParser: true})
  .then(()=>console.log("connection successfull .."))
  .catch((err)=>console.log(err));

}
Connection();

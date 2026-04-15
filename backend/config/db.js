const mongoose = require("mongoose");
const connectDB= async ()=>{
    try{
        mongoose.connect(process.env.MONGODB_ATLAS)
        console.log("database connected successfully");

    }catch(err){
        console.log("err in connecting to database"+ err);
    }
}
module.exports = connectDB;
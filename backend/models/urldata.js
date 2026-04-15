const mongoose = require("mongoose");
const urlschema = mongoose.Schema({
    longurl:{type:String,required:true},
    shorturl:{type:String,required:true,unique:true},

})

const urlmodel = mongoose.model("urldata",urlschema);
module.exports = urlmodel;
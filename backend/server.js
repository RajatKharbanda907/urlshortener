const express = require("express");
require("./config/env");
const app = require("./app");

app.listen(process.env.PORT,process.env.HOST,(err)=>{
    if(err){
        console.log(err);
        console.log("error in starting server");
    }else{
        console.log(`server is running at http://${process.env.HOST}:${process.env.PORT}`)
    }
})
const mongoose = require('mongoose');
const express = require('express')

mongoose.connect('mongodb://localhost:27017/olympic',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successful")
}).catch((err)=>{
    console.log(err.message)
})
const mongoose = require('mongoose');
const express = require('express')

require("dotenv").config();


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Connection Successful")
}).catch((err)=>{
    console.log(err.message)
})

//seccondtry
//XdCz0jqHuVYylrfJ


// mongoose.connect('mongodb://localhost:27017/olympic',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("Connection Successful")
// }).catch((err)=>{
//     console.log(err.message)
// })


//mongodb+srv://jeetabhi:<password>@cluster0.yzi9cn2.mongodb.net/?retryWrites=true&w=majority
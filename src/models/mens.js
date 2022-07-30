const  mongoose  = require("mongoose");


const menSchema = new mongoose.Schema({
      ranking:{
        type:Object,
        required:true,
      },
       name:{
        type:String,
        required:true,
        trim:true
       },
       dob:{
        type:Date,
        required:true,
       },
       country:{
        type:String,
        required:true,
       },
       score:{
        type:Number,
        required:true,
       },
       event:{
        type:String,
        default: "100m"
       }

})
//we are creating a new collection
const MensRanking = new mongoose.model("menRanking" , menSchema )

module.exports = MensRanking;
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const connect =  require("../src/db/conn");

const datacontroll = require("../src/routers/data.controller")
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use("/cart", datacontroll);


// app.get("/",async(req,res)=>{   
//     res.send("Hello From the Abhi")
// })

// // we will handle post request
// app.post("/mens" , async(req,res)=>{
//     try{
//         const addingRecord =  new MensRanking(req.body)
//         //console.log(req.body)
//        const insertMens = await addingRecord.save()
//             res.status(201).send(insertMens);
//     }
//     catch(e){
//        res.status(400).send(e.message)
//     }
// })


// //get method
// app.get("/mens" , async(req,res)=>{
//     try{
//         const getData =  await MensRanking.find({});
//             res.send(getData);
//     }
//     catch(e){
//        res.status(400).send(e.message)
//     }
// })


// //get by id

// app.get("/mens/:id" , async(req,res)=>{
//     try{
//         const _id = req.params.id;
//       //  const getData =  await MensRanking.findById({_id:_id}); // or
//         const getData =  await MensRanking.findById(_id).sort({"ranking":1});
//             res.send(getData);
//     }
//     catch(e){
//        res.status(400).send(e.message)
//     }
// })

// //patch by id

// app.patch("/mens/:id" , async(req,res)=>{
//     try{
//         const _id = req.params.id;
//       //  const getData =  await MensRanking.findById({_id:_id}); // or
//         const getData =  await MensRanking.findByIdAndUpdate(_id,req.body,{
//             new:true
//         });
//             res.send(getData);
//     }
//     catch(e){
//        res.status(500).send(e.message)
//     }
// })

// //delete by id

// app.delete("/mens/:id" , async(req,res)=>{
//     try{
//         const _id = req.params.id;
//       //  const getData =  await MensRanking.findById({_id:_id}); // or
//         const getData =  await MensRanking.findByIdAndDelete(_id);
//             res.send(getData);
//     }
//     catch(e){
//        res.status(500).send(e.message)
//     }
// })



app.listen(PORT, async()=>{

    try{
        await connect();
        console.log("DB is Connected..!")
    }catch(err){
        console.log("Err", err)
    }
})

////https://ecomdatafordemopart.herokuapp.com/
//https://git.heroku.com/ecomdatafordemopart.git
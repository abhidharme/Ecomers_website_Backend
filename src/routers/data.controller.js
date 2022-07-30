const express = require("express");

const menRanking = require("../models/mens")

const router = express.Router();



// router.get("/",async(req,res)=>{   
//     res.send("Hello From the Abhi")
// })

// we will handle post request
router.post("/cart" , async(req,res)=>{
    // try{
    //     const addingRecord =  new menRanking(req.body)
    //     //console.log(req.body)
    //    const insertMens = await addingRecord.save()
    //         res.status(201).send(insertMens);
    // }
    // catch(e){
    //    res.status(400).send(e.message)
    // }
    const addingRecord = await menRanking.create(req.body);
    return res.status(201).send({addingRecord});
})


//get method
router.get("/cart" , async(req,res)=>{
    // try{
    //     const getData =  await menRanking.find({});
    //         res.send(getData);
    // }
    // catch(e){
    //    res.status(400).send(e.message)
    // }
    const getData = await menRanking.find().lean().exec();
    return res.status(201).send({getData});
})


//get by id

// router.get("/mens/:id" , async(req,res)=>{
//     try{
//         const _id = req.params.id;
//       //  const getData =  await menRanking.findById({_id:_id}); // or
//         const getData =  await menRanking.findById(_id).sort({"ranking":1});
//             res.send(getData);
//     }
//     catch(e){
//        res.status(400).send(e.message)
//     }
// })

//patch by id

// router.patch("/mens/:id" , async(req,res)=>{
//     try{
//         const _id = req.params.id;
//       //  const getData =  await menRanking.findById({_id:_id}); // or
//         const getData =  await menRanking.findByIdAndUpdate(_id,req.body,{
//             new:true
//         });
//             res.send(getData);
//     }
//     catch(e){
//        res.status(500).send(e.message)
//     }
// })

//delete by id

// router.delete("/mens/:id" , async(req,res)=>{
//     try{
//         const _id = req.params.id;
//       //  const getData =  await menRanking.findById({_id:_id}); // or
//         const getData =  await menRanking.findByIdAndDelete(_id);
//             res.send(getData);
//     }
//     catch(e){
//        res.status(500).send(e.message)
//     }
// })

module.exports = router;

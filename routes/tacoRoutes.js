const express = require('express');
const router = express.Router();
const fs = require("fs")

router.get("/",(req,res)=>{
    fs.readFile("./data/tacos.json","utf-8",(err,data)=>{
        if(err){
            throw err
        } else {
            const tacos = JSON.parse(data);
            res.json(tacos)
        }
    })
})

router.post("/",(req,res)=>{
    fs.readFile("./data/tacos.json","utf-8",(err,data)=>{
        if(err){
            throw err
        } else {
            
            const tacos = JSON.parse(data);
            console.log(req.body)
            tacos.push(req.body)
            fs.writeFile("./data/tacos.json",JSON.stringify(tacos,null,2),(err,data)=>{
                if(err){
                    throw err
                }
                else {
                    res.json(tacos)
                }
            })
        }
    })
})

module.exports = router;
const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get("/",(req,res)=>{
    fs.readFile("./data/people.json","utf-8",(err,data)=>{
        if(err){
            throw err
        } else {
            const people = JSON.parse(data);
            res.json(people)
        }
    })
})

router.post("/",(req,res)=>{
    fs.readFile("./data/people.json","utf-8",(err,data)=>{
        if(err){
            throw err
        } else {
            
            const people = JSON.parse(data);
            console.log(req.body)
            people.push(req.body)
            fs.writeFile("./data/people.json",JSON.stringify(people,null,2),(err,data)=>{
                if(err){
                    throw err
                }
                else {
                    res.json(people)
                }
            })
        }
    })
})

module.exports = router;
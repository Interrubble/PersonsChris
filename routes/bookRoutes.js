const express = require('express');
const router = express.Router();
const fs = require("fs")

router.get("/",(req,res)=>{
    fs.readFile("./data/books.json","utf-8",(err,data)=>{
        if(err){
            throw err
        } else {
            const books = JSON.parse(data);
            res.json(books)
        }
    })
})

router.post("/",(req,res)=>{
    fs.readFile("./data/books.json","utf-8",(err,data)=>{
        if(err){
            throw err
        } else {
            
            const books = JSON.parse(data);
            console.log(req.body)
            books.push(req.body)
            fs.writeFile("./data/books.json",JSON.stringify(books,null,2),(err,data)=>{
                if(err){
                    throw err
                }
                else {
                    res.json(books)
                }
            })
        }
    })
})

module.exports = router;
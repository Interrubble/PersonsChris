const express = require('express');
const router = express.Router();
const path = require("path");

const personRoutes = require("./personRoutes")
router.use("/persons",personRoutes)

const bookRoutes = require("./bookRoutes")
router.use("/books",bookRoutes)

const tacoRoutes = require("./tacoRoutes")
router.use("/tacos",tacoRoutes)

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/index.html"))
})


module.exports = router;
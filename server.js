const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
//parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serves css/js/static assets
app.use(express.static("public"))
const allRoutes = require("./routes")
app.use(allRoutes);

app.listen(PORT,()=>{
    console.log("listening to port " + PORT)
})
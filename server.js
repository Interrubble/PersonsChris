const express = require("express");
const app = express();
const PORT = 3000;
//parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//serves css/js/static assets
app.use(express.static("public"))
const allRoutes = require("./routes")
app.use(allRoutes);


app.post("/books",(req,res)=>{
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



app.listen(PORT,()=>{
    console.log("listening to port " + PORT)
})
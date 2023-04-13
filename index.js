const bodyParser = require("body-parser");
const express = require("express");
const app = express();


// View engine
app.set('view engine','ejs');

// static
app.use(express.static('public'));





///
app.get("/",(req,res)=>{
                  res.render("home/index")
})

///
app.get("/contato",(req,res)=>{
                  res.render("contato/index")
})

///
app.listen(1313,()=>{
                  console.log("O servidor está rodando!")
})
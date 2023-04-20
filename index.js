const bodyParser = require("body-parser");
const express = require("express");
const app = express();


// View engine
app.set('view engine','ejs');

// static
app.use(express.static('public'));

//bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



///
app.get("/",(req,res)=>{
                  res.render("home/index")
})

///
app.get("/faleComAgente",(req,res)=>{
                  res.render("faleComAgente/index")
})
app.post("/contatosubmit",(req,res)=>{
                  res.send("foi")
})

///
app.listen(1313,()=>{
                  console.log("O servidor está rodando!")
})
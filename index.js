const express = require("express");
const app = express();

app.get("/",(req,res)=>{
                  res.send("AlmaCultural");
})

app.listen(1313,()=>{
                  console.log("O servidor está rodando!")
})
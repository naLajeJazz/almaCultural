const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const connection=require("./database/database");
const falacomagente_data_form=require("./database/falacomagente");

const categoriesController=require("./categories/CategoriesController");
const articlesController=require("./articles/ArticlesController");

const Article=require("./articles/Article");
const Category=require("./categories/Category");

//database
connection.authenticate()
          .then(()=>{
                  console.log("conecção feita com o banco de dados!")
          })
          .catch((msgErro)=>{
                  console.log(msgErro)
          });

// View engine
app.set('view engine','ejs');

// static
app.use(express.static('public'));

//bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//rotas

///
app.get("/",(req,res)=>{
                  res.render("home/index")
});

///
app.get("/faleComAgente",(req,res)=>{

        falacomagente_data_form.findAll({raw:true}).then(data=>{
                //console.log(data)
        })
                  res.render("faleComAgente/index")
});

///
app.get("/quemSomos",(req,res)=>{

        
                  res.render("quemSomos/index")
});



//colhendo dados do form e enviando para o banco de dados
app.post("/falaComAgenteForm",(req,res)=>{
                  var name_form=req.body.name_form;
                  var email_form=req.body.email_form;
                  var msg_form=req.body.msg_form;
                  
                  falacomagente_data_form.create({
                                    name_form:name_form,
                                    email_form:email_form,
                                    msg_form:msg_form
                  }).then(()=>{
                                    res.redirect("/faleComAgente")

                  })
});

//
app.use("/",categoriesController);
app.use("/",articlesController);





///
app.listen(1313,()=>{
                  console.log("O servidor está rodando!")
                  console.log("localhost:1313")
});
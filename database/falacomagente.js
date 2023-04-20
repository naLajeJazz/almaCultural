const Sequelize=require('sequelize');
const connection=require('./database');
const falacomagente_data_form=connection.define('falacomogente_data_form',{
                  name_form:{
                                    type: Sequelize.STRING,
                                    allowNull:false
                  },
                  email_form:{
                                    type: Sequelize.STRING,
                                    allowNull:false     
                  },
                  msg_form:{
                                    type: Sequelize.TEXT,
                                    allowNull:false     
                  }
});

falacomagente_data_form.sync({force:false}).then(()=>{
                  console.log("Tabelas criadas: name_form--email_form--msg_form")
});

module.exports=falacomagente_data_form
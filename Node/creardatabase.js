const mysql= require("mysql2");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: '',
  port: '3306'
});

con.connect(function(err){
   if (err)
    { 
        throw err;
    } 
     console.log("ConexiÃ³n al servidor Apache exitosa!!!");
     con.query("create database bdpruebajava", function(err, result){
     console.log("Base de datos bdpruebajava creada con Ã©xito!!!");     
     });
});
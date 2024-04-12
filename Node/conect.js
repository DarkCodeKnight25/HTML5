const mysql= require("mysql2");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: 'bdcredito',
  password: '',
  port: '3306'
});

con.connect(function(err){
   if (err) 
     {
      console.log("Conexion fallada", err);
     }
    else
     {
      console.log("Conectado!!");
     }
});
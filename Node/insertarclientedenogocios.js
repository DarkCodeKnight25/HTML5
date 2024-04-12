var mysql= require("mysql2");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: '',
  database: "bdpruebajava",
  port: '3306'
});

con.connect(function(err){
   if (err)
    { 
        throw err;
    } 
     console.log("ConexiÃ³n a base de datos bdpruebajava Ok!!");
     var sql = "insert into tbcliente (nombrecliente, direccion, dni) values ('Teresa Diaz', 'Chiclayo','27272727')";
     con.query(sql, function(err, result){
        if (err) throw err;
           console.log("se insertÃ³ el registro con Ã©xito!!!");     
     });
});
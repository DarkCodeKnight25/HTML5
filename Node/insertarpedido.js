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
     var sql = "insert into tbpedido (idpedido, fecha, idcliente, regalo, cantidad) values ('p003','2023-04-04',1,'FLORES ACME',2);";
     con.query(sql, function(err, result){
        if (err) throw err;
           console.log("Se ingresÃ³ el pedido con Ã©xito!!!");     
     });
});
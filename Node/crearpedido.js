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
     var sql = "create table tbpedido (idpedido char(4) PRIMARY KEY, fecha date not null, idcliente int not null, regalo varchar(30) not null, cantidad int not null, constraint fk_pedido_cliente foreign key(idcliente) references tbcliente(idcliente))";
     con.query(sql, function(err, result){
        if (err) throw err;
           console.log("Tabla pedido creado con exito!!!");     
     });
});
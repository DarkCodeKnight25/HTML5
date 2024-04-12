const mysql= require("mysql2");
const con = mysql.createConnection({
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
     console.log("Conexion a base de datos bdpruebajava Ok!!");
     const sql = "create table tbcliente (idcliente int AUTO_INCREMENT primary key, nombrecliente varchar(100) not null, direccion varchar(80) null, dni char(8) null)";
     con.query(sql, function(err, result){
        if (err) throw err;
           console.log("Tabla cliente creada con exito!!!");     
     });
});
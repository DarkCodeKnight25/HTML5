const express = require("express");
const mysql = require("mysql");

const app = express();

let conexion = mysql.createConnection({
    host:"localhost",
    database: "bdpruebajava",
    user: "root",
    password: ""
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", function(req, res){
    res.render("registro");
});

app.post("/validar", function(req, res){
    const datos = req.body;

    let nombre = datos.txtnombre;
    let direccion = datos.txtdireccion;
    let dni = datos.txtdni;

    let registrar = "insert into tbcliente(nombrecliente, direccion, dni) values ('" + nombre + "', '" + direccion + "' , '" + dni + "')";

    conexion.query(registrar, function(error){
        if (error){
            throw error;
        }
        else{
            console.log("Cliente registrado correctamente!!!");
        }
    });
});

app.listen(3000, function(){
    console.log("Servidor creado http://localhost:3000");
})



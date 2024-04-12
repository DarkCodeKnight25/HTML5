let pedidos = [
    {
        numero: "P-00000025",
        total: 250.50,
        cliente : {
            nombres: "Juan",
            apellidos: "Perez Prieto"
        }
    },{
        numero: "P-00000026",
        total: 180.00,
        cliente : {
            nombres: "Julia",
            apellidos: "Castro Villegas"
        }
    },{
        numero: "P-00000027",
        total: 180.00,
        cliente : {
            nombres: "Julia",
            apellidos: "Castro Villegas"
        }
    },{
        numero: "P-00000028",
        total: 180.00,
        cliente : {
            nombres: "Julia",
            apellidos: "Castro Villegas"
        }
    },{
        numero: "P-00000029",
        total: 180.00,
        cliente : {
            nombres: "Julia",
            apellidos: "Castro Villegas"
        }
    }
]

pedidos.map((item, index, aray) => {
    document.write("<h3>" + index + "</h3>")
    document.write("<ul>")
    document.write("<li>" + item.numero + "</li>")
    document.write("<li>" + item.total + "</li>")
    document.write("<li>" + item.cliente.nombres + "</li>")
    document.write("<li>" + item.cliente.apellidos + "</li>")
    document.write("</ul>")
})


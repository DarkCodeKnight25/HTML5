const express = require('express')
const app = express()

const modeloCategoria = require('./models').Categoria
const modeloProducto = require('./models').Producto


app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// app.get('/', (req, res) => {
//     res.send({ message: 'Hello World!' })
// })

///alta de categoria
app.post('/crearcategoria', (req,res)=>{
    modeloCategoria.create(req.body)
    .then((data)=>{
        res.json({datos:data})
    })
    .catch((error)=>{
        res.json({error:error})
    })
})

///alta de producto
app.post('/crearproducto', (req,res)=>{
    modeloProducto.create(req.body)
    .then((data)=>{
        res.json({datos:data})
    })
    .catch((error)=>{
        res.json({error:error})
    })
})

// motrar productos
app.get('/mostrarproducto',(req,res)=>{
    modeloProducto.findAll({
        include:[{model:modeloCategoria}]
    })
    .then((data)=>{
        res.json({datos:data})
    })
    .catch((error)=>{
        res.json({error:error})
    })
})

// eliminar productos
app.delete('/borrarproducto/:id',(req,res)=>{
    modeloProducto.destroy({
        where:{id: req.params.id}
    })
    .then((data)=>{
        res.json({datos:data})
    })
    .catch((error)=>{
        res.json({error:error})
    })
})

// editar productos
app.put('/editarproducto/:id',(req,res)=>{
    modeloProducto.update(req.body,{
        where:{id: req.params.id}
    })
    .then((data)=>{
        res.json({datos:data})
    })
    .catch((error)=>{
        res.json({error:error})
    })
})

app.listen(3000, ()=>{
    console.log('server UP running in http://localhost:3000')
})
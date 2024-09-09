const express = require("express");
const dbconnect = require("./config");
const modelUser = require("./model");
const app = express();
const router = express.Router();

// creacion de usuarios
router.post('/', async (req , res )=> {
const body = req.body;
const respuesta = await modelUser.create(body)
res.send (respuesta)
}) 
// Consultar usuarios
router.get('/', async (req , res ) => {
    const respuesta=await modelUser.find({})
    res.send (respuesta)
    })
//consultar usuario por id 
router.get('/:id', async (req , res ) => {
    const id=req.params.id
    const respuesta=await modelUser.findById({_id:id})
    res.send (respuesta)
    })
//actualizar usuario
router.put('/:id', async (req , res ) =>{
    const body = req.body;
    const id=req.params.id
    const respuesta=await modelUser.findByIdAndUpdate({_id:id},body);
    res.send (respuesta)
    })
//Eliminar usuario
router.delete('/:id', async (req , res ) =>{
    const id=req.params.id;
    const respuesta=await modelUser.deleteOne({_id:id})
    res.send (respuesta)
    })

app.use(express.json());
app.use(router);
app.listen(3005, ()=>{
    console.log ("El servidor esta en el puerto 3005")
})
//permite el acceso a la base de datos para leer y manipular informacion 
dbconnect();

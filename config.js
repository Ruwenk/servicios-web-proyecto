// se realiza la conexion con la base de datos de mongo atraves de mongosse//
const mongoose= require('mongoose');
const dbconnect= ()=> {

    mongoose.set('strictQuery', true)
    mongoose.connect ("mongodb://127.0.0.1:27017/login_adso") //ruta de la base de datos de mongo//
    .then((success)=>console.log("conexion exitosa"))
    .catch( (err)=>console.log (err.mesagge));
}

    module.exports = dbconnect;





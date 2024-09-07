const mongoose= require('mongoose');
const dbconnect= ()=> {

    mongoose.set('strictQuery', true)
    mongoose.connect ("mongodb://127.0.0.1:27017/login_adso")
    .then((success)=>console.log("conexion exitosa"))
    .catch( (err)=>console.log (err.mesagge));
}

    module.exports = dbconnect;





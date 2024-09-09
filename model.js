const mongoose= require('mongoose');
const userModel= new mongoose.Schema(
{
          nomuser:{
            type: String
          },
          password:{
            type: String
          },
          email:{
          type: String
          },
          ciudad:{
            type: String
          },
          direccion:{
            type: String
          },
          telefono:{
            type: Number
          }
},
{
           timestamps:true,
           versionKey:false,
}
  
)
const modelUser = mongoose.model("usuarios", userModel);
module.exports = modelUser;
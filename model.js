const mongoose= require('mongoose');
const userModel= new mongoose.Schema(
{
          nomuser:{
            type: String
          },
          password:{
            type: String
          }
},
{
           timestamps:true,
           versionKey:false,
}
  
)
const modelUser = mongoose.model("usuarios", userModel);
module.exports = modelUser;
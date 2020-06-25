var mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
  userName:String,
  password:String
});


const userModel = mongoose.model('User', userSchema);
module.exports=userModel;

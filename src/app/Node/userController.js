var express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=require('../models/user');
const jwt=require('jsonwebtoken');

//const token=jwt.sign(req.body.username,'MY_SECRET_KEY',{expiresIn:'1d'});

router.get('/',(req,res)=>{
  User.find().then((users)=>
  {
    res.status(200);
    res.json(users);
  });
});

router.post('/',(req,res)=>{
  var user=new User();
  user.userName=req.body.userName;
  user.password=req.body.password;
  console.log("called"+ req.body);
  user.save((err)=>{
    if(err){
      res.send("User details not saved");
      console.log(token);
      res.status(500);
    }
    else
     res.send("User details saved sucesfully");
  });
});
function Auth(user,data){
  if(user==data)
  return 0;
}
router.post('/login',(req,res)=>{
  //console.log("CALEED");
  const token=jwt.sign({uname},'MY_SECRET_KEY',{expiresIn:'1d'});
  var uname=req.body.userName;
  User.findOne({userName:uname}).then(function(user,err){
    console.log(uname);
    if(err){
      res.send("Error");
      res.status(401);
    }
    else if(!user){
      res.send("USer not found");
    }
    else{
      if(Auth(req.body.password,user.password)==0)
      {
        res.status(200);
        res.json(user);
        console.log(req.body.password);
      }
      else{
      res.send("Authentication failed");
    }
  }
  })
});

module.exports=router;

var express=require('express');
var router=express.Router();
var userController=require('./userController');
const mongoose=require('mongoose');
var app=express();
var bodyParser=require('body-parser');

mongoose.connect("mongodb://localhost:27017/amazonDup",()=>{
  console.log("DB is running");
});
app.listen(9090,(req,res)=>
{
  console.log("Using 9090");
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/user',userController);

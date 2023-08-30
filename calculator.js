const express = require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));// to use html form data

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    // number se string se num mai ajare
    var sum=num1+num2;
res.send("Addition ="+sum);

});
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
});
app.post("/bmicalculator",function(req,res){
var a=parseFloat(req.body.w);
var b=parseFloat(req.body.h)/100;
var bmi=a/(b*b);
res.send("BMI is: "+bmi);

});

app.listen(3000,function(){
    console.log("Server started at port 3000");
});
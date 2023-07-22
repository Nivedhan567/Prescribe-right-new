const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
mongoose.connect("mongodb+srv://nivedhan2010698:passwordispassword@cluster0.uako6mq.mongodb.net/tryDB");


const PatientSchema = new mongoose.Schema({
    username:String,
    eth_add:String,
    fulllname:String,
    emailid:String,
    mobile:String,
    aadhar:String,
    newpass:String,
    confpass:String,
    Userdesig:String
});

const DoctorSchema = new mongoose.Schema({
    username:String,
    eth_add:String,
    fulllname:String,
    emailid:String,
    mobile:String,
    regno:String,
    regyear:String,
    smc:String,
    aadhar:String,
    newpass:String,
    confpass:String,
    Userdesig:String
});

const PharmacySchema = new mongoose.Schema({
    username:String,
    eth_add:String,
    fulllname:String,
    pharma_name:String,
    pharma_branch:String,
    emailid:String,
    mobile:String,
    aadhar:String,
    newpass:String,
    confpass:String,
    Userdesig:String

});

const patient = mongoose.model("patient",PatientSchema);

app.listen(3000,function(){
    console.log("Server started at port 3000");
});

app.get("/",function(req,res){
    res.render('index');
});
app.get("/home",function(req,res){
    res.render('index');
});

app.get("/login",function(req,res){
    res.render('login');
    console.log("working");

});



app.post("/login",async function(req,res){

     let username = req.body.username;
     let ethadd = req.body.ethadd;
     let password = req.body.pass;
     console.log(username,ethadd,password);
     res.redirect("/register");
});


app.get("/register/patient",function(req,res){
    res.render('patient_reg');
});
app.get("/register/doctor",function(req,res){
    res.render('doctor_reg');
});

app.get("/register/pharmacy",function(req,res){
    res.render('pharmacy_reg');
});


app.post("/register/patient",function(req,res){

    console.log(req.body.btnradio);
    const patient1 = new patient({
        username:req.body.username,
        eth_add:req.body.eth_add,
        fulllname:req.body.fulllname,
        emailid:req.body.emailid,
        mobile:req.body.mobile,
        aadhar:req.body.aadhar,
        newpass:req.body.newpass,
        confpass:req.body.confpass,
        Userdesig:req.body.Userdesig
    });
    console.log(patient1);
    patient1.save().then(function(models){
        console.log(models);
        res.render("login");
    })
    .catch(function(err){
        console.log(err);
    })
});

app.post("/register/doctor",function(req,res){

    console.log(req.body.btnradio);
    const doctor1 = new doctor({
        username:req.body.username,
        eth_add:req.body.eth_add,
        fulllname:req.body.fulllname,
        emailid:req.body.emailid,
        mobile:req.body.mobile,
        aadhar:req.body.aadhar,
        newpass:req.body.newpass,
        confpass:req.body.confpass,
        Userdesig:req.body.Userdesig
    });
    console.log(patient1);
    doctor1.save().then(function(models){
        console.log(models);
        res.render("login");
    })
    .catch(function(err){
        console.log(err);
    })
});

app.post("/register/pharmacy",function(req,res){

    console.log(req.body.btnradio);
    const pharmacy1 = new pharmacy({
        username:req.body.username,
        eth_add:req.body.eth_add,
        fulllname:req.body.fulllname,
        emailid:req.body.emailid,
        mobile:req.body.mobile,
        aadhar:req.body.aadhar,
        newpass:req.body.newpass,
        confpass:req.body.confpass,
        Userdesig:req.body.Userdesig
    });
    console.log(patient1);
    pharmacy1.save().then(function(models){
        console.log(models);
        res.render("login");
    })
    .catch(function(err){
        console.log(err);
    })
});

app.post("/success",function(req,res){
    res.render("login successful");
});
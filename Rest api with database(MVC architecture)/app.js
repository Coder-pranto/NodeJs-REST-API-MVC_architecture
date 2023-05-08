const express = require('express')
const app = express()
const router = require('./routes/users.route')
const cors = require('cors')
require('dotenv').config()
require('./config/db');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users",router);


app.get('/' , (req , res)=>{
     res.sendFile(__dirname+"/views/home.html");
 
 })
 
 //unknown route
 app.use((req,res,next)=>{
    // res.status(404).json({"message":"Route not found"})
     res.status(404).send("Route not found")
 });
 
 //server error
 app.use((err,req,res,next)=>{
     //res.status(500).json({"message":"Server side error"})
     res.status(500).send("Server side error")
 });

module.exports = app;
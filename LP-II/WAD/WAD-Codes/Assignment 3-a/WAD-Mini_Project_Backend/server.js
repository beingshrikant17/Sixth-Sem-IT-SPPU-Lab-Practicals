
import express from "express";
import mongoose from "mongoose";
import doctorRoutes from './src/routes/doctor.route.js';
import patientRoutes from './src/routes/patient.route.js';

const app=express()   
mongoose.set('strictQuery',false);

// converts req.body to json (must for data transfer)
app.use(express.json({limit: "30mb", extended: true}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.listen(9992,function check(err)
{
    if(err)
        console.log("Error .....!!!!!")
    else
        console.log("Started .....!!!!!")
});


mongoose.connect("mongodb://127.0.0.1:27017/abc", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

app.use('/doctor', doctorRoutes); 
app.use('/patient', patientRoutes); 
app.get('/',function (req,res){res.status(200).json({message:"123"})})

app.use(express.json());
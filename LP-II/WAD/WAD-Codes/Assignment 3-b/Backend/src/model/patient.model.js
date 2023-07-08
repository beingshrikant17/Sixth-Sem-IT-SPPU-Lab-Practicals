import mongoose from "mongoose";
var Schema = mongoose.Schema;
 
var patientSchema = new Schema({

    doctorMail: 
    {
        type: String,
        required: true
    },
    patientName: 
    {
        type: String,
        required: true
    },
    patientGender: 
    {
        type: String,
        required: true
    },
    patientEmail:
    {
        type: String,
        required: true
    },
    patientMobileNo: 
    {
        type: String,
        required: true
    },
    patientAge: 
    {
        type: String,
        required: true
    },
    patientDOB: 
    {
        type: String,
        required: true
    },
    patientPrescription:
    {
        type: String,
        required: true
    }
});

export default mongoose.model("Patient", patientSchema);
 

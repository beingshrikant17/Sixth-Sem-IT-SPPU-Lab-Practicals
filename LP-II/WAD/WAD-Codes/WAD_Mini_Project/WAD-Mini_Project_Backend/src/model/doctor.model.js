import mongoose from "mongoose";
var Schema = mongoose.Schema;
 
var doctorSchema = new Schema(
    {

        hospitalName: 
        {
            type: String,
            required: true
        },
        doctorName: 
        {
            type: String,
            required: true
        },
        doctorQualification:
        {
            type: String,
            required: true
        },
        hospitalAddress: 
        {
            type: String,
            required: true
        },
        hospitalMobNo: 
        {
            type: String,
            required: true
        },
        hospitalEmail: 
        {
            type: String,
            required: true
        },
        password: 
        {
            type: String,
            required: true
        }

    }
);

export default mongoose.model("Doctor", doctorSchema);
 

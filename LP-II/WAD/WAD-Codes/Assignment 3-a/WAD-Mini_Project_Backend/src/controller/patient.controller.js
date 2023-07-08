import PatientModel from "../model/patient.model.js";
import doctorModel from "../model/doctor.model.js";

export async function login(req, res) {
    const { patientEmail, patientMobileNo } = req.query;
    console.log(patientEmail, patientMobileNo);
    try {
        const response = await PatientModel.find({ patientEmail, patientMobileNo });
        let message = "Login successfull";
        let data = null;
        if (response.length === 0) 
        {
            message = "invalid data";
        } 
        else 
        {
            const DoctorMail=response[0].doctorMail;
            const response1 = await doctorModel.find({hospitalEmail:DoctorMail});


            console.log("response"+response);
            console.log("response1"+response1);
            data = 
            {
                patientPrescription: response[0].patientPrescription,
                patientName: response[0].patientName,
                patientDOB: response[0].patientDOB,
                patientMobileNo: response[0].patientMobileNo,
                patientGender: response[0].patientGender,
                patientAge: response[0].patientAge,

                DoctorName:response1[0].doctorName,
                DoctorQualification:response1[0].doctorQualification,
                HospitalAddress:response1[0].hospitalAddress,
                HospitalName:response1[0].hospitalName,
                HospitalMobNo:response1[0].hospitalMobNo,
                HospitalEmail:response1[0].hospitalEmail
            };
        }
        return res.status(200).json({ message, data });
    } 
    catch (error) 
    {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
}


async function register(req, res) {
    try {
        const
            {
                doctorMail,
                patientName,
                patientGender,
                patientEmail,
                patientMobileNo,
                patientAge,
                patientDOB,
                patientPrescription
            } = req.body;
        const data =
        {
            doctorMail,
            patientName,
            patientGender,
            patientEmail,
            patientMobileNo,
            patientAge,
            patientDOB,
            patientPrescription
        }
        console.log(data);
        const response = await PatientModel.create(data);
        return res.status(200).json({ message: "OK", data: response });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
}

export default register;








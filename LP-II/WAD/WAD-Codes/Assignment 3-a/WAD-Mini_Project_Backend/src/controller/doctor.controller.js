import doctorModel from "../model/doctor.model.js";

async function register (req, res) {
    try
    {
        const 
        {
            hospitalName,
            doctorName,
            doctorQualification, 
            hospitalAddress,
            hospitalMobNo,
            hospitalEmail,
            password
        } = req.body;
        const data = 
        {
            hospitalName,
            doctorName,
            doctorQualification, 
            hospitalAddress,
            hospitalMobNo,
            hospitalEmail,
            password
        }
        console.log(data);
        const response = await doctorModel.create(data);
        return res.status(200).json({message: "Hospital Registered Successfully", data: response});
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({message: "internal server error"});
    }
}

export async function login (req, res) 
{
    const {hospitalEmail, password} = req.query;
    console.log(hospitalEmail, "\n"+password);
    try
    {
        const response = await doctorModel.find({hospitalEmail, password});
        let message = " Login successfull";
        if(response.length === 0)
        {
            message = "invalid data";
        }
        return res.status(200).json({message});
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({message: "internal server error"});
    }
}
export default register;
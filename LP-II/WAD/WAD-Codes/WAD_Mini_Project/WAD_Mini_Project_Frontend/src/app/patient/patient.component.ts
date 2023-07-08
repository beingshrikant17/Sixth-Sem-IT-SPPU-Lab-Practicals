import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  formData = {
    patientEmail: '',
    patientMobileNo: ''
  };

  message = '';
  DoctorName='';
  DoctorQualification='';
  HospitalName='';
  HospitalAddress='';
  HospitalMobNo='';
  HospitalEmail='';
  patientName='';
  patientDOB='';
  patientGender='';
  patientAge='';
  patientMobileNo='';
  patientPrescription='';


  constructor(private http: HttpClient) { }

  submitForm(formData: any, event: Event): void {
    event.preventDefault(); // prevent default form submission behavior
    const params = {
      patientEmail: formData.patientEmail,
      patientMobileNo: formData.patientMobileNo
    };

    this.http.get('http://localhost:9992/patient/login', { params }).subscribe(
      (response: any) => {
        console.log('Success:', response);
        this.message = response.message;
        if(this.message!="invalid data")
        {
          this.DoctorName=response.data.DoctorName;
          this.patientPrescription=response.data.patientPrescription;
          this.patientName=response.data.patientName;
          this.patientDOB=response.data.patientDOB;
          this.patientMobileNo=response.data.patientMobileNo;
          this.patientGender=response.data.patientGender;
          this.patientAge=response.data.patientAge;
          this.DoctorQualification=response.data.DoctorQualification;
          this.HospitalAddress=response.data.HospitalAddress;
          this.HospitalName=response.data.HospitalName;
          this.HospitalMobNo=response.data.HospitalMobNo;
          this.HospitalEmail=response.data.HospitalEmail;

        //  this.message=response.data.DoctorName+" "+response.data.patientPrescription+" "+response.data.patientName+" "+response.data.patientDOB+" "+response.data.patientMobileNo+" "+response.data.patientGender+" "+response.data.patientAge+" "+response.data.DoctorQualification+" "+response.data.HospitalAddress+" "+response.data.HospitalName+" "+response.data.HospitalMobNo+" "+response.data.HospitalEmail;
        }
      },
      (error) => {
        console.log('Error:', error);
        this.message = 'An error occurred while logging in.';
      }
    );
  }
}

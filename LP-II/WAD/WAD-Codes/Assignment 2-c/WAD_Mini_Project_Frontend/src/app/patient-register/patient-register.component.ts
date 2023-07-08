import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent {
  formData = {
    doctorMail: '',
    patientName: '',
    patientGender: '',
    patientEmail: '',
    patientMobileNo: '',
    patientAge: '',
    patientDOB: '',
    patientPrescription: ''
  };

  message = '';
  data1='';
  constructor(private http: HttpClient) {}

  submitForm(formData: any, event: Event): void {
    event.preventDefault(); // prevent default form submission behavior
    const data = {
      doctorMail: formData.doctorMail,
      patientName: formData.patientName,
      patientGender: formData.patientGender,
      patientEmail: formData.patientEmail,
      patientMobileNo: formData.patientMobileNo,
      patientAge: formData.patientAge,
      patientDOB: formData.patientDOB,
      patientPrescription: formData.patientPrescription
    };
    
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    
    this.http.post('http://localhost:9992/patient/register', data, { headers }).subscribe(
      (response) => {
        console.log('Success:', response);
        this.message = 'Patient registered successfully!';
      },
      (error) => {
        console.log('Error:', error);
        this.message = 'An error occurred while registering the patient.';
      }
    );
    }
  }    
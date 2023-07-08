import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './hospital-register.component.html',
  styleUrls: ['./hospital-register.component.css']
})
export class HospitalRegisterComponent {
  formData = {
    hospitalName: '',
    doctorName: '',
    doctorQualification: '',
    hospitalAddress: '',
    hospitalMobNo: '',
    hospitalEmail: '',
    password: ''
  };

  message = '';

  constructor(private http: HttpClient) {}

  submitForm(formData: any, event: Event): void {
    event.preventDefault(); // prevent default form submission behavior
    this.http.post('http://localhost:9992/doctor/register', formData).subscribe(
      (response: any) => {
        console.log('Success:', response);
        this.message = response.message;
      },
      (error) => {
        console.log('Error:', error);
        this.message = 'An error occurred while registering the doctor.';
      }
    );
  }

}

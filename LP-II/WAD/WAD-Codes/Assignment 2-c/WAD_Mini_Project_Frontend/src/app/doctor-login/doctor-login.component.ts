
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({ 
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {
  formData = {
    doctorEmail: '',
    doctorPassword: ''
  };

  message = '';

  constructor(private http: HttpClient,private router: Router) { }

  submitForm(formData: any, event: Event): void {
    event.preventDefault(); // prevent default form submission behavior
    const params = {
      hospitalEmail: formData.doctorEmail,
      password: formData.doctorPassword
    };
//  this.message=params.hospitalEmail+" "+params.password;
    this.http.get('http://localhost:9992/doctor/login', { params }).subscribe(
      (response: any) => {
        console.log('Success:', response);
        this.message = response.message;
        if(this.message!="invalid data")
        {
          this.router.navigate(['/patient-register']); // Navigate to /dashboard page
        }


      },
      (error) => {
        console.log('Error:', error);
        this.message = 'An error occurred while logging in.';
      }
    );
  }

}


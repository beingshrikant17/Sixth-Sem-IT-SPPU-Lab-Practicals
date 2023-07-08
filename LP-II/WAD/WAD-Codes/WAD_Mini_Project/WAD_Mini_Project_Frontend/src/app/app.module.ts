import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { HospitalRegisterComponent } from './hospital-register/hospital-register.component';
import { PatientComponent } from './patient/patient.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
 
@NgModule({
  declarations: [
    AppComponent,
    DoctorLoginComponent,
    HospitalRegisterComponent,
    PatientComponent,
    PatientRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

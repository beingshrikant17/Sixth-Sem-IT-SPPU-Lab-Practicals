import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { HospitalRegisterComponent } from './hospital-register/hospital-register.component';
import { PatientComponent } from './patient/patient.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';

const routes: Routes = [
  { path: '', redirectTo: '/doctor-login', pathMatch: 'full' },
  { path: 'doctor-login', component: DoctorLoginComponent },
  { path: 'hospital-register', component: HospitalRegisterComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'patient-register', component: PatientRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

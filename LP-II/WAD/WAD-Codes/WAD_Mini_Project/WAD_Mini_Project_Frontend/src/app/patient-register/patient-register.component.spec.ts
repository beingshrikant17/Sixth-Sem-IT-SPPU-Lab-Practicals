import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegisterComponent } from './patient-register.component';

describe('PatientRegisterComponent', () => {
  let component: PatientRegisterComponent;
  let fixture: ComponentFixture<PatientRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

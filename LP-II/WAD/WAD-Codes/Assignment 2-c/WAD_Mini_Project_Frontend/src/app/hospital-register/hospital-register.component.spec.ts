import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalRegisterComponent } from './hospital-register.component';

describe('HospitalRegisterComponent', () => {
  let component: HospitalRegisterComponent;
  let fixture: ComponentFixture<HospitalRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  @Input() employee: Employee = {
    id: 0,
    name: '',
    companyName: '',
    email: '',
    contactNo: '',
    designation: '',
    avatar: ''
  };
  constructor(
    private router: Router
  ) {}


  @Output() formSubmit = new EventEmitter<Employee>();

  designations: string[] = [
    'Software Developer',
    'Senior Software Developer',
    'Quality Assurance',
    'Technical Lead',
    'Manager'
  ];

  avatars: string[] = [
    'avatar1.png',
    'avatar2.png',
    'avatar3.png',
    'avatar4.png',
    'avatar5.png'
  ];

  submitForm() {
      if (this.employee.name && this.employee.email && this.employee.contactNo && this.employee.companyName 
        && this.employee.designation) {
      this.formSubmit.emit({ ...this.employee }); 
    }
    
  }
}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchQuery: string = '';
  isModalVisible: boolean = false;
  isAddOrEditMode: boolean = false;  // Track if form is in add/edit mode
  employeeToDelete: Employee | null = null;
  employeeToEdit: Employee = {
    id: 0,
    name: '',
    companyName: '',
    email: '',
    contactNo: '',
    designation: '',
    avatar: ''
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeService.employees$.subscribe(data => {
      this.employees = data;
      this.filteredEmployees = data;
    });
  }

  handleEmployeeFormSubmit(employee: Employee) {
    if (employee.id) {
      this.employeeService.updateEmployee(employee.id, employee);
    } else {
      this.employeeService.addEmployee(employee);
    }
    this.isAddOrEditMode = false; // Close the form after submission
  }

  addEmployee() {
    debugger
    this.employeeToEdit = {
      id: 0,
      name: '',
      companyName: '',
      email: '',
      contactNo: '',
      designation: '',
      avatar: ''
    };
    this.isAddOrEditMode = true;
  }

  editEmployee(employee: Employee) {
    this.employeeToEdit = { ...employee };
    this.isAddOrEditMode = true;
  }

  searchEmployees() {
    this.filteredEmployees = this.employees.filter(employee =>
      employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  confirmDeleteEmployee(employee: Employee) {
    this.employeeToDelete = employee;
    this.isModalVisible = true;
  }

  handleConfirmDelete() {
    if (this.employeeToDelete) {
      this.employeeService.deleteEmployee(this.employeeToDelete.id);
      this.employeeToDelete = null;
    }
    this.isModalVisible = false;
  }

  handleCancelDelete() {
    this.employeeToDelete = null;
    this.isModalVisible = false;
  }
}

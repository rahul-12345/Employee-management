import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // Static data for employees
  private employeeData: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      companyName: 'TechCorp',
      email: 'john.doe@techcorp.com',
      contactNo: '1234567890',
      designation: 'Software Developer',
      avatar: 'avatar1.png'
    },
    {
      id: 2,
      name: 'Jane Smith',
      companyName: 'BizSolutions',
      email: 'jane.smith@bizsolutions.com',
      contactNo: '9876543210',
      designation: 'Manager',
      avatar: 'avatar2.png'
    }
    // Add more employees as needed
  ];

  private employeesSubject = new BehaviorSubject<Employee[]>(this.employeeData);
  employees$ = this.employeesSubject.asObservable();

  // Add a new employee
  addEmployee(employee: Employee) {
    this.employeeData.push(employee);
    this.employeesSubject.next(this.employeeData);
  }

  // Update an existing employee by ID
  updateEmployee(id: number, updatedEmployee: Employee) {
    const index = this.employeeData.findIndex(employee => employee.id === id);
    if (index !== -1) {
      // Update the employee data at the found index
      this.employeeData[index] = { ...updatedEmployee, id }; // Ensure the ID remains unchanged
      this.employeesSubject.next([...this.employeeData]); // Emit the updated list to subscribers
    }
  }

  // Delete an employee by ID
  deleteEmployee(id: number) {
    this.employeeData = this.employeeData.filter(employee => employee.id !== id);
    this.employeesSubject.next(this.employeeData);  // Emit updated list
  }

  // Get a single employee by ID
  getEmployee(id: number): Employee | undefined {
    return this.employeeData.find(employee => employee.id === id);
  }

  // Search employees by name or email
  searchEmployees(query: string) {
    return this.employeeData.filter(employee =>
      employee.name.toLowerCase().includes(query.toLowerCase()) ||
      employee.email.toLowerCase().includes(query.toLowerCase())
    );
  }
}

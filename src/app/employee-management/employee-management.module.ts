// employee-management.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './ components/employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './ components/employee-form/employee-form.component';
import { ConfirmationModalComponent } from './ components/confirmation-modal/confirmation-modal.component';
import { EmployeeListComponent } from './ components/employee-list/employee-list.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeFormComponent,
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeFormComponent,
    ConfirmationModalComponent
  ]
})
export class EmployeeManagementModule {}
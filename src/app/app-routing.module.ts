// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmployeeListComponent } from './ employee-management/components/employee-list/employee-list.component';
// import { EmployeeDetailComponent } from './employee-management/components/employee-detail/employee-detail.component';
// import { EmployeeFormComponent } from './employee-management/components/employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-management/ components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-management/ components/employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './employee-management/ components/employee-form/employee-form.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employee/:id', component: EmployeeDetailComponent },
  { path: 'edit/:id', component: EmployeeFormComponent },
  { path: 'add', component: EmployeeFormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeManagementModule } from './employee-management/employee-management.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { CheckNumberPipe } from '../pipes/check-number.pipe';


@NgModule({
  declarations: [EmployeesComponent, AddEmployeeComponent, EditEmployeeComponent, FilterPipe, CheckNumberPipe],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmployeesModule { }

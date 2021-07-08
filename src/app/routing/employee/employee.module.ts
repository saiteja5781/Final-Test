import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Employee1Component } from 'src/app/components/employee1/employee1.component';
import { Employee2Component } from 'src/app/components/employee2/employee2.component';

const routes: Routes = [
  {path:'employee1', component:Employee1Component},
  {  path:'employee2', component:Employee2Component}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,  RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class EmployeeModule { }
export const routingComponents = [Employee1Component,Employee2Component]

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Employee1Component } from './components/employee1/employee1.component';
import { Employee2Component } from './components/employee2/employee2.component';
import { SearchPipe } from './pipes/search.pipe';
import { EmployeeDirective } from './directives/employee.directive';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from './routing/employee/employee.module';

@NgModule({
  declarations: [
    AppComponent,
    Employee1Component,
    Employee2Component,
    SearchPipe,
    EmployeeDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

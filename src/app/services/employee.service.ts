import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //constructor() { }
  url:string = 'assets/employees.json';
  constructor(private httpClient:HttpClient) { }
  getallemploees(){
     return this.httpClient.get(this.url)
}
}

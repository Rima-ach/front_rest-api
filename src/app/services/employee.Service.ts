import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employee';

  constructor(private http: HttpClient) { }

  createEmployee(employees: Array<Employee> ): Observable<Object> {
    return this.http.post(`${this.baseUrl}/insert`, employees);
  }


  getEmployeeList(criteria : string , value : string): Observable<any> {
    return this.http.get(`${this.baseUrl}/list?criteria=${criteria}&value=${value}`);
  }
}

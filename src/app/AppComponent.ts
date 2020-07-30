import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.Service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-rest';
  constructor(private employeeService: EmployeeService) { }
  employees = [];
  employee = {
    nom: '',
    prenom: '',
    domaine: '',
    email: '',
  };
  employeesSearchList = [];
  criteria = "";
  value = "";
  addEmployee() {
    let employeeTmp;
    Object.assign(this.employee, employeeTmp);
    this.employees.push(employeeTmp);
  }
  insertAllSelected() {
    this.employeeService.createEmployee(this.employees);
  }
  async search() {
    this.employeesSearchList = await this.employeeService.getEmployeeList(this.criteria, this.value).toPromise();
  }
}

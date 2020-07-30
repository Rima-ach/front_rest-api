import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.Service';
import { Employee } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-rest';

  constructor(private employeeService: EmployeeService) { }
  ngOnInit() {
  }
  employees = [];
  employee = {
    nom:'',
    prenom:'',
    domaine:'',
    email:'',
  };
  submitted = false;
  employeesSearchList = [];
  criteria="";
  value="";

  addEmployee():void{
    this.submitted = false;
    this.employee = new Employee();
  }

  insertAllSelected(){
    this.employeeService.createEmployee(this.employees).subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }
  onSubmit() {
    this.submitted = true;
    this.insertAllSelected();    
  }
  async search(){
    this.employeesSearchList =await this.employeeService.getEmployeeList(this.criteria, this.value).toPromise();
  }

}

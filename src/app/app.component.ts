import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.Service';
import { Employee } from './models/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-rest';
  employees = [];
  obsEmployees: BehaviorSubject<any[]> = new BehaviorSubject(this.employees);
  constructor(private employeeService: EmployeeService) {
    
   }
  ngOnInit() {
  }
  

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
    this.employees.push(this.employee);
    this.employee = new Employee();

  }

  insertAllSelected(){
    this.employeeService.createEmployee(this.employees).subscribe(data => console.log(data), error => console.log(error));
    this.employees=[];
    this.obsEmployees.next(this.employees);
  }
  onSubmit() {
    this.submitted = true;
    this.insertAllSelected();    
  }
  async search(){
    this.employeesSearchList =await this.employeeService.getEmployeeList(this.criteria, this.value).toPromise();
  }

  async getObservableList(){ return await this.obsEmployees.asObservable().toPromise() }

}

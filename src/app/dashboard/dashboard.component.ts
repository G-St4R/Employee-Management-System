import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import {EmployeeData} from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    formValue!:FormGroup
  employeeModelObj : EmployeeData = new EmployeeData;
  allEmployeeData: any;
  showAdd!:boolean;
  showBtn!:boolean;
  educationOptions = [
    '10th pass',
    '12th pass',
    'diploma',
    'graduate',
    'post graduate',
    'PhD',
  ];

  constructor(private formbuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
  this.formValue = this.formbuilder.group({
      firstname: '',
      lastname: '',
      birthdate: '',
      gender: '',
      education: '',
      company: '',
      jobExperience: 0,
      salary: 0,
    })
    this.getAllData();
  }
  clickAddEmp(){
    this.formValue.reset();
    this.showAdd = true;
    this.showBtn = false;
  }
 
  addEmployee(){
    this.employeeModelObj.firstname = this.formValue.value.firstname;
    this.employeeModelObj.lastname = this.formValue.value.lastname;
    this.employeeModelObj.birthdate = this.formValue.value.birthdate;
    this.employeeModelObj.gender = this.formValue.value.gender;
    this.employeeModelObj.education = this.formValue.value.education;
    this.employeeModelObj.company = this.formValue.value.company;
    this.employeeModelObj.jobExperience = this.formValue.value.jobExperience;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.postEmployee(this.employeeModelObj).subscribe(res => {
      console.log(res);
      alert("Employee Added Successfully");
      this.formValue.reset();

      let ref= document.getElementById('close');
      ref?.click();

      this.getAllData();

    }, err=>{
      console.log(err);
      alert("Employee Added Failed!");
    })
  }

  getAllData(){
    this.api.getEmployee().subscribe(res => {
      this.allEmployeeData= res;
    }, err=>{
      console.log(err);
    })
  }

  deleteEmp(data: any){
    this.api.deleteEmployee(data).subscribe((res: any) => {
      console.log(res);
      alert("Employee Deleted Successfully");
      this.getAllData();
    })
  }

  onEditEmp(data: any){
    this.showAdd = false;
    this.showBtn = true;
    
    this.employeeModelObj.id = data.id;
    this.formValue.controls['firstname'].setValue(data.firstname);
    this.formValue.controls['lastname'].setValue(data.lastname);
    this.formValue.controls['birthdate'].setValue(data.birthdate);
    this.formValue.controls['gender'].setValue(data.gender);
    this.formValue.controls['education'].setValue(data.education);
    this.formValue.controls['company'].setValue(data.company);
    this.formValue.controls['jobExperience'].setValue(data.jobExperience);
    this.formValue.controls['salary'].setValue(data.salary);


 
  }
  updateEmp(){
    this.employeeModelObj.firstname = this.formValue.value.firstname;
    this.employeeModelObj.lastname = this.formValue.value.lastname;
    this.employeeModelObj.birthdate = this.formValue.value.birthdate;
    this.employeeModelObj.gender = this.formValue.value.gender;
    this.employeeModelObj.education = this.formValue.value.education;
    this.employeeModelObj.company = this.formValue.value.company;
    this.employeeModelObj.jobExperience = this.formValue.value.jobExperience;
    this.employeeModelObj.salary = this.formValue.value.salary;


    this.api.updateEmployee(this.employeeModelObj.id,this.employeeModelObj).subscribe((res: any) => {
      alert("Employee Updated Successfully");
      this.formValue.reset();

      let ref= document.getElementById('close');
      ref?.click();

      this.getAllData();

    })
    
  }


}

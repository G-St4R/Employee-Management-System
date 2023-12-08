import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { EmployeeData } from '../dashboard/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   [x: string]: any;
  addEmployee(employeeModelObj: EmployeeData) {
    throw new Error('Method not implemented.');
  }

  constructor(private _http: HttpClient) { }

  postEmployee(data:any ) {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
      return res;
    }))
  }
  getEmployee() {
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }));
  }
  deleteEmployee(id:any) {
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }));
  }
  updateEmployee(id: any, data: any) {
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }));
  }


}

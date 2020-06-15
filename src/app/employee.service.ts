import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }
  getData(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get('../assets/api/Employees.json');
  }
}

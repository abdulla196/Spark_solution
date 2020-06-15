import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  data: Array<any> ;
  totalRecords: string;
  pageitem: number;
  term  = '';
  page = 1;
  employee: any = [];
  constructor(public employeedata: EmployeeService) {
  }
  ngOnInit() {
    this.employeedata.getData().subscribe((res) => {
      this.employee = res.data.employees;
      this.data = this.employee;
      this.totalRecords = this.employee.length;
      this.pageitem = (this.employee.length / this.employee.length) * 10;
      console.log(this.totalRecords);
      console.log(this.employee);
    });
  }
  search() {
    // console.log(fitervalue);
    if (this.term !== '') {
      console.log(this.term);
      this.employee = this.employee.filter(res => {
        return res.firstContractingSalary.toLocaleLowerCase().match(this.term.toLocaleLowerCase());
      });
    } else {
      this.ngOnInit();
    }
  }
}

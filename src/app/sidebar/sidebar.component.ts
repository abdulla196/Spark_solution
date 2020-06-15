import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $('.fa-bars').click(function() {
    //   $('.sidebar').toggleClass('d-md-block');
    //   $('main').toggleClass('col-lg-10');
    //   $('.sidebar').toggleClass('d-none');
    //   $('main').toggleClass('col-lg-12');
    // });
    // // tslint:disable-next-line: deprecation
    // $('.fa-times').click(function() {
    //   $('.sidebar').toggleClass('d-none');
    // });
  }

}

import { Component } from '@angular/core';
import { AbstractListPageService } from '../base/list-page';
import { EmployeeService } from './data-access/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [
    {
      provide: AbstractListPageService,
      useClass: EmployeeService
    }
  ]
})
export class EmployeeListComponent {

  constructor(public listPage: AbstractListPageService) { }

}

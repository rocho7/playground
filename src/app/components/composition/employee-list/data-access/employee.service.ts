import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AbstractListPageService } from '../../base/list-page';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends AbstractListPageService {
  listData$ = this.getAll();

  getAll() {
    return of(['employee 1', 'employee 2', 'employee 3', 'employee 4', 'employee 5',]);
  }

}

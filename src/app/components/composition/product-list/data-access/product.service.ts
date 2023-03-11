import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AbstractListPageService } from '../../base/list-page';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AbstractListPageService {

  listData$ = this.getAll();

  getAll() {
    return of([
      'Iron Throne',
      'Dragon Glass',
      'Arrow',
      'Leather',
      'Chain Mail',
      'Wine',
    ]);
  }
}

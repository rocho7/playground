import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoading$ = new Subject<boolean>();

  constructor(
  ) { }

  showLoading(): void {
    this.isLoading$.next(true);
  }

  hideLoading(): void {
    this.isLoading$.next(false);
  }



}

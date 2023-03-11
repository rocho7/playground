import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataGridService {

  constructor() { }

  get() {
    return 'data from DataGridService';
  }
}

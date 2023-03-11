import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {

  constructor(
    private router: Router
  ) { }

  goTo(): void {
    this.router.navigate(['operador-pluck'])
  }

}

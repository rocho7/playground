import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-curso-rxjs',
  templateUrl: './curso-rxjs.component.html',
  styleUrls: ['./curso-rxjs.component.css']
})
export class CursoRxjsComponent implements OnInit {

    observer: Observer<any> = {
      next: value =>  console.log("next ", value),
      error: error => console.log("error ", error),
      complete: () => console.log("complete ")
    }

   obs$ = new Observable<string>( subs => {
    subs.next('Hola')
    subs.next('Mundo')

    subs.next('Hola')
    subs.next('Mundo')
    subs.complete()
  });
  constructor() {
    console.log("CursoRxjsComponent")
   }

  ngOnInit(): void {


    // this.obs$.subscribe(
    //   valor => console.log("Valor ", valor),
    //   error => console.log("error ", error),
    //   () => console.log('complete')
    //  )

    this.obs$.subscribe( this.observer )

  }

}

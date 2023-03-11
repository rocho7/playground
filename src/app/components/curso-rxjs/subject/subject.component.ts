import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, merge, Observable, of, Subject } from 'rxjs';
import { exhaustMap, mergeMap, switchMap, timeout } from 'rxjs/operators';
import { ObsService } from 'src/app/services/obs.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  intervalo$ = new Observable<number>( ( subscriber:any ) => {
    const interval = setInterval(() => {
      let n = Math.random()
      subscriber.next( n )
    }, 3000)
    return () => {
      clearInterval( interval );
      console.log("intervalo destruido")
    }
  })

  constructor( private obsService: ObsService ) {
  }

  ngOnInit(): void {
    const subject$ = new Subject();
    //*El observable intervalo$ es enlazado con el subject$ a modo de observer para recibir el mismo valor en cada subscripción.
    this.intervalo$.subscribe( subject$ )
    //!DESCOMENTAR ESTAS LÍNEAS PARA VER EL RESULTADO.
    // subject$.subscribe( result => console.log("result 1 ", result) );
    // subject$.subscribe( result => console.log("result 2 ", result));

    this.obsService.setData( "Angel")
    this.obsService.getResultsWithRxjs()
    this.getDataFromSubject()
    setTimeout( () => {
      this.obsService.setData( "Angel León")
    }, 3000)
    this.productSubscription();
  }

  getDataFromSubject() {
    this.obsService.name$.subscribe( v => {
     console.log("valor ", v)
    });
    this.obsService.subject$.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    this.obsService.subject$.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });
    forkJoin(this.obsService.getResult(1), this.obsService.getResults())
    .subscribe( data => {
      console.log("USANDO forkjoin ", data)
    })
    let source$ = of(this.obsService.getResult(1), this.obsService.getResults())
    source$.pipe(
      mergeMap( data => data)
    ).subscribe( result => console.log("USANDO MERGEMAP utiliza una única subscripción ", result) );

    source$.pipe(
      switchMap( data => data)
    ).subscribe( result => console.log("USANDO switchMap ", result) );
    let subjectData$ = of(this.obsService.name$, this.obsService.dataFromUrl$)
    subjectData$.pipe(
      exhaustMap( data => data)
    ).subscribe( result => console.log("exhaustMap switchMap ", result) );
  }

  count: number = 0;
  counter$ = new BehaviorSubject<number>(0);
  product$ = new Subject();
  products: Array<{name: string, value: number}> = [
    {name: 'Product 1', value: 200},
    {name: 'Product 2', value: 500},
    {name: 'Product 3', value: 300},
  ];


  product( item: {name: string, value: number} ) {
    this.product$.next(item);
  }
  productAdd() {
    this.count ++;
    this.counter$.next(this.count)
    this.product$.next(this.counter$)
  }
  productRemove() {
    this.count --;
    this.counter$.next(this.count)
    this.product$.next(this.counter$)
  }

  productSubscription() {
    this.product$.subscribe( p => {
      console.log('%cproduct ', 'color: red; display: block; width: 100%;', p);
    })
    // this.counter$.subscribe( c => {
    //   console.log('%ccounter ', 'color: yellow; display: block; width: 100%;', c);
    // })
  }

}

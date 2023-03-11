import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, interval, of, Subject, timer, zip } from 'rxjs';
import { filter, map, pluck, take, tap } from 'rxjs/operators';
interface VALUES  {
  name: string,
  city: string
}
@Component({
  selector: 'app-ejercicio-rxjs',
  templateUrl: './ejercicio-rxjs.component.html',
  styleUrls: ['./ejercicio-rxjs.component.css']
})
export class EjercicioRxjsComponent implements OnInit {

  @ViewChild('showZip', { static: true } ) showZip: ElementRef;
  arraySubject$ = new Subject<VALUES[]>();
  containValueOfSubject: Array<VALUES>;
  arr = from([1, 2, 3, 4, 5]);
  obj = {
    name: 'xavi',
    city: 'Torrent'
  };

  lista: Array<VALUES> = [
    { name: 'yo', city: 'picaña'},
    { name: 'tu', city: 'alacuas'},
    { name: 'otro', city: 'torrent'}
  ];

  fromObs: any;

  constructor() { }

  ngOnInit(): void {

    console.log("arr ", this.arr);
    this.arr.subscribe( console.log );

    of(this.obj).subscribe( console.log);

    this.fromObs = from(this.lista).pipe(
      filter(f => f.name.length > 2 ),
      map( it => it.name.concat('!!!'))
    );
    this.fromObs.subscribe(console.log)

    of( this.lista ).pipe(
      map( it => it.concat( {name: 'new name', city: 'new citye'} ) )
      ).subscribe( console.log );

    this.arraySubject$.pipe(
      map( it => this.containValueOfSubject = [
        ...it.filter( f => f.name.length > 2)
      ] )
    ).subscribe( res => console.log("subject ", res) )

      setTimeout(()=> {
        this.addItemToArraySubject( {name: 'dentro del', city: 'timout'} );
      }, 2000)

      setTimeout(()=> {
        this.addItemToArraySubject( {name: 'dentro del**', city: 'timout**'} );
      }, 5000)
      this.zipOperator();
  }

  addItemToArraySubject( item: { name: string; city: string; } ): void {
    this.lista.push( item );
    this.arraySubject$.next( this.lista );
  }

  zipOperator(): void {
    let age = [27,25,29];
    let name = ['Foo', 'Bar', 'Beer'];
    let isDev = [true, true, false]


    const t1 = interval(500).pipe(
      take(name.length),
      map( i => name[i])
    )
    const t2 = interval(2500).pipe(
      take(age.length),
      map( i => age[i] )
    )
    const t3 = interval(4500).pipe(
      take(isDev.length),
      map( i => isDev[i])
    )

    const zipOperator = zip(t1, t2, t3);

   zipOperator.subscribe( it => {
     this.showZip.nativeElement.innerHTML = it;
    })
  }

}

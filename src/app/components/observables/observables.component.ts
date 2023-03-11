import { Component, OnInit } from '@angular/core';
import  { Observable, interval, of, from, pipe, Subject, forkJoin, zip } from 'rxjs';
import { tap, map, filter, scan, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'
import { ObsService } from '../../services/obs.service'

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  numbers$: Observable<number> = interval(1000);
  myArray = [10, 20, 30]
  private myArrayOf$: Observable<any>;
  private myArrayFrom$: Observable<any>;
  private myArrayOfTap$: Observable<any>;
  private subject = new Subject<any>();


  constructor( private obs: ObsService ) { }

  ngOnInit(): void {
    // const result = this.numbers$;
    // console.log(result);

    this.numbers$.subscribe(n => {
      if ( n === 5 ) {
        this.myArray.push(40)
        console.log(this.myArray)
        this.subject.next(this.myArray)
      }
    });
    this.myArrayOf$ = of(this.myArray);
    this.myArrayOf$.subscribe( value => console.log(value) );

    this.myArrayFrom$ = from( this.myArray );
    this.myArrayFrom$.subscribe( value => console.log(value) );
    this.myArrayFrom$
    .pipe(
      tap( data => console.log("tap ", data) ))
    .subscribe( data => console.log("tap 2", data));
    this.myArrayFrom$
    .pipe(
      map( data => data * 2 ))
    .subscribe( data => console.log("map ", data))

    //SUBJECT
    this.subject
    .pipe(
      tap ( value => console.log("subject ", value)))
    .subscribe(value => console.log("subject 2 ", value));

    const nums = of(1, 2, 3, 4, 5);
    console.log("typeof " , typeof nums);
    const alCuadrado = pipe(
      filter( ( n: number ) => n % 2 === 0 ),
      map( n => n * n )
    )
    const cuadrado = alCuadrado( nums )
    cuadrado.subscribe( x => console.log("cuadrado ", x));

    //*MERGEMAP NO IMPORTA EL ORDEN CONCATMAP IMPORTA EL ORDEN
    const source = of(
      this.obs.getGithub('1'),
      this.obs.getGithub('2'),
      this.obs.getGithub('3')
    )
    source.pipe(
      mergeMap(v => v)
    ).subscribe( result => console.log("ejempleo mergemap ", result));

    zip(
      this.obs.getGithub('1'),
      this.obs.getGithub('2'),
      this.obs.getGithub('3')
    ).subscribe( (x:any) => console.log("zip ", x))
    const c1 = this.obs.getResult(1)
    const c2 = this.obs.getResult( 2 )
    const newZip = zip( c1, c2 )
    newZip.subscribe( result => console.log("New zip ", result))

      //*MULTIPLES LLAMADAS
    forkJoin(
      this.obs.getGithub('1'),
      this.obs.getGithub('2'),
      this.obs.getGithub('3')
    ).subscribe( (x:any) => console.log("forkjoin ", x))

      //* HACER UNA LLAMADA AJAX CON LA RESPUESTA DE OTRA LLAMADA AJAX.
      this.obs.getGithub('3').pipe(
        mergeMap( ( res:any ) => ajax( res.url ) )
      ).subscribe( ( result:any ) => {
         console.log("recibo respuesta ajax y realizo otra con la respuesta ", result);
      });

      source.pipe(
        mergeMap(v => v)
      ).pipe(
        scan( ( acc:any, curr:any ) => [...acc, curr.url], []  )
      ).subscribe( ( result:any ) => console.log("utilizando scan ", result) );


  }


}

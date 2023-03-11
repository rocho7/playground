import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { asyncScheduler, from, fromEvent, interval, Observable, of, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, map, mapTo, pluck, reduce, sample, sampleTime, switchMap, tap } from 'rxjs/operators';
interface Personaje {
  type: string;
  name: string;
};
@Component({
  selector: 'app-operador-pluck',
  templateUrl: './operador-pluck.component.html',
  styleUrls: ['./operador-pluck.component.css']
})
export class OperadorPluckComponent implements OnInit {


  obj: any = {
    name: 'Angel',
    mails: {
      gmail: 'angel@gmail.com',
      hotmail: 'hotmail@gmail.com'
    }
  };
  arr = [1, 2, 3];
  people: Array<Personaje> = [];
  superHeroes: Array<Personaje> = [];
  superHeroesUntilChanged: Array<Personaje> = [];
  superHeroesUntilKeyChanged: Array<Personaje> = [];
  myData$ = of( this.obj );
  constructor( private renderer: Renderer2, private el: ElementRef, private router: Router, private route: ActivatedRoute) {}

  goTo(): void {
    this.router.navigate( ['view-child', 'hijo2'] );
  }

  ngOnInit(): void {
    console.log( "*************METODO PLUCK*********" )
    this.myData$.pipe(
      pluck('mails', 'gmail')
    ).subscribe( console.log )
    const personajes: Personaje[] = [
      {
        name: 'Batmam',
        type: 'heroe'
      },
      {
        name: 'Batmam',
        type: 'heroe'
      },
      {
        name: 'Robin',
        type: 'heroe'
      },
      {
        name: 'Joker',
        type: 'Villano'
      },
      {
        name: 'Joker',
        type: 'Villano'
      },
      {
        name: 'Robin',
        type: 'heroe'
      },
      {
        name: 'Joker',
        type: 'Villano'
      },
    ]
    console.log( "*************METODO FILTER*********" )
  //  let people: Observable<Personaje[]>;
   from<Personaje[]>( personajes ).pipe(
      filter( p => p.type === 'heroe' )
    ).subscribe( p => this.people.push(p) )
      console.log( "*************METODO DISTINCT*********" )
  //  this.people.pipe(
  //     distinct( p => p.name )
  //   ).subscribe( console.log )
    console.log( "*************METODO DISTINCTUNTILCHANGED AND DEBOUNCETIME*********" )
    const input = this.renderer.createElement('input');
    this.renderer.appendChild(this.el.nativeElement, input);

    let click$ = fromEvent( input, 'keyup' )
    // click$.pipe(
    //   debounceTime(3000),
    //   pluck('target', 'value'),
    //   distinctUntilChanged()
    // ).subscribe( console.log )

    console.log( "*************METODO SAMPLETIME*********" )
    //*ESPERA UN DETERMINADO TIEMPO PARA EMITIR LA SUBSCRIPCIÓN
    // click$.pipe(
    //   sampleTime(5000),
    //   pluck('target', 'value')
    // ).subscribe( console.log )

    let url = 'https://httpbin.org/delay/3?arg='
    click$.pipe(
      pluck('target', 'value'),
      switchMap( texto => ajax.getJSON( url + texto ) )
    ).subscribe( console.log )

    const name = ['batman', 'superman', 'spiderman'];
    const capitalizar = ( name: string ) => {
      let c = name.charAt(0).toUpperCase() + name.slice(1, name.length)
      return c
    }

    const heroes$ = from( name )
    heroes$.pipe(
      map<string, string>( capitalizar )
    ).subscribe( res => console.log("res ", res) )
    console.log( "*************METODO REDUCE*********" )

    const num = [1, 2, 'foo', 4, 5, 'barr', 7]
    from( num ).pipe(
      filter<any>( n => !isNaN(n) ),
      reduce<number>( (an, ac) => an + ac)
    ).subscribe( console.log )

    const interval$ = interval(3000)

    const int = interval$.pipe(map( Math.random ));

    const subject$ = new Subject();
    int.subscribe( subject$ );

    // subject$.subscribe( result => console.log( "res1 ", result));
    // subject$.subscribe( result => console.log( "res2 ", result));

    // const countDown$ = asyncScheduler.schedule( function( state ) {
    //   console.log("state ", state)
    //   this.schedule( state -1, 1000)
    //   if( state === 0 ) {
    //     countDown$.unsubscribe()
    //   }
    // },3000, 7)

    this.examplePluckOperator();
    this.exampleDistinct(personajes);
    this.exampleDistinctUntilChanged(personajes);
    this.exampleDistinctUntilKeyChanged(personajes);
  }

  examplePluckOperator(): void {
    const element = document.querySelector('.key');
    const elementUrl = document.querySelector('.baseUri');
    const elementMapTo = document.querySelector('.mapTo');
    const letterKeup$ = fromEvent<KeyboardEvent>(document, 'keyup')
    letterKeup$.pipe(
      pluck('key')
    ).subscribe(code => {
      element?.append(code)
    })
    letterKeup$.pipe(
      pluck('target', 'baseURI')
    ).subscribe( (baseUri: any) => {
      if ( !elementUrl?.innerHTML ) {
        elementUrl?.append(baseUri)
      }
    })
    letterKeup$.pipe(
      mapTo('devuelve un valor')
    ).subscribe( res => {
      if ( !elementMapTo?.innerHTML ) {
        elementMapTo?.append(res);
      }
    })
  }

  exampleDistinct(personajes: Personaje[]): void {
    from(personajes).pipe(
      distinct( p => p?.name )
    ).subscribe( res => this.superHeroes.push(res))
  }


  exampleDistinctUntilChanged(personajes: Personaje[]): void {
    from(personajes).pipe(
      distinctUntilChanged( (prev, curr) => prev?.name === curr?.name )
    ).subscribe( res => this.superHeroesUntilChanged.push( res ) );
  }

  exampleDistinctUntilKeyChanged(personajes: Personaje[]): void {
    from(personajes).pipe(
      distinctUntilKeyChanged('name')
    ).subscribe( res => this.superHeroesUntilKeyChanged.push( res ) );
  }
}

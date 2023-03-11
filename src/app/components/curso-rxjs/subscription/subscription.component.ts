import { Component, OnInit } from '@angular/core';
import { Observer, Observable, range, of, interval, timer } from 'rxjs'
import { delay, take } from 'rxjs/operators';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {



  range$: Observable<number>;
  randomNumber: Array<number> = [1,2,3,4,5];
  of$: Observable<Array<number>>;
  prueba: Array<number> = [];
  interval$: Observable<number>;
  timer$:  Observable<number>;
  itTakes5seconds = new Date();

  observer: Observer<any> = {
    next: value =>  console.log("next ", value),
    error: error => console.log("error ", error),
    complete: () => console.log("complete ")
  }
  intervalo$ = new Observable<number>( ( subscriber:any ) => {
    let count = 0;
    const interval = setInterval(() => {
      count ++;
      subscriber.next( count )
      console.log( count );
    }, 1000)
    return () => {
      clearInterval( interval );
      console.log("intervalo destruido")
    }
  })
  constructor() { }

  ngOnInit(): void {
    const subs1 = this.intervalo$.subscribe();
    const subs2 = this.intervalo$.subscribe();
    const subs3 = this.intervalo$.subscribe();

    subs1.add(subs2).add(subs3);
    setTimeout( () => {
      subs1.unsubscribe();
      // subs2.unsubscribe();
      // subs3.unsubscribe();

      console.log("completado timeout")
    }, 3000);
    this.rangeObservableExample();
    this.intervalObservableExample();
  }

  rangeObservableExample(): void {
    this.of$ = of(this.randomNumber);
    this.range$ = range(1, 7).pipe(
      delay(1000),
    )
    range(1, 7).subscribe( item => {
      this.prueba.push(item)
    })
  }

  intervalObservableExample(): void {
    this.itTakes5seconds = new Date();
    this.itTakes5seconds.setSeconds( this.itTakes5seconds.getSeconds() + 5 );
    this.timer$ = timer(this.itTakes5seconds);
    console.log('%cthis.itTakes5seconds ', 'background: green; color: white; display: block;', this.itTakes5seconds);
    this.timer$.subscribe(console.log)
    this.interval$ = interval(1000).pipe(
      take(10)
    );
  }
}

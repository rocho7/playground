import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap, debounceTime, exhaustMap, map, mergeAll, mergeMap, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-operators-transformation',
  templateUrl: './operators-transformation.component.html',
  styleUrls: ['./operators-transformation.component.css']
})
export class OperatorsTransformationComponent implements OnInit, AfterViewInit {
  @ViewChild('mergeallInput') mergeAllInput: ElementRef<HTMLInputElement>;
  @ViewChild('showMergeAllResult') mergeAllSpan: ElementRef<HTMLSpanElement>;
  @ViewChild('mergeMapInput') mergeMapInput: ElementRef<HTMLInputElement>;
  @ViewChild('showMergeMapResult') mergeMapSpan: ElementRef<HTMLSpanElement>;
  @ViewChild('switchMapInput') switchMapInput: ElementRef<HTMLInputElement>;
  @ViewChild('showSwitchMapResult') switchMapSpan: ElementRef<HTMLSpanElement>;
  @ViewChild('concatMapInput') concatMapInput: ElementRef<HTMLInputElement>;
  @ViewChild('showConcatMapResult') concatMapSpan: ElementRef<HTMLSpanElement>;
  @ViewChild('exhaustMapInput') exhaustMapInput: ElementRef<HTMLInputElement>;
  @ViewChild('showExhaustMapResult') exhaustMapSpan: ElementRef<HTMLSpanElement>;

  url: string;
  url2: string;

  constructor() { }

  ngOnInit(): void {
    this.url = 'http://api.github.com/search/users?q=';
    this.url2 = 'https://httpbin.org/delay/1?arg=';
  }

  ngAfterViewInit(): void {
    this.exampleMergeAll();
    this.exampleMergeMap();
    this.exampleSwitchMap();
    this.exampleConcatMap();
    this.exampleExhaustMap();
  }

  exampleMergeAll(): void {
    const input$ = fromEvent<KeyboardEvent>(this.mergeAllInput.nativeElement, 'keyup');
    input$.pipe(
      debounceTime(1000),
      pluck<KeyboardEvent, string>('target', 'value'),
      map<string, Observable<any>>( text => ajax.getJSON(`${this.url}${text}`)),//? esto devuelve otro observable
      mergeAll(),//? el map devuelve un observable debido al ajax.getJson y el mergeAll se subscribirá al observable y lo resolverá.
      pluck<Observable<any>, Array<any>>('items')
    ).subscribe( res => {
      this.mergeAllSpan.nativeElement.innerHTML = `Total ${res.length} de la búsqueda con: ${this.mergeAllInput.nativeElement.value}`;
    })
  }

  exampleMergeMap():void {
    const input$ = fromEvent<KeyboardEvent>(this.mergeMapInput.nativeElement, 'keyup');
    input$.pipe(
      pluck<KeyboardEvent, string>('target', 'value'),
      mergeMap<string, Observable<any>>( text => ajax.getJSON(`${this.url2}${text}`)),//? esto devuelve otro observable
    ).subscribe( res => {
      this.mergeMapSpan.nativeElement.innerHTML = `Total ${this.mergeMapInput.nativeElement.value.length} peticiones
       de la búsqueda con: ${this.mergeMapInput.nativeElement.value}, NO SE CANCELA NINGUNA`;
    })
  }

  exampleSwitchMap():void {
    const input$ = fromEvent<KeyboardEvent>(this.switchMapInput.nativeElement, 'keyup');
    input$.pipe(
      pluck<KeyboardEvent, string>('target', 'value'),
      switchMap<string, Observable<any>>( text => ajax.getJSON(`${this.url2}${text}`)),//? esto devuelve otro observable
    ).subscribe( res => {
      this.switchMapSpan.nativeElement.innerHTML = `Total ${this.switchMapInput.nativeElement.value.length}
      de la búsqueda con: ${this.switchMapInput.nativeElement.value}, SE CANCELA LAS PREVIAS`;
    })
  }

  exampleConcatMap():void {
    const input$ = fromEvent<KeyboardEvent>(this.concatMapInput.nativeElement, 'keyup');
    input$.pipe(
      pluck<KeyboardEvent, string>('target', 'value'),
      concatMap<string, Observable<any>>( text => ajax.getJSON(`${this.url2}${text}`)),//? esto devuelve otro observable
    ).subscribe( res => {
      this.concatMapSpan.nativeElement.innerHTML = `Total ${this.concatMapInput.nativeElement.value.length}
      de la búsqueda con: ${this.concatMapInput.nativeElement.value}, termina las subscripciones de forma secuencial`;
    })
  }

  exampleExhaustMap(): void {
    const input$ = fromEvent<KeyboardEvent>(this.exhaustMapInput.nativeElement, 'keyup');
    input$.pipe(
      pluck('target', 'value'),
      exhaustMap( text => ajax.getJSON(`${this.url}${text}`))
    ).subscribe( res => {
      this.exhaustMapSpan.nativeElement.innerHTML = `${this.exhaustMapInput.nativeElement.value}`;
    })
  }
}

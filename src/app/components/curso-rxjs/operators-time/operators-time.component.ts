import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { asyncScheduler, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-operators-time',
  templateUrl: './operators-time.component.html',
  styleUrls: ['./operators-time.component.css']
})
export class OperatorsTimeComponent implements OnInit, AfterViewInit {

  @ViewChild('debounceDiv') debounceDiv: ElementRef<HTMLDivElement>;
  @ViewChild('debounceInput') debounceInput: ElementRef<HTMLInputElement>;
  @ViewChild('showDebounceResult') afterFewSecond: ElementRef<HTMLSpanElement>;
  @ViewChild('throttleInput') throttleInput: ElementRef<HTMLInputElement>;
  @ViewChild('showThrottleResult') throttleSpan: ElementRef<HTMLSpanElement>;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.exampleDebounceTime();
    this.exampleThrottleTime();
  }

  exampleDebounceTime(): void {
    const debounce$ = fromEvent( this.debounceDiv.nativeElement, 'click');
    debounce$.subscribe(console.log)
    const input$ = fromEvent<KeyboardEvent>(this.debounceInput.nativeElement, 'keyup');
    input$.pipe(
      debounceTime(1000),
      pluck<KeyboardEvent, string>('target', 'value'),
      distinctUntilChanged()
    ).subscribe( (val) => {
      this.afterFewSecond.nativeElement.innerHTML = val
    })
  }

  exampleThrottleTime(): void {
    const input$ = fromEvent<KeyboardEvent>(this.throttleInput.nativeElement, 'keyup');
    input$.pipe(
      throttleTime(1000, asyncScheduler,{
        leading: true,// recoge el primer valor emitido
        trailing: true// recoge el último valor emitido
      }),
      pluck<KeyboardEvent, string>('target', 'value'),
      distinctUntilChanged()
    ).subscribe( (val) => {
      this.throttleSpan.nativeElement.innerHTML = val
    })
  }

}

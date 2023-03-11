import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  DoCheck,
  ContentChild,
  ElementRef,
} from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

interface ILifecycle {
  name: string;
  timesCalled: number;
}
@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})

export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() myNewNumber: number;
  @Input() myName: string;
  @Input() myUser: string;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;
  message: string;
  lifeCycle: Array<ILifecycle> = [];
  count$ = new BehaviorSubject<number>(0);
  newComponent: number;

  constructor() {
    this.onHandleLifeCycle('Constructor');
  }

  isLifeCycle( nameLifeCycle: string ) {
    return this.lifeCycle.findIndex(lifeCycle => lifeCycle.name === nameLifeCycle );
  }

  onHandleLifeCycle( lifeCycleName: string ): void {
    const index = this.isLifeCycle(lifeCycleName);
    if ( index < 0 ) {
      this.lifeCycle.push({name: lifeCycleName, timesCalled: 0})
    } else if ( index > 0 ) {
      this.count$.next(this.count$.getValue() + 1)
      this.lifeCycle[index] = {name: lifeCycleName, timesCalled: this.count$.getValue()};
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.onHandleLifeCycle('ngOnChanges');
    let newNumberChanged: SimpleChange = changes.myNewNumber;
    if ( changes.myNewNumber.isFirstChange() ) {
      this.newComponent = changes.myNewNumber.currentValue;
    } else {
      this.newComponent = changes.myNewNumber.currentValue < changes.myNewNumber.previousValue ? changes.myNewNumber.currentValue - changes.myNewNumber.previousValue : changes.myNewNumber.currentValue - changes.myNewNumber.previousValue;
    }
    console.log("Changes ", changes);
    console.log("newNumberChanged ", newNumberChanged);
  }

  ngOnInit(): void {
    this.onHandleLifeCycle('ngOnInit');
  }

  ngDoCheck() {
    this.onHandleLifeCycle('ngDocCheck');
    console.log("myUser ", this.myUser);
  }

  ngAfterContentInit(): void {
    this.onHandleLifeCycle('ngAfterContentInit');
    console.log("ngAfterContentInit");
    console.log(
      "ver elemento dentro de las etiquetas hija en el elemento padre ",
      this.paragraph.nativeElement.textContent
    );
  }
  ngAfterContentChecked(): void {
    this.onHandleLifeCycle('ngAfterContentChecked');
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    this.onHandleLifeCycle('ngAfterViewInit');
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    this.onHandleLifeCycle('ngAfterViewChecked');
    console.log("ngAfterViewChecked");
  }

  showMessage(): string {
    console.log('%cSe llama a este método demasiadas veces en el COMPONENTE ', 'color: red; display: block; width: 100%;', );
    return this.message ? this.message.toUpperCase() : '';
  }
}

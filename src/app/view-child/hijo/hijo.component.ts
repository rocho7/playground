import { Component, Input, OnInit, Output, EventEmitter, Host } from '@angular/core';
// import { ViewChildComponent } from '../view-child.component';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  propiedad1: string = 'hola'
  propiedad2: string = 'que tal'
  @Input('dataUser') data: any
  @Output() delete: EventEmitter<any> = new EventEmitter();

  // constructor( @Host() private a: ViewChildComponent ) {

  //   console.log(a)
  // }

  constructor(){}

  ngOnInit(): void {
  }

  sayHello(){
    console.log('Hello! Called from parent');
  }
  deleteUser( id: number ) {
    this.delete.emit( id );
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseClass } from 'src/app/core/desing-pattern/classes/baseClass';
import { MasterCard } from 'src/app/core/desing-pattern/classes/masterCard';
import { IBaseClass } from 'src/app/core/desing-pattern/interfaces/baseCard';
import { VisaCard } from "../../core/desing-pattern/classes/visaCard";

@Component({
  selector: 'app-design-pattern',
  templateUrl: './design-pattern.component.html',
  styleUrls: ['./design-pattern.component.css']
})
export class DesignPatternComponent implements OnInit {

  base: IBaseClass;
  methodPayment: string;
  user: string;
  amount: number;
  @ViewChild('messagePayment', { read: ElementRef }) message : ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.base = new BaseClass();
  }

  payment() {

    if ( this.methodPayment === 'visa' ) {
      if ( this.base ) {
        this.base.setStrategy( new VisaCard('card123', '123cvv') );
      }
    } else if (this.methodPayment === 'master' ) {
      if ( this.base ) {
        this.base.setStrategy( new MasterCard( 'master123', '456cvv' ) );
      }
    }
    if ( this.base.execute( this.user, this.amount ) ) {
      this.message.nativeElement.innerHTML = `Compra realizada por ${this.user}
       con ${this.methodPayment}`;
    }
  }

  submit(): void {
    this.payment();
  }

}

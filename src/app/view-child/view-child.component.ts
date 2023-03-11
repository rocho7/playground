import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, interval, of, ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @ViewChild( 'name', { static: true } ) nombre: ElementRef;
  @ViewChild( HijoComponent, { static: true } ) hijo: HijoComponent;
  $number: ReplaySubject<number> = new ReplaySubject<number>(3);
  $behavoir: BehaviorSubject<number> = new  BehaviorSubject<number>(0);
  $interval: any

  users: any[] = [];
  constructor( private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  goTo(): void {
    this.router.navigate( ['hijo2'], { relativeTo: this.route } );
  }

  ngOnInit(): void {
    console.log(this.nombre);
    console.log(this.hijo)
    // this.hijo.sayHello()

    this.http.get<any>('https://jsonplaceholder.typicode.com/users')
    .subscribe( data => this.users = data )

    this.$interval = interval(1000).pipe(
      take( 6 )
    )
    this.$interval.subscribe( this.$number )
    this.$interval.subscribe( this.$behavoir )


      console.log("SUM ", this.sum( 1, 3));
  }

  deleteUserFromList( id: number) {
    this.users = this.users.filter( user => user.id !== id );
  }

  checkReplaySubject(){
    this.$number.subscribe( val =>console.log( "ReplaySubject ", val ) )
    // this.$interval.unsubscribe()
    console.log("ReplaySubject getNow", this.$number._getNow())

    this.$behavoir.subscribe( val => console.log("BehaivourSubject ", val))

    console.log('BehaviourSubject getValue ', this.$behavoir.getValue());
  }

  sum( a: number, b: number ): number {
    return a +b;
  }

}

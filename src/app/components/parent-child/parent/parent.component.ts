import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myNumber: number = 3;
  name: string = "Angel"
  user = {
    name: "Romualdo"
  };
  constructor() { }

  ngOnInit(): void {
  }

  updateUser(){
    this.user.name = "Federico"
    // this.user = {
    //   name: "Federico"
    // }
  }

  addition(){
    this.myNumber ++;
  }

  subtract(){
    this.myNumber --;
  }

}

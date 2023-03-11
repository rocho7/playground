import { Component, OnInit } from '@angular/core';
import { ExampleOneService } from '../services/example-one.service';
import { ExampleTwoService } from '../services/example-two.service';

@Component({
  selector: 'app-use-class',
  templateUrl: './use-class.component.html',
  styleUrls: ['./use-class.component.css'],
  providers: [{
    provide: ExampleOneService,
    useClass: ExampleTwoService
  }]
})
export class UseClassComponent implements OnInit {

  messageGet: string;
  messagePost: string;

  constructor(
    private readonly exampleUseClass: ExampleOneService
  ) { }

  ngOnInit(): void {
    this.messageGet = this.exampleUseClass.get()
    this.messagePost = this.exampleUseClass.post();
  }

}

import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Component({
  selector: "app-directives-custom",
  templateUrl: "./directives-custom.component.html",
  styleUrls: ["./directives-custom.component.css"],
})
export class DirectivesCustomComponent implements OnInit {
  items = [
    {
      name: "Mark Hoppus",
      age: 44,
      location: "California",
    },
    {
      name: "Tom Delonge",
      age: 41,
      location: "California",
    },
    {
      name: "Travis Barker",
      age: 41,
      location: "California",
    },
  ];
  constructor() {}

  ngOnInit(): void {
    of(this.items)
      .pipe(delay(2000))
      .subscribe((res) => {
        this.items = [
          ...this.items,
          {
            name: "New item",
            age: 3341,
            location: "Nueva California",
          },
        ];
      });
  }
}

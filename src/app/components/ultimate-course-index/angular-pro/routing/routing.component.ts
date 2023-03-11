import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-routing",
  templateUrl: "./routing.component.html",
  styleUrls: ["./routing.component.css"],
})
export class RoutingComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((route: any) => route instanceof NavigationEnd))
      .subscribe((event) => {
        console.log(
          "%cRoute events  ",
          "color: red; display: block; width: 100%;",
          event
        );
      });
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mail-app",
  templateUrl: "./mail-app.component.html",
  styleUrls: ["./mail-app.component.css"],
})
export class MailAppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onActivate(event: any) {
    console.log(
      "%cactivate ",
      "color: red; display: block; width: 100%;",
      event
    );
  }
  onDeactivate(event: any) {
    console.log(
      "%cactivate ",
      "color: red; display: block; width: 100%;",
      event
    );
  }
}

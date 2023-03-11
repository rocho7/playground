import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auth-message",
  templateUrl: "./auth-message.component.html",
  styleUrls: ["./auth-message.component.css"],
})
export class AuthMessageComponent implements OnInit {
  public days: number;
  constructor() {}

  ngOnInit(): void {
    this.setDays(7);
  }

  setDays(numbersOfDays: number): void {
    this.days = numbersOfDays;
  }
}

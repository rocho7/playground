import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Mail } from "../models/mail.interface";

@Component({
  selector: "app-mail-item",
  templateUrl: "./mail-item.component.html",
  styleUrls: ["./mail-item.component.scss"],
})
export class MailItemComponent implements OnInit {
  @Input() message: Mail;
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  navigateToMessage() {
    this.router.navigate([
      "",
      { outlets: { pane: ["message", this.message.id] } },
    ]);
  }
}

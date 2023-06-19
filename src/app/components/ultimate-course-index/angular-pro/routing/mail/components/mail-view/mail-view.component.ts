import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Mail } from "../models/mail.interface";
import { pluck } from "rxjs/operators";

@Component({
  selector: "app-mail-view",
  templateUrl: "./mail-view.component.html",
  styleUrls: ["./mail-view.component.css"],
})
export class MailViewComponent implements OnInit {
  reply: string = "";
  hasUnsavedChanges = false;
  // message: Observable<Mail> = this.route.data?.pluck('message')

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.reply = "";
      this.hasUnsavedChanges = false;
    });
  }

  updateReply(value: any) {
    this.reply = value;
    this.hasUnsavedChanges = true;
  }

  sendReply() {
    this.hasUnsavedChanges = false;
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { pluck } from "rxjs/operators";
import { Mail } from "../../components/models/mail.interface";

@Component({
  selector: "app-mail-folder",
  templateUrl: "./mail-folder.component.html",
  styleUrls: ["./mail-folder.component.css"],
})
export class MailFolderComponent implements OnInit {
  data: Observable<any>;
  title: Observable<any>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.data = this.route.data;
    this.title = this.route.params.pipe(pluck("name"));
  }
}

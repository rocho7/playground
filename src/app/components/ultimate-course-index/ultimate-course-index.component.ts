import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-ultimate-course-index",
  templateUrl: "./ultimate-course-index.component.html",
  styleUrls: ["./ultimate-course-index.component.css"],
})
export class UltimateCourseIndexComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  goTo(navigateTo: string): void {
    this.router.navigate(["ultimate", "angular-pro"]);
  }
}

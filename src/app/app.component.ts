import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MyConfigService } from "./components/my-config-service/my-config.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "rxjs";
  public appName: string = "";

  constructor(private myConfigService: MyConfigService, private route: Router) {
    this.appName = this.myConfigService.getAppName();
    console.log(
      "%cEjemplo de injection Token ",
      "color: red; display: block; width: 100%;",
      this.appName
    );
  }

  goTo(navigateTo: string): void {
    if (navigateTo === "playground") {
      this.route.navigate(["playground"]);
    } else {
      this.route.navigate(["ultimate"]);
    }
  }
}

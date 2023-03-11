import { Component } from "@angular/core";
import { MyConfigService } from "../my-config-service/my-config.service";

@Component({
  selector: "app-playground-index",
  templateUrl: "./playground-index.component.html",
  styleUrls: ["./playground-index.component.css"],
})
export class PlaygroundIndexComponent {
  title = "rxjs";
  public appName: string = "";

  constructor(private myConfigService: MyConfigService) {
    this.appName = this.myConfigService.getAppName();
    console.log(
      "%cEjemplo de injection Token ",
      "color: red; display: block; width: 100%;",
      this.appName
    );
  }
}

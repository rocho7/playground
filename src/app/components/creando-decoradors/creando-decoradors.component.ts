import { WrappedNodeExpr } from "@angular/compiler";
import { ArgumentType } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import {
  Emoji,
  Log,
  Sticker,
  doSomething,
  loggingDecorator,
  CheckValidDataId,
} from "./decorators/decorators";

@Component({
  selector: "app-creando-decoradors",
  templateUrl: "./creando-decoradors.component.html",
  styleUrls: ["./creando-decoradors.component.css"],
})
@Sticker
export class CreandoDecoradorsComponent implements OnInit {
  @Emoji()
  flavor = "vainilla";
  empCategory: "Manager" | "Non-Manager" = "Manager";
  constructor() {
    this.empCategory = "Non-Manager";
    // console.log("ver el decorador Sticker ", this["name"]())
    console.log("resultado es: ", this.aSimpleMethod(new Date()));
  }
  ngOnInit(): void {
    this.saveDataToDB(0);
    setTimeout(() => {
      this.flavor = "chocolate";
      console.log("flavor ", this.flavor);
    }, 2000);
  }

  @Log
  aSimpleMethod(validation: any): string {
    if (validation) {
      return validation;
    } else {
      return validation;
    }
  }

  @CheckValidDataId()
  saveDataToDB(id: number) {
    console.log(`Data saved wint id ${id}`);
  }
}

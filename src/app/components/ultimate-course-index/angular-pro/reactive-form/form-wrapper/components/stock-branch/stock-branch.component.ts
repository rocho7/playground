import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-stock-branch",
  templateUrl: "./stock-branch.component.html",
  styleUrls: ["./stock-branch.component.css"],
})
export class StockBranchComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  get invalidCustomValidator() {
    return (
      this.parent?.get("store.branch")?.hasError("invalidBranch") &&
      this.parent?.get("store.branch")?.dirty &&
      !this.required("branch")
    );
  }

  required(controlName: string) {
    return (
      this.parent?.get(`store.${controlName}`)?.hasError("required") &&
      this.parent?.get(`store.${controlName}`)?.touched
    );
  }
}

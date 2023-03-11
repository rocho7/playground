import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { FileSizePipe } from "./pipes/file-size.pipe";

interface File {
  name: string;
  size: any;
  type: string;
}

@Component({
  selector: "app-pipes-custom",
  templateUrl: "./pipes-custom.component.html",
  styleUrls: ["./pipes-custom.component.css"],
  providers: [FileSizePipe],
})
export class PipesCustomComponent implements OnInit {
  files: Array<File> = [];
  mapped: Array<File> = [];

  constructor(private readonly fileSizePipe: FileSizePipe) {}

  ngOnInit(): void {
    this.files = [
      { name: "logo.svg", size: 2120109, type: "image/svg" },
      { name: "banner.jpg", size: 18029, type: "image/jpg" },
      { name: "background.png", size: 1784562, type: "image/png" },
    ];

    this.mapped = this.files.map((file: File) => {
      return {
        name: file.name,
        type: file.type,
        size: this.fileSizePipe.transform(file.size, "MB"),
      };
    });
  }
}

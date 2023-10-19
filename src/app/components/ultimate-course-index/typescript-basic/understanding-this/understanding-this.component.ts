import { Component, OnInit } from "@angular/core";

class MyClass {
  myArrowFunctionMethod() {
    const foo = 123;
    console.log(
      "%cmyArrowFunctionMethod OUT TIMEOUT",
      "color: white; background-color: #007acc;",
      this,
      foo
    );
    setTimeout(() => {
      console.log(
        "%cmyArrowFunctionMethod IN TIMEOUT",
        "color: white; background-color: #007acc;",
        this,
        foo
      );
    }, 0);
  }
}

@Component({
  selector: "app-understanding-this",
  templateUrl: "./understanding-this.component.html",
  styleUrls: ["./understanding-this.component.css"],
})
export class UnderstandingThisComponent implements OnInit {
  myObj: any;
  constructor() {}

  ngOnInit(): void {
    this.myObj = {
      name: "foo",
      age: 33,
      greet: () =>
        console.log(
          "%cgreet method ",
          "color: red; display: block; width: 100%;",
          this
        ),
    };
    this.myFunction("ABC", "arg");
    this.myFunction.call(this.myObj, "FROM", "CALL");
    this.myFunction.apply(this.myObj, ["FROM", "APPLY"]);

    const bindFunction = this.myFunction.bind(this.myObj);
    bindFunction("FROM", "BIND");
    bindFunction("FROM", "BIND_2");
    bindFunction("FROM", "BIND_3");

    this.arrowFunctionAndLexicalScope();
  }

  myFunction(text: string, arg: string) {
    console.log(
      "%cmyFunction:: ",
      "background: green; color: white; display: block;",
      this,
      text,
      arg
    );
  }

  //! ARROW FUNCTIONS AND LEXICAL SCOPES
  arrowFunctionAndLexicalScope(): void {
    const instanceMyClass = new MyClass();
    instanceMyClass.myArrowFunctionMethod();
  }
}

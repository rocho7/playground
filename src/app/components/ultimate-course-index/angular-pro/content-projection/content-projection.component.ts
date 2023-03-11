import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { AuthFormComponent } from "./auth-form/auth-form.component";

@Component({
  selector: "app-content-projection",
  templateUrl: "./content-projection.component.html",
  styleUrls: ["./content-projection.component.css"],
})
export class ContentProjectionComponent implements OnInit, AfterViewInit {
  @ViewChild("entry", { read: ViewContainerRef }) entry: ViewContainerRef;
  rememberme: boolean;
  component: ComponentRef<AuthFormComponent>;
  countDynamicComponent: number = 0;
  @ViewChild("tmplentry", { read: ViewContainerRef })
  tmplEntry: ViewContainerRef;
  @ViewChild("tmpl", { read: TemplateRef }) tmpl: TemplateRef<any>;
  constructor(
    private readonly resolver: ComponentFactoryResolver,
    private readonly cd: ChangeDetectorRef,
    private vref: ViewContainerRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createDynamicComponent();
    this.tmplEntry.createEmbeddedView(this.tmpl, {
      $implicit: "template",
      location: "content-projection.component",
    });
    this.cd.detectChanges();
  }

  createUser(ev: any): void {
    console.log(
      "%ccreateUser ",
      "color: white; background-color: #007acc;",
      ev
    );
  }
  loginUser(ev: any): void {
    console.log(
      "%cloginUser ",
      "color: white; background-color: #007acc;",
      ev,
      "remember ",
      this.rememberme
    );
  }

  onRememberme(ev: any): void {
    this.rememberme = ev;
    console.log("%cremenber ", "color: red; display: block; width: 100%;", ev);
  }

  createDynamicComponent(): void {
    const authFormFactory =
      this.resolver.resolveComponentFactory(AuthFormComponent);
    this.component = this.entry.createComponent(
      authFormFactory,
      this.countDynamicComponent
    );
    this.component.instance.messageFromFactory = `Message create from the factory number = ${this.countDynamicComponent}`;
    this.component.instance.submitted.subscribe(this.createUser);
    this.countDynamicComponent = this.countDynamicComponent + 1;
    this.cd.detectChanges();
  }

  moveDynamicComponent(): void {
    const authFormFactory =
      this.resolver.resolveComponentFactory(AuthFormComponent);
    const anotherComponent = this.entry.createComponent(
      authFormFactory,
      this.countDynamicComponent
    );
    const index = 0;
    anotherComponent.instance.messageFromFactory =
      "ANOTHER DYNAMIC COMPONENT AND IT GONNA BE MOVED";
    this.component.instance.messageFromFactory = `It has been moved to position ${index}`;
    this.entry.move(this.component.hostView, index);
  }

  destroy(): void {
    this.component.destroy();
  }

  //?CHANGE DETECTION STRATEGY
  user: any = {
    name: "Markus",
    age: 44,
    location: "Picaña",
  };

  addProp() {
    this.user.email = "bla@email.com";
  }

  changeName() {
    this.user.name = "another name";
  }

  changeUser() {
    this.user = {
      name: "another name from change user",
      age: 99,
      location: "Torrent",
    };
  }
}

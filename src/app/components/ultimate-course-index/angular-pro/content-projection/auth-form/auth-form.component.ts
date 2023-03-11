import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { AuthMessageComponent } from "../auth-message/auth-message.component";
import { AuthRememberComponent } from "../auth-remember/auth-remember.component";

@Component({
  selector: "app-auth-form",
  templateUrl: "./auth-form.component.html",
  styleUrls: ["./auth-form.component.css"],
})
export class AuthFormComponent
  implements OnInit, AfterContentInit, AfterViewInit
{
  @Output() submitted: EventEmitter<{ email: ""; passwrod: "" }> =
    new EventEmitter<{ email: ""; passwrod: "" }>();

  @ContentChild(AuthRememberComponent) rememberComponent: AuthRememberComponent;
  @ViewChild(AuthMessageComponent) messageComponent: AuthMessageComponent;
  @ViewChild("email") emailField: ElementRef<HTMLInputElement>;

  showMessage: boolean;
  messageFromFactory: string;
  constructor(
    private readonly cd: ChangeDetectorRef,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.messageComponent) {
      this.messageComponent.setDays(30);
      this.cd.detectChanges();
    }
    //? RENDERER2 sirve para cualquier plataforma Android, Apple, etc...
    this.renderer.setAttribute(
      this.emailField.nativeElement,
      "placeholder",
      "Enter your email address"
    );
    this.renderer.setStyle(
      this.emailField.nativeElement,
      "border-color",
      "blue"
    );
    this.renderer.selectRootElement(this.emailField.nativeElement).focus();
    // this.emailField?.nativeElement?.setAttribute(
    //   "placeholder",
    //   "Enter your email address"
    // );
    // this.emailField.nativeElement.style.borderColor = "blue";
    // this.emailField.nativeElement.focus();
  }

  ngAfterContentInit(): void {
    if (this.rememberComponent) {
      this.rememberComponent?.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }
  }

  onSubmit(ev: any): void {
    this.submitted.emit(ev);
    console.log(
      "%conSubmit ",
      "background: green; color: white; display: block;",
      ev
    );
  }
}

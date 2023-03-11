import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-default-detection",
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div class="example-two">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}
      <button (click)="update()">Internal update</button>
      <p>* Should update</p>
    </div>
  `,
  styles: [".example-two {font-size: 19px, margin-botton: 10px}"],
})
export class DefaultChangeDetectionComponent {
  @Input() user: any;

  update(): void {
    this.user.name = "change detection DEFAULT";
  }
}

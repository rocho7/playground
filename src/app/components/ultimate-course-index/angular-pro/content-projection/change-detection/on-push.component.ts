import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-onpush-detection",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="example-one">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}
      <button (click)="update()">Internal update</button>
      <p>* Should not update</p>
    </div>
  `,
  styles: [".example-one {font-size: 19px, margin-botton: 10px}"],
})
export class OnPushDetectionComponent {
  @Input() user: any;

  update(): void {
    this.user.name = "change detection ONPUSH";
  }
}

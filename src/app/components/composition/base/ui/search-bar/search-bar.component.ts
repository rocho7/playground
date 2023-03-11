import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent {

  @Input() control: FormControl;

  updateValue(event: any) {
    this.control.setValue(event.target.value);
  }

}

@NgModule({
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
  imports: [CommonModule],
})
export class SearchBarComponentModule {}

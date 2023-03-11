import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, NgModule } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataListComponent {

  @Input() data: any;
  public displayData: string[] = [];

  @Input() set search(searchTerm: any) {
    this.displayData = this.data.filter(
      (value: any) => !searchTerm
      || searchTerm === ''
      || value.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );
  }

}

@NgModule({
  declarations: [DataListComponent],
  exports: [DataListComponent],
  imports: [CommonModule],
})
export class DataListComponentModule {}

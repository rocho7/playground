import { Component, ContentChild, OnInit } from '@angular/core';
import { DataGridComponent } from './components/data-grid/data-grid.component';

@Component({
  selector: 'app-data-grid-wrapper',
  templateUrl: './data-grid-wrapper.component.html',
  styleUrls: ['./data-grid-wrapper.component.css']
})
export class DataGridWrapperComponent implements OnInit {

  @ContentChild(DataGridComponent) dataGridComponent: DataGridComponent;
  foo: string = "hola";
  constructor() { }

  ngOnInit(): void {
  }
}

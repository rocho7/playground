import { AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { DataGridService } from '../data-grid-wrapper/components/data-grid.service';
import { DataGridComponent } from '../data-grid-wrapper/components/data-grid/data-grid.component';
import { DataGridWrapperComponent } from '../data-grid-wrapper/data-grid-wrapper.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ViewChild(DataGridWrapperComponent) dataGridWrapperComponent: DataGridWrapperComponent;
  @ContentChild(DataGridComponent) dataGridComponent: DataGridComponent;
  columnsDataGrid: Array<string> = [];

  constructor(
    public dataGridService: DataGridService
    ) { }

  ngOnInit(): void {
    this.columnsDataGrid = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];
  }

  ngAfterContentInit() {

  }

  ngAfterViewInit() {
    const data = this.dataGridWrapperComponent.dataGridComponent.sendRequestFind();
    console.log('%cdata ', 'background: green; color: white; display: block;', data);

  }

}

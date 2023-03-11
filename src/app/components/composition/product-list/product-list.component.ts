import { Component, OnInit } from '@angular/core';
import { AbstractListPageService } from '../base/list-page';
import { ProductService } from './data-access/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [
    {
      provide: AbstractListPageService,
      useClass: ProductService
    }
  ]
})
export class ProductListComponent implements OnInit {

  constructor(public listPage: AbstractListPageService) { }

  ngOnInit(): void {
  }

}

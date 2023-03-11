import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/swagger-apis/products.services';
import { ProductsRestService } from 'src/app/services/swagger-apis/products.services/api/productsRest.service';

@Component({
  selector: 'app-form-endpoint',
  templateUrl: './form-endpoint.component.html',
  styleUrls: ['./form-endpoint.component.css']
})
export class FormEndpointComponent implements OnInit {

  productList: Product[];
  public companies: any[] = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
];

  public title: string;

  constructor(
    private productsRestService: ProductsRestService
  ) { }

  ngOnInit(): void {
    // this.productsRestService.createProductUsingPOST({name: 'created from angular project'}).subscribe();

    this.getProducts();
  }

  getProducts(): void {

    this.productsRestService.getProductUsingGET().subscribe( products =>{
      this.productList = products
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Category } from './model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


CATEGORY_DATA: Category[] = [
    { id: 1, name: 'Dados' },
    { id: 2, name: 'Fichas' },
    { id: 3, name: 'Cartas' },
    { id: 4, name: 'Rol' },
    { id: 5, name: 'Tableros' },
    { id: 6, name: 'Temáticos' },
    { id: 7, name: 'Europeos' },
    { id: 8, name: 'Guerra' },
    { id: 9, name: 'Abstractos' },
];

  domain: string;
  entity: string;
  url: string;



  constructor(
    private http: HttpClient
  ) {
    this.domain = 'http://localhost:8080/';
    this.entity = 'category';
    this.url = `${this.domain}${this.entity}`;
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  saveCategory(category: Category): Observable<Category> {
    const urlPut = category?.id ? `${this.url}/${category?.id}` : this.url;
    return this.http.put<Category>(urlPut, category);
  }

  deleteCategory( idCategory: number): Observable<any> {
    return this.http.delete(`${this.url}/${idCategory}`);
  }

}

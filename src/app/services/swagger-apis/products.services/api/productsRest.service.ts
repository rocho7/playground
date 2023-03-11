/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Product } from '../model/product';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProductsRestService {

    protected basePath = 'https://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * createProduct
     *
     * @param product product
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createProductUsingPOST(product: Product, observe?: 'body', reportProgress?: boolean): Observable<Product>;
    public createProductUsingPOST(product: Product, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Product>>;
    public createProductUsingPOST(product: Product, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Product>>;
    public createProductUsingPOST(product: Product, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (product === null || product === undefined) {
            throw new Error('Required parameter product was null or undefined when calling createProductUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Product>(`${this.basePath}/products`,
            product,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteProduct
     *
     * @param productId productId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteProductUsingDELETE(productId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteProductUsingDELETE(productId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteProductUsingDELETE(productId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteProductUsingDELETE(productId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling deleteProductUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/products/${encodeURIComponent(String(productId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getProductById3
     *
     * @param product product
     * @param productId productId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProductById3UsingPUT(product: Product, productId: number, observe?: 'body', reportProgress?: boolean): Observable<Product>;
    public getProductById3UsingPUT(product: Product, productId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Product>>;
    public getProductById3UsingPUT(product: Product, productId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Product>>;
    public getProductById3UsingPUT(product: Product, productId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (product === null || product === undefined) {
            throw new Error('Required parameter product was null or undefined when calling getProductById3UsingPUT.');
        }

        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling getProductById3UsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Product>(`${this.basePath}/products/${encodeURIComponent(String(productId))}`,
            product,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getProductById
     *
     * @param productId productId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProductByIdUsingGET(productId: number, observe?: 'body', reportProgress?: boolean): Observable<Product>;
    public getProductByIdUsingGET(productId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Product>>;
    public getProductByIdUsingGET(productId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Product>>;
    public getProductByIdUsingGET(productId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling getProductByIdUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Product>(`${this.basePath}/products/${encodeURIComponent(String(productId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getProduct
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProductUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Product>>;
    public getProductUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Product>>>;
    public getProductUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Product>>>;
    public getProductUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Product>>(`${this.basePath}/products`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * hello
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public helloUsingGET(observe?: 'body', reportProgress?: boolean): Observable<string>;
    public helloUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public helloUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public helloUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<string>(`${this.basePath}/products/hello`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
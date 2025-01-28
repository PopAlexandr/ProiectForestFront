// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Category, Product, Supplier} from '../models/models';
import {Environment} from '@angular/cli/lib/config/workspace-schema';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}


  getAllProducts(): Observable<Product[]> {


    return this.http.get<Product[]>(`${this.baseUrl}/all`);


  }


  getProductById(id: number): Observable<Product> { // Added type for id and return type
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }


  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/add`, product);
  }

  getLowStockProducts(threshold: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/low-stock?threshold=${threshold}`);
  }
  getTopSellingProducts(limit: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/top-selling?limit=${limit}`);
  }




  updateProduct(id: number, product: Product): Observable<Product> { // Added types for id and product
    return this.http.put<Product>(`${this.baseUrl}/update/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> { // Added return type for delete
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}



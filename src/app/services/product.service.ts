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

  // Retrieve all products
  getAllProducts(): Observable<Product[]> {


    return this.http.get<Product[]>(`${this.baseUrl}/all`);


  }

  // Retrieve a product by ID
  getProductById(id: number): Observable<Product> { // Added type for id and return type
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  // Add a new product
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/add`, product);
  }

  // Update an existing product by ID
  updateProduct(id: number, product: Product): Observable<Product> { // Added types for id and product
    return this.http.put<Product>(`${this.baseUrl}/update`, product);
  }

  // Delete a product by ID
  deleteProduct(id: number): Observable<void> { // Added return type for delete
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}



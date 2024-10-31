// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  // Retrieve all products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  // Retrieve a product by ID
  getProductById(id: number): Observable<Product> { // Added type for id and return type
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  // Add a new product
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  // Update an existing product by ID
  updateProduct(id: number, product: Product): Observable<Product> { // Added types for id and product
    return this.http.put<Product>(`${this.baseUrl}/${id}`, product);
  }

  // Delete a product by ID
  deleteProduct(id: number): Observable<void> { // Added return type for delete
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

// Export an instance of ProductService is not necessary with Angular's dependency injection.

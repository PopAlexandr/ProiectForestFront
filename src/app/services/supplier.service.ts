// src/app/services/supplier.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private baseUrl = 'http://localhost:8080/api/suppliers';

  constructor(private http: HttpClient) {}


  getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.baseUrl);
  }


  getSupplierById(id: number): Observable<Supplier> { // Added type for id
    return this.http.get<Supplier>(`${this.baseUrl}/${id}`);
  }


  createSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.baseUrl, supplier);
  }


  updateSupplier(id: number, supplier: Supplier): Observable<Supplier> { // Added types for id and supplier
    return this.http.put<Supplier>(`${this.baseUrl}/${id}`, supplier);
  }


  deleteSupplier(id: number): Observable<void> { // Added return type for delete
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}



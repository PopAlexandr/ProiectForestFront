// src/app/services/stockTransaction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockTransaction } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class StockTransactionService {
  private baseUrl = 'http://localhost:8080/api/stock';

  constructor(private http: HttpClient) {}

  // Retrieve all stock transactions
  getAllStockTransactions(): Observable<StockTransaction[]> {
    return this.http.get<StockTransaction[]>(this.baseUrl);
  }

  // Retrieve a stock transaction by ID
  getStockTransactionById(id: number): Observable<StockTransaction> { // Added type for id
    return this.http.get<StockTransaction>(`${this.baseUrl}/${id}`);
  }

  // Create a new stock transaction
  createStockTransaction(stockTransaction: StockTransaction): Observable<StockTransaction> {
    return this.http.post<StockTransaction>(this.baseUrl, stockTransaction);
  }

  // Update an existing stock transaction by ID
  updateStockTransaction(id: number, stockTransaction: StockTransaction): Observable<StockTransaction> { // Added types for id and stockTransaction
    return this.http.put<StockTransaction>(`${this.baseUrl}/${id}`, stockTransaction);
  }

  // Delete a stock transaction by ID
  deleteStockTransaction(id: number): Observable<void> { // Added return type for delete
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

// Export instance is not necessary with Angular's dependency injection.

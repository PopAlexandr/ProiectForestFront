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


  getAllStockTransactions(): Observable<StockTransaction[]> {
    return this.http.get<StockTransaction[]>(`${this.baseUrl}/all`);
  }


  getStockTransactionById(id: number): Observable<StockTransaction> { // Added type for id
    return this.http.get<StockTransaction>(`${this.baseUrl}/${id}`);
  }
  getTransactionSummary(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(`${this.baseUrl}/summary`);
  }


  createStockTransaction(stockTransaction: StockTransaction): Observable<StockTransaction> {
    return this.http.post<StockTransaction>(this.baseUrl, stockTransaction);
  }


  updateStockTransaction(id: number, stockTransaction: StockTransaction): Observable<StockTransaction> { // Added types for id and stockTransaction
    return this.http.put<StockTransaction>(`${this.baseUrl}/${id}`, stockTransaction);
  }


  deleteStockTransaction(id: number): Observable<void> { // Added return type for delete
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}



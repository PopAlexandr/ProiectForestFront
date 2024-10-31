// src/app/services/orderItem.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItem } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class OrderItemService {
  private baseUrl = 'http://localhost:8080/api/orderitems';

  constructor(private http: HttpClient) {}

  getAllOrderItems(): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(this.baseUrl);
  }

  getOrderItemById(id: number): Observable<OrderItem> { // Added type for id and return type
    return this.http.get<OrderItem>(`${this.baseUrl}/${id}`);
  }

  createOrderItem(orderItem: OrderItem): Observable<OrderItem> {
    return this.http.post<OrderItem>(this.baseUrl, orderItem);
  }

  updateOrderItem(id: number, orderItem: OrderItem): Observable<OrderItem> { // Added types for id and orderItem
    return this.http.put<OrderItem>(`${this.baseUrl}/${id}`, orderItem);
  }

  deleteOrderItem(id: number): Observable<void> { // Added return type for delete
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

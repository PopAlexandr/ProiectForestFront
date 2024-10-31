import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders = []; // Initialize orders as an empty array

  constructor(orderService) {
    this.orderService = orderService;
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(
      (data) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  addOrder(order) {
    this.orderService.createOrder(order).subscribe(
      (response) => {
        this.orders.push(response);
      },
      (error) => {
        console.error('Error adding order:', error);
      }
    );
  }
}

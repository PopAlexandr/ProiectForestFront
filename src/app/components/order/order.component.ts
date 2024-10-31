import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/models'; // Import the Order model

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders: Order[] = []; // Initialize orders as an empty array of Order type

  constructor(private orderService: OrderService) { // Use access modifier and specify type for orderService
    // orderService is now a class property due to the private modifier
  }

  ngOnInit(): void {
    this.getOrders(); // Call getOrders when the component initializes
  }

  getOrders(): void {
    this.orderService.getAllOrders().subscribe(
      (data: Order[]) => { // Specify the expected data type
        this.orders = data;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  addOrder(order: Order): void { // Specify the expected order type
    this.orderService.createOrder(order).subscribe(
      (response: Order) => { // Specify the expected response type
        this.orders.push(response);
      },
      (error) => {
        console.error('Error adding order:', error);
      }
    );
  }
}

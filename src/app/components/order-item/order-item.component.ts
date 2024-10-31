import { Component, OnInit } from '@angular/core';
import { OrderItemService } from '../../services/orderItem.service';
import { OrderItem } from '../../models/models'; // Import the OrderItem interface

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit { // Implement OnInit interface
  orderItems: OrderItem[] = []; // Initialize orderItems as an empty array with the correct type

  constructor(private orderItemService: OrderItemService) { // Use the private access modifier and type the service
  }

  ngOnInit() {
    this.getOrderItems();
  }

  getOrderItems() {
    this.orderItemService.getAllOrderItems().subscribe(
      (data: OrderItem[]) => { // Specify the expected data type from the API
        this.orderItems = data;
      },
      (error) => {
        console.error('Error fetching order items:', error);
      }
    );
  }

  addOrderItem(orderItem: OrderItem) { // Specify the parameter type
    this.orderItemService.createOrderItem(orderItem).subscribe(
      (response: OrderItem) => { // Specify the expected response type
        this.orderItems.push(response);
      },
      (error) => {
        console.error('Error adding order item:', error);
      }
    );
  }
}

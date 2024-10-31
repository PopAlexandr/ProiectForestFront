import { Component } from '@angular/core';
import { OrderItemService } from '../../services/orderItem.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {
  orderItems = []; // Initialize orderItems as an empty array

  constructor(orderItemService) {
    this.orderItemService = orderItemService;
  }

  ngOnInit() {
    this.getOrderItems();
  }

  getOrderItems() {
    this.orderItemService.getOrderItems().subscribe(
      (data) => {
        this.orderItems = data;
      },
      (error) => {
        console.error('Error fetching order items:', error);
      }
    );
  }

  addOrderItem(orderItem) {
    this.orderItemService.createOrderItem(orderItem).subscribe(
      (response) => {
        this.orderItems.push(response);
      },
      (error) => {
        console.error('Error adding order item:', error);
      }
    );
  }
}

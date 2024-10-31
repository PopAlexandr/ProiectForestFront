// src/app/services/orderItem.service.js
import axios from 'axios';

export class OrderItemService {
  constructor() {
    this.baseUrl = 'http://localhost:8080/api/order-items';
  }

  getAllOrderItems() {
    return axios.get(this.baseUrl);
  }

  getOrderItemById(id) {
    return axios.get(`${this.baseUrl}/${id}`);
  }

  createOrderItem(orderItem) {
    return axios.post(this.baseUrl, orderItem);
  }

  updateOrderItem(id, orderItem) {
    return axios.put(`${this.baseUrl}/${id}`, orderItem);
  }

  deleteOrderItem(id) {
    return axios.delete(`${this.baseUrl}/${id}`);
  }
}

export default new OrderItemService();

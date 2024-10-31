// src/app/services/order.service.js
import axios from 'axios';

export class OrderService {
  constructor() {
    this.baseUrl = 'http://localhost:8080/api/orders';
  }

  getAllOrders() {
    return axios.get(this.baseUrl);
  }

  getOrderById(id) {
    return axios.get(`${this.baseUrl}/${id}`);
  }

  createOrder(order) {
    return axios.post(this.baseUrl, order);
  }

  updateOrder(id, order) {
    return axios.put(`${this.baseUrl}/${id}`, order);
  }

  deleteOrder(id) {
    return axios.delete(`${this.baseUrl}/${id}`);
  }
}

export default new OrderService();

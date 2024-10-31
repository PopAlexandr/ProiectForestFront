// src/app/services/customer.service.js
import axios from 'axios';

export class CustomerService {
  constructor() {
    this.baseUrl = 'http://localhost:8080/api/customers';
  }

  getAllCustomers() {
    return axios.get(this.baseUrl);
  }

  getCustomerById(id) {
    return axios.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer) {
    return axios.post(this.baseUrl, customer);
  }

  updateCustomer(id, customer) {
    return axios.put(`${this.baseUrl}/${id}`, customer);
  }

  deleteCustomer(id) {
    return axios.delete(`${this.baseUrl}/${id}`);
  }
}

export default new CustomerService();

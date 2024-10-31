// src/app/services/supplier.service.js
import axios from 'axios';

export class SupplierService {
  constructor() {
    this.baseUrl = 'http://localhost:8080/api/suppliers';
  }

  getAllSuppliers() {
    return axios.get(this.baseUrl);
  }

  getSupplierById(id) {
    return axios.get(`${this.baseUrl}/${id}`);
  }

  createSupplier(supplier) {
    return axios.post(this.baseUrl, supplier);
  }

  updateSupplier(id, supplier) {
    return axios.put(`${this.baseUrl}/${id}`, supplier);
  }

  deleteSupplier(id) {
    return axios.delete(`${this.baseUrl}/${id}`);
  }
}

export default new SupplierService();

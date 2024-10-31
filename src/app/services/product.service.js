// src/app/services/product.service.js
import axios from 'axios';

export class ProductService {
  constructor() {
    this.baseUrl = 'http://localhost:8080/api/products';
  }

  // Retrieve all products
  getAllProducts() {
    return axios.get(this.baseUrl);
  }

  // Retrieve a product by ID
  getProductById(id) {
    return axios.get(`${this.baseUrl}/${id}`);
  }

  // Add a new product
  createProduct(product) {
    return axios.post(this.baseUrl, product);
  }

  // Update an existing product by ID
  updateProduct(id, product) {
    return axios.put(`${this.baseUrl}/${id}`, product);
  }

  // Delete a product by ID
  deleteProduct(id) {
    return axios.delete(`${this.baseUrl}/${id}`);
  }
}

// Export an instance of ProductService
export default new ProductService();

// src/app/services/category.service.js
import axios from 'axios';

export class CategoryService {
  constructor() {
    this.baseUrl = 'http://localhost:8080/api/categories';
  }

  getAllCategories() {
    return axios.get(this.baseUrl);
  }

  getCategoryById(id) {
    return axios.get(`${this.baseUrl}/${id}`);
  }

  createCategory(category) {
    return axios.post(this.baseUrl, category);
  }

  updateCategory(id, category) {
    return axios.put(`${this.baseUrl}/${id}`, category);
  }

  deleteCategory(id) {
    return axios.delete(`${this.baseUrl}/${id}`);
  }
}

export default new CategoryService();

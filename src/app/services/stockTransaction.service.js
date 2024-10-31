// src/app/services/stockTransaction.service.js
import axios from 'axios';

export class StockTransactionService {
  constructor() {
    this.baseUrl = 'http://localhost:8080/api/stock-transactions';
  }

  getAllStockTransactions() {
    return axios.get(this.baseUrl);
  }

  getStockTransactionById(id) {
    return axios.get(`${this.baseUrl}/${id}`);
  }

  createStockTransaction(stockTransaction) {
    return axios.post(this.baseUrl, stockTransaction);
  }

  updateStockTransaction(id, stockTransaction) {
    return axios.put(`${this.baseUrl}/${id}`, stockTransaction);
  }

  deleteStockTransaction(id) {
    return axios.delete(`${this.baseUrl}/${id}`);
  }
}

export default new StockTransactionService();

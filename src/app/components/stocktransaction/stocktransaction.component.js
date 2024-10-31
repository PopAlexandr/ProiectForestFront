import { Component } from '@angular/core';
import { StockTransactionService } from '../../services/stockTransaction.service';

@Component({
  selector: 'app-stock-transaction',
  templateUrl: './stock-transaction.component.html',
  styleUrls: ['./stock-transaction.component.css']
})
export class StockTransactionComponent {
  stockTransactions = []; // Initialize stockTransactions as an empty array

  constructor(stockTransactionService) {
    this.stockTransactionService = stockTransactionService;
  }

  ngOnInit() {
    this.getStockTransactions();
  }

  getStockTransactions() {
    this.stockTransactionService.getStockTransactions().subscribe(
      (data) => {
        this.stockTransactions = data;
      },
      (error) => {
        console.error('Error fetching stock transactions:', error);
      }
    );
  }

  addStockTransaction(stockTransaction) {
    this.stockTransactionService.createStockTransaction(stockTransaction).subscribe(
      (response) => {
        this.stockTransactions.push(response);
      },
      (error) => {
        console.error('Error adding stock transaction:', error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { StockTransactionService } from '../../services/stockTransaction.service';
import { StockTransaction } from '../../models/models'; // Import your StockTransaction model

@Component({
  selector: 'app-stock-transaction',
  templateUrl: './stocktransaction.component.html',
  styleUrls: ['./stocktransaction.component.css']
})
export class StockTransactionComponent implements OnInit {
  stockTransactions: StockTransaction[] = []; // Initialize stockTransactions as an empty array with type

  constructor(private stockTransactionService: StockTransactionService) { // Use private for dependency injection
  }

  ngOnInit(): void {
    this.getStockTransactions();
  }

  getStockTransactions(): void {
    this.stockTransactionService.getAllStockTransactions().subscribe(
      (data: StockTransaction[]) => { // Specify the type of data received
        this.stockTransactions = data;
      },
      (error: any) => { // Specify the type of error
        console.error('Error fetching stock transactions:', error);
      }
    );
  }

  addStockTransaction(stockTransaction: StockTransaction): void { // Specify the type for the parameter
    this.stockTransactionService.createStockTransaction(stockTransaction).subscribe(
      (response: StockTransaction) => { // Specify the type of response
        this.stockTransactions.push(response);
      },
      (error: any) => { // Specify the type of error
        console.error('Error adding stock transaction:', error);
      }
    );
  }
}

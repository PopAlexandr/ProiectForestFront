import { Component, OnInit } from '@angular/core';
import { StockTransactionService } from '../../services/stockTransaction.service';
import { StockTransaction } from '../../models/models'; // Import your StockTransaction model

@Component({
  selector: 'app-stock-transaction',
  templateUrl: './stocktransaction.component.html',
  styleUrls: ['./stocktransaction.component.css']
})
export class StockTransactionComponent implements OnInit {
  stockTransactions: StockTransaction[] = [];

  constructor(private stockTransactionService: StockTransactionService) { this.stockTransactionService=stockTransactionService;}

  ngOnInit(): void {
    this.stockTransactionService.getAllStockTransactions().subscribe((data: any) => {this.stockTransactions = data; });
  }
}

// src/app/models/models.ts
import {CategoryComponent} from '../components/category/category.component';
import {SupplierService} from '../services/supplier.service';
export class Product {
  productId: number;
  title: string;
  author: string;
  description: string;
  price: number;
  stockQuantity: number;
  sku: string;
  category: Category;
  supplier: Supplier;
  stockTransaction: StockTransaction[];

  constructor() {
    this.productId = 0;
    this.title = '';
    this.author = '';
    this.description = '';
    this.price = 0;
    this.stockQuantity = 0;
    this.sku = '';
    this.category = new Category(0, '');
    this.supplier = new Supplier(0,'');
    this.stockTransaction = [];
  }
}

export class Category {
  categoryId: number;
  name: string;

  constructor(id: number, name: string) {
    this.categoryId = id;
    this.name = name;
  }
}

export class Supplier {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}





export class StockTransaction {
  transactionId: number; // Unique identifier
  quantity: number; // Positive for additions, negative for removals
  transactionType: string; // Transaction type: ADD, REMOVE, DELETE, etc.
  transactionDate: string; // Date of the transaction
  productTitle?: string;

  constructor(
    transactionId: number,
    quantity: number,
    transactionType: string,
    transactionDate: string,
    productTitle: string
  ) {
    this.transactionId = transactionId;
    this.quantity = quantity;
    this.transactionType = transactionType;
    this.transactionDate = transactionDate;
    this.productTitle = productTitle;
  }
}




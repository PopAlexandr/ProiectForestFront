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
  orderItems: any[];
  stockTransaction: any[];

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
    this.orderItems = [];
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
  id: number; // Unique identifier
  quantity: number; // Positive for additions, negative for removals
  type: string; // Transaction type: ADD, REMOVE, DELETE, etc.
  date: string; // Date of the transaction
  description?: string; // Optional description
  product: {
    id: number; // Product ID
    title: string; // Product title
  }; // Simplified product representation

  constructor(
    id: number,
    quantity: number,
    type: string,
    date: string,
    description: string | undefined,
    product: { id: number; title: string }
  ) {
    this.id = id;
    this.quantity = quantity;
    this.type = type;
    this.date = date;
    this.description = description;
    this.product = product;
  }
}




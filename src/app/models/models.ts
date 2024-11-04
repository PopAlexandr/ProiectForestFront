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

export class Order {
  id: number;
  total: number;
  customer: string; // Adjust this type based on your actual customer structure

  constructor(id: number, total: number, customer: string) {
    this.id = id;
    this.total = total;
    this.customer = customer;
  }
}

export class OrderItem {
  id: number;
  quantity: number;
  product: string; // Adjust this type based on your actual product structure

  constructor(id: number, quantity: number, product: string) {
    this.id = id;
    this.quantity = quantity;
    this.product = product;
  }
}

export class StockTransaction {
  id: number;
  quantity: number;
  type: string; // You might want to define this as an enum if it has specific values

  constructor(id: number, quantity: number, type: string) {
    this.id = id;
    this.quantity = quantity;
    this.type = type;
  }
}

export class Customer {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

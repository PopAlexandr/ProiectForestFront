// src/app/models/models.ts
import {CategoryComponent} from '../components/category/category.component';
import {SupplierService} from '../services/supplier.service';
export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: Category;
  supplier: Supplier;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    stockQuantity: number,
    category: Category,
    supplier: Supplier
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stockQuantity = stockQuantity;
    this.category = category;
    this.supplier = supplier;
  }
}

export class Category {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
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

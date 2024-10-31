// src/app/models/models.js

export class Product {
  constructor(id, name, description, price, stockQuantity, category, supplier) {
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
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

export class Supplier {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

export class Order {
  constructor(id, total, customer) {
    this.id = id;
    this.total = total;
    this.customer = customer;
  }
}

export class OrderItem {
  constructor(id, quantity, product) {
    this.id = id;
    this.quantity = quantity;
    this.product = product;
  }
}

export class StockTransaction {
  constructor(id, quantity, type) {
    this.id = id;
    this.quantity = quantity;
    this.type = type;
  }
}

export class Customer {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

import { Component, OnInit} from '@angular/core';
import {Product} from "./models/models";
import {Category} from "./models/models";
import {Customer} from "./models/models";
import {Order} from "./models/models";

import {OrderItem} from "./models/models";
import {StockTransaction} from "./models/models";
import {Supplier} from "./models/models";
import {ProductService} from "./services/product.service";
import {CategoryService} from "./services/category.service";
import {CustomerService} from "./services/customer.service";
import {OrderService} from "./services/order.service";
import {OrderItemService} from "./services/orderItem.service";
import {StockTransactionService} from "./services/stockTransaction.service";
import {SupplierService} from "./services/supplier.service";
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  products: Product[] = []; // Specify type for products
  categories: Category[] = []; // Initialize categories as an empty array
  newProduct: Product=new Product(0,'','',0,0,new Category(0,''),new Supplier(0,''));

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
    // If you plan to fetch categories, add a method for it
    // this.fetchCategories();
  }

  private fetchProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => { // Specify the expected data type
        this.products = data;
      },
      (error: HttpErrorResponse) => {
        console.error("Error fetching products:", error);
      }
    );
  }
  addProduct(productData: Product) {
    this.productService.createProduct(productData).subscribe(
      (response: Product) => {
        this.products.push(response); // Add the new product to the list
        this.newProduct = new Product(0, '', '', 0, 0, new Category(0, ''), new Supplier(0, '')); // Reset the form
      },
      (error) => {
        console.error("Error adding product:", error);
      }
    );
  }

  // If needed, add a fetchCategories method here
  // private fetchCategories(): void {
  //   this.categoryService.getAllCategories().subscribe(
  //     (data: Category[]) => {
  //       this.categories = data;
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.error("Error fetching categories:", error);
  //     }
  //   );
  // }
}

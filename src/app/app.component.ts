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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public productForm = {
    title: '',
    description: '',
    price: 0,
    stockQuantity: 0,
    categoryName: '',
    supplierName: ''
  };
  public products: Product[] = []; // Specify type for products
  public categories: Category[] = []; // Initialize categories as an empty array
  public orders: Order[]=[];
  public orderItems: OrderItem[] = [];
  public stockTransactions: StockTransaction[] = [];
  public suppliers: Supplier[]=[];
  public updateProduct: Product = new Product();
  public deleteProduct: Product = new Product();

  public newProduct: Product = new Product();
  public title: string='proiectforestfront';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchCategories();
    this.fetchOrders();
    this.fetchOrderItems();
    this.fetchStockTransactions();
    this.fetchSuppliers();

  }

  public fetchProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        console.log("Raw data received:", data);
        console.log("Number of products:", data.length);
        this.products = [...data]; // Create a new array reference
        console.log("Products array after assignment:", this.products);
      },
      (error: HttpErrorResponse) => {
        console.error("Error fetching products:", error);
      }
    );
  }
  public addProduct(productForm: NgForm): void {
    // Create a new Product instance with the form data
    const newProduct = new Product();
    newProduct.title = this.productForm.title;
    newProduct.description = this.productForm.description;
    newProduct.price = this.productForm.price;
    newProduct.stockQuantity = this.productForm.stockQuantity;
    newProduct.category = new Category(0, this.productForm.categoryName);
    newProduct.supplier = new Supplier(0, this.productForm.supplierName);

    this.productService.createProduct(newProduct).subscribe(
      (response: Product) => {
        console.log(response);
        this.fetchProducts();
        productForm.reset();
      },
      (error) => {
        console.error("Error adding product:", error);
      }
    );
  }
  public OnUpdateProduct(product: Product): void {
    this.productService.updateProduct(0,product).subscribe(
      (response: Product) => {
        console.log(response);
        this.fetchProducts();
      },
      (error:HttpErrorResponse) => {
        console.error("Error updating product:", error);
      }
    )
  }
  public OnDeleteProduct(productId:number): void {
    this.productService.deleteProduct(productId).subscribe(
      (response:void) => {
        console.log(response);
        this.fetchProducts();
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  public onOpenModal(product:Product,mode:string):void {
    const container=document.getElementById('main-container');
    if (!container) {
      console.error('Container element not found');
      return;
    }
    const button=document.createElement('button');
    button.type='button';
    button.style.display= 'none';
    button.setAttribute('data-toggle','modal');
    if (mode === 'add') {
      button.setAttribute('data-target','#add-product-modal');
    }
    if(mode==='edit'){
      this.updateProduct=product;
      button.setAttribute('data-target','#update-product-modal');
    }
    if(mode==='delete'){
      this.deleteProduct=product;
      button.setAttribute('data-target','#delete-product-modal');
    }
    container.appendChild(button);
    button.click();
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
  private fetchCategories() {

  }

  private fetchOrders() {

  }

  private fetchOrderItems() {

  }

  private fetchStockTransactions() {

  }

  private fetchSuppliers() {

  }
}

import {Component, NgIterable, OnInit} from '@angular/core';
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
    supplierName: '',
    author: ''
  };
  public products: Product[] = []; // Specify type for products
  public filteredProducts: Product[] = []; // Array for filtered products
  public categories: Category[] = []; // Initialize categories as an empty array
  public orders: Order[]=[];
  public orderItems: OrderItem[] = [];
  public stockTransactions: StockTransaction[] = [];
  public suppliers: Supplier[]=[];
  public selectedProduct: Product=new Product();
  public deleteProduct: Product = new Product();
  public selectedCategoryId: number| null = null;

  public newProduct: Product = new Product();
  public title: string='proiectforestfront';

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchProducts();

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
        this.products = data.sort((a, b) => a.productId - b.productId);
        this.filteredProducts=[...this.products]
        console.log('Products with Category IDs:', this.products);
      },
      (error: HttpErrorResponse) => {
        console.error("Error fetching products:", error);
      }
    );
  }
  public addProduct(productForm: NgForm): void {
    console.log("Product data to send: ",this.productForm);
    // Create a new Product instance with the form data
    const newProduct = new Product();
    newProduct.title = this.productForm.title;
    newProduct.author=this.productForm.author;
    newProduct.description = this.productForm.description;
    newProduct.price = this.productForm.price;
    newProduct.stockQuantity = this.productForm.stockQuantity;
    newProduct.category = new Category(0, this.productForm.categoryName);
    newProduct.supplier = new Supplier(0, this.productForm.supplierName);

    this.productService.createProduct(this.newProduct).subscribe(
      (response: Product) => {
        console.log('Product added: ',response);
        this.fetchProducts();
        productForm.reset();
      },
      (error) => {
        console.error("Error adding product:", error);
      }
    );
  }
  public OnUpdateProduct(): void {
    if (this.selectedProduct) {
      this.productService.updateProduct(this.selectedProduct.productId, this.selectedProduct).subscribe(
        (response: Product) => {
          // Update the product in the list with the response data
          const index = this.products.findIndex(p => p.productId === response.productId);
          if (index > -1) {
            this.products[index] = response;
          }
          this.closeEditModal(); // Close modal after update
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    }
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
      this.selectedProduct=product;
      button.setAttribute('data-target','#update-product-modal');
    }
    if(mode==='delete'){
      this.deleteProduct=product;
      button.setAttribute('data-target','#delete-product-modal');
    }
    container.appendChild(button);
    button.click();
  }




  fetchCategories(): void {

    this.categoryService.getAllCategories().subscribe(
      (data: Category[]) => {

        this.categories = data;
        console.log("Cateogies received:",this.categories);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  private fetchOrders() {

  }

  private fetchOrderItems() {

  }

  private fetchStockTransactions() {

  }

  private fetchSuppliers() {

  }

  openEditModal(product: Product):void {
      this.selectedProduct = {...product};
      const modal=document.getElementById('editProductModal');
      if (modal) {modal.style.display = 'block';}
  }

  closeEditModal(): void {
    this.selectedProduct = new Product();
    const modal=document.getElementById('editProductModal');
    if(modal){modal.style.display='none';}

  }


  confirmDeleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        // Remove the product from the local array without refetching
        this.products = this.products.filter(product => product.productId !== productId);
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }

  filterByCategory(): void {
    console.log("ce Id vine din html:",this.selectedCategoryId);
    const categoryId = this.selectedCategoryId ? +this.selectedCategoryId : null; // Convert to number
    if (categoryId!==null) {
      this.filteredProducts = this.products.filter(
        product => product.category?.categoryId === categoryId
      );
    } else {
      this.filteredProducts = [...this.products]; // Show all products if no category selected
    }
    console.log('Selected Category ID:', categoryId); // Debug log
    console.log('Filtered Products:', this.filteredProducts); // Debug log
  }
}

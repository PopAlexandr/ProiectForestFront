import {Component, NgIterable, OnInit} from '@angular/core';
import {Product} from "./models/models";
import {Category} from "./models/models";
import {StockTransaction} from "./models/models";
import {Supplier} from "./models/models";

import {ProductService} from "./services/product.service";
import {CategoryService} from "./services/category.service";
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
  public stockTransactions: StockTransaction[] = [];
  public suppliers: Supplier[]=[];
  public selectedProduct: Product=new Product();
  public deleteProduct: Product = new Product();
  public selectedCategoryId: number| null = null;

  public newProduct: Product = new Product();
  public title: string='proiectforestfront';

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private StockTransactionService: StockTransactionService,
  ) {}

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchProducts()
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
    console.log('Updating product:', this.selectedProduct);

    // Ensure selectedProduct is valid
    if (this.selectedProduct) {
      this.productService.updateProduct(this.selectedProduct.productId, this.selectedProduct).subscribe(
        (response: Product) => {
          console.log('Product updated successfully:', response);

          // Update the product in the list
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
    } else {
      console.error('No product selected for update.');
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
  openInventoryModal(): void {
    if (this.stockTransactions.length === 0) {
      // If transactions are empty, fetch them using the `fetchStockTransactions` logic
      this.fetchStockTransactions();
    }
    const modal = document.getElementById('inventoryModal') as HTMLElement;
    modal.style.display = 'block';
  }

  closeInventoryModal(): void {
    const modal = document.getElementById('inventoryModal') as HTMLElement;
    modal.style.display = 'none';
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
    console.log("Selected Category ID (from HTML):", this.selectedCategoryId);

    // Check if selectedCategoryId is null or undefined
    if (this.selectedCategoryId === null) {
      this.filteredProducts = [...this.products]; // Reset to all products
    } else {
      const categoryId = +this.selectedCategoryId; // Ensure it's a number
      this.filteredProducts = this.products.filter(
        product => product.category?.categoryId === categoryId
      );
    }

    console.log('Selected Category ID (Processed):', this.selectedCategoryId);
    console.log('Filtered Products:', this.filteredProducts);
  }

  private fetchStockTransactions(): void {
    this.StockTransactionService.getAllStockTransactions().subscribe(
      (transactions: StockTransaction[]) => {
        console.log('Fetched Transactions from Backend:', transactions);

        // Process transactions to include the product title if available
        this.stockTransactions = transactions;

        console.log('Processed Transactions with Titles:', this.stockTransactions);
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching stock transactions:', error);
      }
    );
  }




}

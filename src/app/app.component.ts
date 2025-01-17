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
  public lowStockProducts: Product[] = [];
  private stockThreshold: number = 10; // Default threshold for low stock
  public deleteProduct: Product = new Product();
  public selectedCategoryId: number| null = null;
  public topSellingProducts: { totalSales: number; title: string }[] = [];
  private topLimit: number = 2; // Default limit for top-selling products
  public transactionSummary: { [key: string]: number } | null = null;
  public searchQuery: string = '';
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

    this.applyFilters()
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
  openLowStockModal(): void {
    this.productService.getLowStockProducts(this.stockThreshold).subscribe(
      (products: Product[]) => {
        this.lowStockProducts = products;
        console.log('Low Stock Products:', this.lowStockProducts);
        const modal = document.getElementById('lowStockModal') as HTMLElement;
        modal.style.display = 'block';
      },
      (error) => {
        console.error('Error fetching low stock products:', error);
      }
    );
  }

  closeLowStockModal(): void {
    const modal = document.getElementById('lowStockModal') as HTMLElement;
    modal.style.display = 'none';
  }

  openTopSellingModal(): void {
    const allowedTypes = ['REMOVE', 'DELETE'];

    // Aggregate total sales for each product title
    const salesMap: { [title: string]: number } = {};

    this.stockTransactions
      .filter(transaction => allowedTypes.includes(transaction.transactionType))
      .forEach(transaction => {
        const productTitle = transaction.productTitle || 'Unknown Product';
        // Convert negative quantities to positive for sales calculation
        const salesQuantity = Math.abs(transaction.quantity);
        salesMap[productTitle] = (salesMap[productTitle] || 0) + salesQuantity;
      });

    // Convert the sales map to an array and sort by total sales
    this.topSellingProducts = Object.entries(salesMap)
      .map(([title, totalSales]) => ({ title, totalSales }))
      .sort((a, b) => b.totalSales - a.totalSales)
      .slice(0, this.topLimit);

    console.log('Sales Map:', salesMap);
    console.log('Top-Selling Products:', this.topSellingProducts);

    const modal = document.getElementById('topSellingModal') as HTMLElement;
    modal.style.display = 'block';
  }

  closeTopSellingModal(): void {
    const modal = document.getElementById('topSellingModal') as HTMLElement;
    modal.style.display = 'none';
  }

  openTransactionSummaryModal(): void {
    this.StockTransactionService.getTransactionSummary().subscribe(
      (summary) => {
        this.transactionSummary = summary;
        const modal = document.getElementById('transactionSummaryModal') as HTMLElement;
        modal.style.display = 'block';
      },
      (error) => {
        console.error('Error fetching transaction summary:', error);
      }
    );
  }

  closeTransactionSummaryModal(): void {
    const modal = document.getElementById('transactionSummaryModal') as HTMLElement;
    modal.style.display = 'none';
  }


  filterByTitle() {
    console.log('Search Filter Applied:', this.searchQuery); // Debug log
    this.applyFilters();
  }
  applyFilters(): void {
    let filtered = [...this.products]; // Start with all products

    // Apply category filter
    if (this.selectedCategoryId !== null) {
      filtered = filtered.filter(
        product => product.category?.categoryId === this.selectedCategoryId
      );
    }

    // Apply search filter
    if (this.searchQuery.trim() !== '') {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query)
      );
    }

    this.filteredProducts = filtered; // Update the filtered list
    console.log('Filtered Products:', this.filteredProducts); // Debug log
  }

}

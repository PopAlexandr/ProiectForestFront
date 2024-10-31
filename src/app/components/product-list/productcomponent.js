import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = []; // Initialize products as an empty array

  // Remove 'private' keyword
  constructor(productService) {
    this.productService = productService;
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addProduct(product) {
    this.productService.createProduct(product).subscribe(
      (response) => {
        this.products.push(response);
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }
}

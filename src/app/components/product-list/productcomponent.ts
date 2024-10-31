import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {OnInit} from "@angular/core";
import {Product} from '../../models/models';

@Component({
  selector: 'product.component',
  templateUrl: './productcomponent.html',
  styleUrls: ['./productcomponent.css']
})
export class ProductComponent implements OnInit {
  products:Product[] = []; // Initialize products as an empty array


  constructor(private productService:ProductService) {
    this.productService = productService;
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addProduct(product: Product) {
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

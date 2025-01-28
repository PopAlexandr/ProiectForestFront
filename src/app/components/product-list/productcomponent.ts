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
  products:Product[] = [];


  constructor(private productService:ProductService) {
    this.productService = productService;
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;



    });


    console.log(this.products);
  }
}

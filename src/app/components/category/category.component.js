import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories = []; // Initialize categories as an empty array

  constructor(categoryService) {
    this.categoryService = categoryService;
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  addCategory(category) {
    this.categoryService.createCategory(category).subscribe(
      (response) => {
        this.categories.push(response);
      },
      (error) => {
        console.error('Error adding category:', error);
      }
    );
  }
}

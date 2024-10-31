import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = []; // Define categories with a proper type

  // Use private to automatically create and assign categoryService
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (data: Category[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  addCategory(category: Category): void {
    this.categoryService.createCategory(category).subscribe(
      (response: Category) => {
        this.categories.push(response);
      },
      (error) => {
        console.error('Error adding category:', error);
      }
    );
  }
}

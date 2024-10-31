import { Component } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {
  suppliers = []; // Initialize suppliers as an empty array

  constructor(supplierService) {
    this.supplierService = supplierService;
  }

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers() {
    this.supplierService.getSuppliers().subscribe(
      (data) => {
        this.suppliers = data;
      },
      (error) => {
        console.error('Error fetching suppliers:', error);
      }
    );
  }

  addSupplier(supplier) {
    this.supplierService.createSupplier(supplier).subscribe(
      (response) => {
        this.suppliers.push(response);
      },
      (error) => {
        console.error('Error adding supplier:', error);
      }
    );
  }
}

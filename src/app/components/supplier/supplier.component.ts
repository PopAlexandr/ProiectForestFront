import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../models/models'; // Import the Supplier model

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  suppliers: Supplier[] = []; // Specify the type for suppliers

  constructor(private supplierService: SupplierService) {} // Use private access modifier for dependency injection

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers(): void {
    this.supplierService.getAllSuppliers().subscribe(
      (data: Supplier[]) => { // Specify the type for data
        this.suppliers = data;
      },
      (error) => {
        console.error('Error fetching suppliers:', error);
      }
    );
  }

  addSupplier(supplier: Supplier): void { // Specify the type for supplier
    this.supplierService.createSupplier(supplier).subscribe(
      (response: Supplier) => { // Specify the type for response
        this.suppliers.push(response);
      },
      (error) => {
        console.error('Error adding supplier:', error);
      }
    );
  }
}

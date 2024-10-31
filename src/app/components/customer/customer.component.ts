import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/models'; // Import the Customer interface

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = []; // Initialize customers as an empty array of type Customer

  constructor(private customerService: CustomerService) { // Use private access modifier
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getAllCustomers().subscribe(
      (data: Customer[]) => { // Specify type for data
        this.customers = data;
      },
      (error: any) => { // Specify type for error
        console.error('Error fetching customers:', error);
      }
    );
  }

  addCustomer(customer: Customer): void { // Specify type for customer
    this.customerService.createCustomer(customer).subscribe(
      (response: Customer) => { // Specify type for response
        this.customers.push(response);
      },
      (error: any) => { // Specify type for error
        console.error('Error adding customer:', error);
      }
    );
  }
}

import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customers = []; // Initialize customers as an empty array

  constructor(customerService) {
    this.customerService = customerService;
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(
      (data) => {
        this.customers = data;
      },
      (error) => {
        console.error('Error fetching customers:', error);
      }
    );
  }

  addCustomer(customer) {
    this.customerService.createCustomer(customer).subscribe(
      (response) => {
        this.customers.push(response);
      },
      (error) => {
        console.error('Error adding customer:', error);
      }
    );
  }
}

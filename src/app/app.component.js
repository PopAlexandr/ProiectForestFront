import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Manga Shop Management</h1>
    <product.component></product.component>
    <customer.component></customer.component>
    <category.component></category.component>
    <supplier.component></supplier.component>
    <order.component></order.component>
    <order.item-component></order.item-component>
    <stock.transaction-component></stock.transaction-component>
  `
})

export class AppComponent {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product-list/productcomponent';
import { CustomerComponent } from './components/customer/customer.component';
import { CategoryComponent } from './components/category/category.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { OrderComponent } from './components/order/order.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { StockTransactionComponent } from './components/stocktransaction/stocktransaction.component';

import { HttpClientModule } from '@angular/common/http';
// Import services if you have them
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';
import { CategoryService } from './services/category.service';
import { SupplierService } from './services/supplier.service';
import { OrderService } from './services/order.service';
import { OrderItemService } from './services/orderItem.service';
import { StockTransactionService } from './services/stockTransaction.service';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from '@angular/forms';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent,
    CategoryComponent,
    SupplierComponent,
    OrderComponent,
    OrderItemComponent,
    StockTransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    ProductService,
    CustomerService,
    CategoryService,
    SupplierService,
    OrderService,
    OrderItemService,
    StockTransactionService
  ]
})
export class AppModule {}

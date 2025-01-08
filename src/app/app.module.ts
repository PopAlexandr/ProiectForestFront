import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product-list/productcomponent';
import { CategoryComponent } from './components/category/category.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { StockTransactionComponent } from './components/stocktransaction/stocktransaction.component';

import { HttpClientModule } from '@angular/common/http';
// Import services if you have them
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { SupplierService } from './services/supplier.service';
import { StockTransactionService } from './services/stockTransaction.service';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from '@angular/forms';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    SupplierComponent,
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
    CategoryService,
    SupplierService,
    StockTransactionService
  ]
})
export class AppModule {}
